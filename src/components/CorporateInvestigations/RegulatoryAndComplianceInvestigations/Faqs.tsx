"use client";

import { Faqs as FaqsComponent } from "@/components/common/faq-section";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FaqsProps {
  faqs: FAQ[];
  head?: string;
}

export default function Faqs({ faqs, head = "Frequently asked questions" }: FaqsProps) {
  return <FaqsComponent faqs={faqs} head={head} />;
}

