'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * MetaUpdater - Minimal component that only handles canonical URL for English routes
 *
 * IMPORTANT: This component no longer modifies title or description tags.
 * All meta tags are now handled server-side via generateMetadata in page components.
 *
 * For language routes (/ms, /zh, /ar, /de, /fr, /my-en), this component does nothing
 * because those routes have proper server-side metadata via generateMetadata.
 */

const BASE_URL = 'https://venovox.com';
const defaultMetaDescription = "Venovox helps businesses in Malaysia with secure background checks, CTOS & SSM reports, company profile verification, and anti-money laundering services. ISO 27001 certified risk management solutions.";
const defaultMetaTitle = "Trusted Background Screening & Company Search | Venovox";

// CRITICAL: Set meta tags immediately on script execution (before React hydration)
// This ensures SEO tools see rendered meta tags
if (typeof document !== 'undefined') {
  // Get existing meta tags from Next.js metadata API (server-side rendered)
  const existingTitle = document.title || document.querySelector('title')?.textContent || null;
  const existingDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || null;
  
  // Use page-specific metadata if available, otherwise use defaults
  const pageTitle = existingTitle || defaultMetaTitle;
  const pageDescription = existingDescription || defaultMetaDescription;
  
  // Set meta tags immediately (synchronously) - no delays
  // This runs before React components mount, ensuring SEO tools see them
  if (!document.querySelector('meta[name="description"]')) {
    const descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    descMeta.setAttribute('content', pageDescription);
    document.head.appendChild(descMeta);
  } else {
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);
  }
  
  if (!document.querySelector('meta[property="og:description"]')) {
    const ogDescMeta = document.createElement('meta');
    ogDescMeta.setAttribute('property', 'og:description');
    ogDescMeta.setAttribute('content', pageDescription);
    document.head.appendChild(ogDescMeta);
  } else {
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageDescription);
  }
  
  // Ensure title is set
  if (!document.querySelector('title')) {
    const titleTag = document.createElement('title');
    titleTag.textContent = pageTitle;
    document.head.appendChild(titleTag);
  } else {
    const titleTag = document.querySelector('title');
    if (titleTag) {
      titleTag.textContent = pageTitle;
      document.title = pageTitle;
    }
  }
  
  if (!document.querySelector('meta[property="og:title"]')) {
    const ogTitleMeta = document.createElement('meta');
    ogTitleMeta.setAttribute('property', 'og:title');
    ogTitleMeta.setAttribute('content', pageTitle);
    document.head.appendChild(ogTitleMeta);
  } else {
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
  }
}

export default function MetaUpdater() {
  const pathname = usePathname();
  const metaUpdateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isUpdatingRef = useRef(false);
  const lastUpdatedRef = useRef<string>('');
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // CRITICAL: Remove duplicates first, then set meta tags
    // This ensures only one title and one description exist
    if (typeof document !== 'undefined') {
      removeDuplicateMetaTags('description');
      removeDuplicateMetaTags('og:description');
      removeDuplicateMetaTags('og:title');
      
      // Remove duplicate title tags
      const allTitleTags = document.querySelectorAll('title');
      if (allTitleTags.length > 1) {
        for (let i = 1; i < allTitleTags.length; i++) {
          allTitleTags[i].remove();
        }
      }
    }

    const canonicalUrl = `${BASE_URL}${pathname}`;
    
    // Get existing meta tags from Next.js metadata API (page-specific)
    const existingTitle = getExistingTitle();
    const existingDescription = getExistingMetaTag('description');
    
    // Use page-specific metadata if available, otherwise use defaults
    const pageTitle = existingTitle || defaultMetaTitle;
    const pageDescription = existingDescription || defaultMetaDescription;

    // CRITICAL: Set meta tags immediately on every pathname change (synchronously)
    // This ensures SEO tools always see rendered meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('og:description', pageDescription);
    updateTitle(pageTitle);
    updateMetaTag('og:title', pageTitle);
    updateCanonicalUrl(canonicalUrl);
    
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
    }

    // Skip translations for bots/crawlers
    if (shouldSkipTranslation()) {
      // Still update canonical URL for bots
      updateCanonicalUrl(canonicalUrl);
      // Ensure meta tags are set for bots (use page-specific if available)
      updateMetaTag('description', pageDescription);
      updateMetaTag('og:description', pageDescription);
      updateTitle(pageTitle);
      updateMetaTag('og:title', pageTitle);
      return;
    }

    // Clear any pending updates
    if (metaUpdateTimeoutRef.current) {
      clearTimeout(metaUpdateTimeoutRef.current);
      metaUpdateTimeoutRef.current = null;
    }

    // Check if we've already updated for this pathname + language combination
    const updateKey = `${pathname}:${language}`;
    if (lastUpdatedRef.current === updateKey) {
      return; // Already updated
    }

    const updateMetaTags = async () => {
      if (isUpdatingRef.current) {
        return; // Prevent duplicate updates
      }

      isUpdatingRef.current = true;

      // Get current page-specific meta tags (they might have changed)
      const currentTitle = getExistingTitle() || pageTitle;
      const currentDescription = getExistingMetaTag('description') || pageDescription;

      // Update canonical URL based on current pathname
      updateCanonicalUrl(canonicalUrl);

      if (language === 'en') {
        // Use page-specific meta tags for English (synchronous - no async)
        // CRITICAL: Update immediately and synchronously for SEO tools
        updateMetaTag('description', currentDescription);
        updateMetaTag('og:description', currentDescription);
        updateTitle(currentTitle);
        updateMetaTag('og:title', currentTitle);
        updateMetaTag('og:url', canonicalUrl);
        lastUpdatedRef.current = updateKey;
        isUpdatingRef.current = false;
        return;
      }

      try {
        // Translate page-specific meta description and title
        const [translatedDescription, translatedTitle] = await Promise.all([
          translateText(currentDescription, language),
          translateText(currentTitle, language)
        ]);

        // Update meta tags immediately after translation
        updateMetaTag('description', translatedDescription);
        updateMetaTag('og:description', translatedDescription);
        updateTitle(translatedTitle);
        updateMetaTag('og:title', translatedTitle);
        updateMetaTag('og:url', canonicalUrl);
        lastUpdatedRef.current = updateKey;
      } catch (error) {
        console.error('Error translating meta tags:', error);
        // Keep original on error (page-specific if available)
        updateMetaTag('description', currentDescription);
        updateMetaTag('og:description', currentDescription);
        updateTitle(currentTitle);
        updateMetaTag('og:title', currentTitle);
        updateMetaTag('og:url', canonicalUrl);
        lastUpdatedRef.current = updateKey;
      } finally {
        isUpdatingRef.current = false;
      }
    };

    // For English, update immediately (synchronous - no delay) - critical for SEO
    // For other languages, update as soon as possible
    if (language === 'en') {
      updateMetaTags();
    } else {
      // Use requestAnimationFrame for fastest possible update
      requestAnimationFrame(() => {
        updateMetaTags();
      });
    }

    return () => {
      if (metaUpdateTimeoutRef.current) {
        clearTimeout(metaUpdateTimeoutRef.current);
        metaUpdateTimeoutRef.current = null;
      }
    };
  }, [language, pathname]); // Also depend on pathname to trigger on navigation

  return null; // This component doesn't render anything
}

