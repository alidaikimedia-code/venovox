import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  type FAQ = {
    id: string;
    question: string;
    answer: string;
  };
  
  interface AccordionDemoProps {
    faqs: FAQ[];
    head?: string;
  }
  
  export function Faqs({ faqs, head }: AccordionDemoProps) {
    return (
      <div className="w-full space-y-6 py-16 ">
        {head && <h3 className="text-3xl  font-bold text-red-600 text-center">{head}</h3>}
  
        <Accordion
          type="single"
          collapsible
          className="w-1/2 mx-auto"
          defaultValue={faqs[0]?.id}
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left font-medium text-xl ">
                {faq.question}
              </AccordionTrigger>
  
              <AccordionContent className="flex flex-col gap-4 text-lg ">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
  