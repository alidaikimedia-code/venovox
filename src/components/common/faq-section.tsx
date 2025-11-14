import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HTMLContent } from "@/components/common/HTMLContent";

export type FAQ = {
    id?: string;
    question: string;
    answer: string;
};

interface FAQSectionProps {
    faqs: FAQ[];
    heading?: string;
    sectionKey?: string;
}

export function FAQSection({ faqs, heading, sectionKey = "faq" }: FAQSectionProps) {
    return (
        <section className="mb-20">
            <div className="mx-auto">
                {heading && (
                    <h2 className="text-4xl font-bold mb-12 text-black text-center leading-tight">
                        {heading}
                    </h2>
                )}
                <div className="max-w-4xl mx-auto">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        {faqs.map((faq, faqIndex) => {
                            const value = faq.id || `${sectionKey}-${faqIndex}`;
                            return (
                                <AccordionItem
                                    key={faqIndex}
                                    value={value}
                                    className="border border-gray-200 rounded-lg px-6 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 mb-4 last:mb-0"
                                >
                                    <AccordionTrigger className="text-left font-semibold text-lg text-gray-900 hover:text-red-600 transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 leading-relaxed text-base text-justify pt-2 pb-4">
                                        <HTMLContent 
                                            content={faq.answer}
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export function Faqs({ faqs, head }: { faqs: FAQ[]; head?: string }) {
    return <FAQSection faqs={faqs} heading={head} />;
}
  