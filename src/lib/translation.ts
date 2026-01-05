'use client';

import { Language } from '@/contexts/LanguageContext';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATION_API_KEY;
const TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';

// Log API key status (only first characters for security)
if (typeof window !== 'undefined') {
  if (API_KEY) {
    console.log('✅ Google Translation API key loaded:', API_KEY.substring(0, 10) + '...');
  } else {
    console.error('❌ Google Translation API key NOT found!');
    console.error('Please create .env.local file with: NEXT_PUBLIC_GOOGLE_TRANSLATION_API_KEY=your_key');
  }
}

// Cache for translations to avoid redundant API calls
const translationCache = new Map<string, string>();

interface TranslationResponse {
  data: {
    translations: Array<{
      translatedText: string;
      detectedSourceLanguage?: string;
    }>;
  };
}

export async function translateText(
  text: string,
  targetLanguage: Language
): Promise<string> {
  // Return original text if English (default language)
  if (targetLanguage === 'en') {
    return text;
  }

  // Check cache first
  const cacheKey = `${text}:${targetLanguage}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  // Skip empty or whitespace-only text
  if (!text || !text.trim()) {
    return text;
  }

  if (!API_KEY) {
    console.error('Google Translation API key not found! Please check .env.local file');
    console.error('Expected: NEXT_PUBLIC_GOOGLE_TRANSLATION_API_KEY');
    return text;
  }

  try {
    const response = await fetch(
      `${TRANSLATE_API_URL}?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          format: 'text',
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Translation API error response:', errorText);
      throw new Error(`Translation API error: ${response.status} ${response.statusText}`);
    }

    const data: TranslationResponse = await response.json();
    const translatedText = data.data.translations[0]?.translatedText || text;

    // Cache the translation
    translationCache.set(cacheKey, translatedText);

    return translatedText;
  } catch (error) {
    console.error('Translation error for text:', text, 'target:', targetLanguage, error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    return text; // Return original text on error
  }
}

export async function translateBatch(
  texts: string[],
  targetLanguage: Language
): Promise<string[]> {
  if (targetLanguage === 'en') {
    return texts;
  }

  if (!API_KEY) {
    console.error('Google Translation API key not found! Please check .env.local file');
    console.error('Expected: NEXT_PUBLIC_GOOGLE_TRANSLATION_API_KEY');
    return texts;
  }

  // Filter out empty texts and check cache
  const textsToTranslate: { text: string; index: number }[] = [];
  const results: string[] = new Array(texts.length);

  texts.forEach((text, index) => {
    if (!text || !text.trim()) {
      results[index] = text;
      return;
    }

    const cacheKey = `${text}:${targetLanguage}`;
    if (translationCache.has(cacheKey)) {
      results[index] = translationCache.get(cacheKey)!;
    } else {
      textsToTranslate.push({ text, index });
    }
  });

  if (textsToTranslate.length === 0) {
    return results;
  }

  try {
    const response = await fetch(
      `${TRANSLATE_API_URL}?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: textsToTranslate.map(t => t.text),
          target: targetLanguage,
          format: 'text',
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Batch Translation API error response:', errorText);
      throw new Error(`Translation API error: ${response.status} ${response.statusText}`);
    }

    const data: TranslationResponse = await response.json();
    const translations = data.data.translations;

    // Map translations back to their original positions
    textsToTranslate.forEach((item, idx) => {
      const translatedText = translations[idx]?.translatedText || item.text;
      results[item.index] = translatedText;
      // Cache the translation
      translationCache.set(`${item.text}:${targetLanguage}`, translatedText);
    });

    return results;
  } catch (error) {
    console.error('Batch translation error:', error);
    // Return original texts on error
    textsToTranslate.forEach(item => {
      results[item.index] = item.text;
    });
    return results;
  }
}

// Clear cache when language changes
export function clearTranslationCache() {
  translationCache.clear();
}

