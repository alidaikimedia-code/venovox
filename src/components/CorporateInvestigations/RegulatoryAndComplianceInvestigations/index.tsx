"use client";

import Hero from "./Hero";
import Introduction from "./Introduction";
import WhenToAct from "./WhenToAct";
import Cards from "./Cards";
import InvestigationMethod from "./InvestigationMethod";
import Faqs from "./Faqs";
import Cta from "./Cta";
import WhenToActSection from "@/components/common/act";

import {
  heroData,
  introductionData,
  whenToActData,
  cardsSections,
  investigationMethodData,
  whatYouReceiveData,
  faqsData,
  ctaData,
} from "./data";

export default function RegulatoryAndComplianceInvestigations() {
  return (
    <div className="bg-white px-6 text-gray-900">
      {/* Hero Section */}
      <Hero mainText={heroData.mainText} paragraphs={heroData.paragraphs} />

      {/* Introduction Section */}
      <Introduction
        title={introductionData.title}
        description={introductionData.description}
      />

      {/* When to Act Section */}
      <WhenToAct
        title={whenToActData.title}
        subtitle={whenToActData.subtitle}
        listItems={whenToActData.listItems}
        highlightBoxText={whenToActData.highlightBoxText}
      />

      {/* Areas We Investigate Section */}
      <Cards sections={cardsSections} />

      {/* Our Investigation Method Section */}
      <InvestigationMethod
        title={investigationMethodData.title}
        description={investigationMethodData.description}
        steps={investigationMethodData.steps}
      />

      {/* What You Receive Section */}
      <WhenToActSection
        title={whatYouReceiveData.title}
        listItems={whatYouReceiveData.listItems}
        accentColor="text-red-600"
      />

      {/* FAQs Section */}
      <Faqs faqs={faqsData} />

      {/* CTA Section */}
      <Cta actions={ctaData} />
    </div>
  );
}

