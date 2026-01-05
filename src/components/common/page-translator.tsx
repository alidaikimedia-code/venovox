'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translateBatch, clearTranslationCache } from '@/lib/translation';
import { usePathname } from 'next/navigation';

// Component to translate all text content on the page
export default function PageTranslator() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const translationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTranslatingRef = useRef(false);

  useEffect(() => {
    // Clear any pending translations
    if (translationTimeoutRef.current) {
      clearTimeout(translationTimeoutRef.current);
      translationTimeoutRef.current = null;
    }

    if (language === 'en') {
      // If switching back to English, restore original text
      const restoreEnglish = () => {
        const originalTexts = document.querySelectorAll('[data-original-text]');
        originalTexts.forEach((el) => {
          const original = el.getAttribute('data-original-text');
          if (original) {
            // Find the text node and restore it
            const textNode = Array.from(el.childNodes).find(
              node => node.nodeType === Node.TEXT_NODE
            ) as Text;
            if (textNode) {
              textNode.textContent = original;
            } else {
              el.textContent = original;
            }
            // Remove translation markers
            el.removeAttribute('data-translated');
            el.removeAttribute('data-original-text');
          }
        });
        console.log('Restored English text for', originalTexts.length, 'elements');
      };

      // Try immediately, then retry after a short delay to catch any late-rendered content
      restoreEnglish();
      translationTimeoutRef.current = setTimeout(restoreEnglish, 100);
      return;
    }

    // Clear cache when language changes
    clearTranslationCache();
    isTranslatingRef.current = false;

    // Clear all translation markers so we can re-translate
    const translatedElements = document.querySelectorAll('[data-translated]');
    translatedElements.forEach((el) => {
      el.removeAttribute('data-translated');
    });

    // Translate all text on the page
    const translatePage = async () => {
      if (isTranslatingRef.current) {
        console.log('Translation already in progress, skipping...');
        return;
      }

      isTranslatingRef.current = true;
      const body = document.body;
      if (!body) {
        console.warn('Body element not found');
        isTranslatingRef.current = false;
        return;
      }

      // Wait for DOM to be ready using requestAnimationFrame
      await new Promise(resolve => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      // Collect all text nodes that need translation
      const textNodes: Array<{ node: Text; text: string; parent: Element }> = [];
      
      const walker = document.createTreeWalker(
        body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const text = node.textContent?.trim();
            if (!text || text.length === 0 || text.length < 2) return NodeFilter.FILTER_REJECT;
            
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            
            // Skip certain elements
            const skipTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'META', 'LINK'];
            if (skipTags.includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
            
            // Skip if already translated or marked as no-translate
            if (parent.hasAttribute('data-translated')) return NodeFilter.FILTER_REJECT;
            if (parent.hasAttribute('data-no-translate')) return NodeFilter.FILTER_REJECT;
            
            // Skip if parent is in a no-translate container
            if (parent.closest('[data-no-translate]')) return NodeFilter.FILTER_REJECT;
            
            // Skip numbers, URLs, emails, etc.
            if (/^[\d\s\-\+\(\)]+$/.test(text)) return NodeFilter.FILTER_REJECT;
            if (/^https?:\/\//.test(text)) return NodeFilter.FILTER_REJECT;
            if (/^[\w\.-]+@[\w\.-]+\.\w+$/.test(text)) return NodeFilter.FILTER_REJECT;
            
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      let node;
      while (node = walker.nextNode()) {
        const textNode = node as Text;
        const text = textNode.textContent?.trim();
        const parent = textNode.parentElement;
        if (text && parent && text.length >= 2) {
          textNodes.push({ node: textNode, text, parent });
        }
      }

      // Group texts for batch translation
      const textsToTranslate = textNodes.map(item => item.text);
      
      if (textsToTranslate.length === 0) {
        console.log('No text nodes found to translate');
        isTranslatingRef.current = false;
        return;
      }

      console.log(`Translating ${textsToTranslate.length} text nodes to ${language}`);

      // Translate in batches
      const batchSize = 50; // Google API allows up to 100 texts per request
      for (let i = 0; i < textsToTranslate.length; i += batchSize) {
        const batch = textsToTranslate.slice(i, i + batchSize);
        const batchIndices = textNodes.slice(i, i + batchSize);
        
        try {
          const translatedTexts = await translateBatch(batch, language);
          
          // Update DOM with translations
          batchIndices.forEach((item, idx) => {
            const translated = translatedTexts[idx];
            if (translated && translated !== item.text) {
              // Store original text if not already stored
              if (!item.parent.hasAttribute('data-original-text')) {
                item.parent.setAttribute('data-original-text', item.text);
              }
              item.node.textContent = translated;
              item.parent.setAttribute('data-translated', 'true');
            }
          });
          console.log(`Translated batch ${Math.floor(i / batchSize) + 1}`);
        } catch (error) {
          console.error('Batch translation error:', error);
          // Log the error details
          if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
          }
        }
        
        // Small delay between batches to avoid rate limiting
        if (i + batchSize < textsToTranslate.length) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }

      isTranslatingRef.current = false;
    };

    // Use requestAnimationFrame for immediate execution, then retry after a short delay
    // This ensures we catch both immediate DOM updates and any late-rendered content
    const startTranslation = () => {
      console.log('Starting page translation for language:', language, 'pathname:', pathname);
      translatePage().catch(err => {
        console.error('Error in translatePage:', err);
        isTranslatingRef.current = false;
      });
    };

    // Start immediately with requestAnimationFrame
    requestAnimationFrame(() => {
      requestAnimationFrame(startTranslation);
    });

    // Also retry after a short delay to catch any content that renders later
    translationTimeoutRef.current = setTimeout(() => {
      if (!isTranslatingRef.current) {
        startTranslation();
      }
    }, 200);

    return () => {
      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
        translationTimeoutRef.current = null;
      }
      isTranslatingRef.current = false;
    };
  }, [language, pathname]); // Also depend on pathname to trigger on navigation

  return null; // This component doesn't render anything
}