// Remove duplicate meta tags before updating
function removeDuplicateMetaTags(name: string) {
  if (typeof document === 'undefined') return;
  
  if (name.startsWith('og:')) {
    // Remove all duplicate Open Graph meta tags, keep only the first one
    const allTags = document.querySelectorAll(`meta[property="${name}"]`);
    if (allTags.length > 1) {
      // Remove all except the first one
      for (let i = 1; i < allTags.length; i++) {
        allTags[i].remove();
      }
    }
  } else {
    // Remove all duplicate regular meta tags, keep only the first one
    const allTags = document.querySelectorAll(`meta[name="${name}"]`);
    if (allTags.length > 1) {
      // Remove all except the first one
      for (let i = 1; i < allTags.length; i++) {
        allTags[i].remove();
      }
    }
  }
}

function updateMetaTag(name: string, content: string) {
  if (typeof document === 'undefined') return;
  
  // Remove duplicates first
  removeDuplicateMetaTags(name);
  
  if (name.startsWith('og:')) {
    // Update Open Graph meta tag
    let ogMeta = document.querySelector(`meta[property="${name}"]`);
    if (!ogMeta) {
      ogMeta = document.createElement('meta');
      ogMeta.setAttribute('property', name);
      document.head.appendChild(ogMeta);
    }
    ogMeta.setAttribute('content', content);
  } else {
    // Update regular meta tag
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }
}

// Get existing meta tag content from Next.js metadata API
function getExistingMetaTag(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  if (name.startsWith('og:')) {
    const meta = document.querySelector(`meta[property="${name}"]`);
    return meta ? meta.getAttribute('content') : null;
  } else {
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta ? meta.getAttribute('content') : null;
  }
}

// Get existing title from document
function getExistingTitle(): string | null {
  if (typeof document === 'undefined') return null;
  return document.title || null;
}

function updateTitle(title: string) {
  if (typeof document === 'undefined') return;
  
  // Remove duplicate title tags
  const allTitleTags = document.querySelectorAll('title');
  if (allTitleTags.length > 1) {
    // Keep only the first title tag, remove others
    for (let i = 1; i < allTitleTags.length; i++) {
      allTitleTags[i].remove();
    }
  }
  
  // Update document title - this is critical for SEO tools
  let titleTag = document.querySelector('title');
  if (!titleTag) {
    titleTag = document.createElement('title');
    document.head.appendChild(titleTag);
  }
  titleTag.textContent = title;
  document.title = title;
  
  // Also update og:title
  updateMetaTag('og:title', title);
}

function updateCanonicalUrl(url: string) {
  // Update canonical link tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', url);
  
  // Also update og:url
  updateMetaTag('og:url', url);
}

