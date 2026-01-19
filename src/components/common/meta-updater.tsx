'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translateText, shouldSkipTranslation } from '@/lib/translation';
import { usePathname } from 'next/navigation';

const BASE_URL = 'https://venovox.com';
const defaultMetaDescription = "Venovox helps businesses in Malaysia with secure background checks, CTOS & SSM reports, company profile verification, and anti-money laundering services. ISO 27001 certified risk management solutions.";
const defaultMetaTitle = "Trusted Background Screening & Company Search | Venovox";

// Clean up any existing duplicate meta tags on initialization
function cleanupDuplicateMetaTags() {
  const metaNames = ['description'];
  const ogProperties = ['og:title', 'og:description', 'og:url'];

  // Clean up regular meta tags
  metaNames.forEach(name => {
    const tags = document.querySelectorAll(`meta[name="${name}"]`);
    tags.forEach((tag, index) => {
      if (index > 0) tag.parentNode?.removeChild(tag);
    });
  });

  // Clean up OG meta tags (check both property and name)
  ogProperties.forEach(prop => {
    const tags = document.querySelectorAll(
      `meta[property="${prop}"], meta[name="${prop}"]`
    );
    tags.forEach((tag, index) => {
      if (index > 0) tag.parentNode?.removeChild(tag);
    });
  });

  // Clean up canonical links
  const canonicals = document.querySelectorAll('link[rel="canonical"]');
  canonicals.forEach((link, index) => {
    if (index > 0) link.parentNode?.removeChild(link);
  });
}

export default function MetaUpdater() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const metaUpdateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isUpdatingRef = useRef(false);
  const lastUpdatedRef = useRef<string>('');
  const hasInitializedRef = useRef(false);

  // Run cleanup once on mount
  useEffect(() => {
    if (!hasInitializedRef.current) {
      cleanupDuplicateMetaTags();
      hasInitializedRef.current = true;
    }
  }, []);

  useEffect(() => {
    // Skip translations for bots/crawlers
    if (shouldSkipTranslation()) {
      // Still update canonical URL for bots
      const canonicalUrl = `${BASE_URL}${pathname}`;
      updateCanonicalUrl(canonicalUrl);
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

      // Update canonical URL based on current pathname
      const canonicalUrl = `${BASE_URL}${pathname}`;
      updateCanonicalUrl(canonicalUrl);

      if (language === 'en') {
        // Restore original English meta tags immediately
        updateMetaTag('description', defaultMetaDescription);
        updateMetaTag('og:description', defaultMetaDescription);
        updateTitle(defaultMetaTitle);
        updateMetaTag('og:title', defaultMetaTitle);
        updateMetaTag('og:url', canonicalUrl);
        lastUpdatedRef.current = updateKey;
        isUpdatingRef.current = false;
        return;
      }

      try {
        // Translate meta description and title (will use cache if available)
        const [translatedDescription, translatedTitle] = await Promise.all([
          translateText(defaultMetaDescription, language),
          translateText(defaultMetaTitle, language)
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
        // Keep original on error
        updateMetaTag('description', defaultMetaDescription);
        updateMetaTag('og:description', defaultMetaDescription);
        updateTitle(defaultMetaTitle);
        updateMetaTag('og:title', defaultMetaTitle);
        updateMetaTag('og:url', canonicalUrl);
        lastUpdatedRef.current = updateKey;
      } finally {
        isUpdatingRef.current = false;
      }
    };

    // Single debounced call instead of multiple triggers
    metaUpdateTimeoutRef.current = setTimeout(() => {
      if (!isUpdatingRef.current) {
        updateMetaTags();
      }
    }, 100);

    return () => {
      if (metaUpdateTimeoutRef.current) {
        clearTimeout(metaUpdateTimeoutRef.current);
        metaUpdateTimeoutRef.current = null;
      }
      isUpdatingRef.current = false;
    };
  }, [language, pathname]); // Also depend on pathname to trigger on navigation

  return null; // This component doesn't render anything
}

function updateMetaTag(name: string, content: string) {
  if (name.startsWith('og:')) {
    // Remove all existing OG meta tags with this property to prevent duplicates
    // Check both property and name attributes as different sources may use either
    const existingTags = document.querySelectorAll(
      `meta[property="${name}"], meta[name="${name}"]`
    );

    // Keep only the first one (if any) and remove duplicates
    let ogMeta: Element | null = null;
    existingTags.forEach((tag, index) => {
      if (index === 0) {
        ogMeta = tag;
      } else {
        // Remove duplicate
        tag.parentNode?.removeChild(tag);
      }
    });

    if (!ogMeta) {
      ogMeta = document.createElement('meta');
      ogMeta.setAttribute('property', name);
      document.head.appendChild(ogMeta);
    }
    ogMeta.setAttribute('content', content);
    ogMeta.setAttribute('data-dynamic', 'true'); // Mark as dynamically managed
  } else {
    // Remove all existing meta tags with this name to prevent duplicates
    const existingTags = document.querySelectorAll(`meta[name="${name}"]`);

    // Keep only the first one (if any) and remove duplicates
    let meta: Element | null = null;
    existingTags.forEach((tag, index) => {
      if (index === 0) {
        meta = tag;
      } else {
        // Remove duplicate
        tag.parentNode?.removeChild(tag);
      }
    });

    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
    meta.setAttribute('data-dynamic', 'true'); // Mark as dynamically managed
  }
}

function updateTitle(title: string) {
  document.title = title;
  // Also update og:title
  updateMetaTag('og:title', title);
}

function updateCanonicalUrl(url: string) {
  // Remove all existing canonical links to prevent duplicates, keep only the first
  const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');

  let canonicalLink: Element | null = null;
  existingCanonicals.forEach((link, index) => {
    if (index === 0) {
      canonicalLink = link;
    } else {
      // Remove duplicate
      link.parentNode?.removeChild(link);
    }
  });

  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', url);
  canonicalLink.setAttribute('data-dynamic', 'true'); // Mark as dynamically managed

  // Also update og:url
  updateMetaTag('og:url', url);
}

