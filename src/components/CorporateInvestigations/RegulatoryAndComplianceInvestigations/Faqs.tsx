"use client";

import { FAQSection, type FAQ as FAQType } from "@/components/common/faq-section";

// Export FAQ interface for backward compatibility
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FaqsProps {
  faqs: FAQType[];
  head?: string;
}

export default function Faqs({ faqs, head = "Frequently asked questions" }: FaqsProps) {
  return <FAQSection faqs={faqs} heading={head} />;
}

