"use client";

import Hero from "../RegulatoryAndComplianceInvestigations/Hero";
import Introduction from "../RegulatoryAndComplianceInvestigations/Introduction";
import WhenToAct from "../RegulatoryAndComplianceInvestigations/WhenToAct";
import Cards from "../RegulatoryAndComplianceInvestigations/Cards";
import Faqs from "../RegulatoryAndComplianceInvestigations/Faqs";
import Cta from "../RegulatoryAndComplianceInvestigations/Cta";
import WhenToActSection from "@/components/common/act";
import ThreeStepBand from "./ThreeStepBand";
import SimpleSection from "./SimpleSection";

import {
  heroData,
  threeStepBandData,
  introductionData,
  whyBrandMattersData,
  whenToActData,
  cardsSections,
  legalEnforcementSupportData,
  crossBorderCapabilityData,
  whatYouReceiveData,
  faqsData,
  ctaData,
} from "./data";

export default function BrandAndIpInvestigations() {
  return (
    <div className="bg-white px-6 text-gray-900">
      {/* Hero Section */}
      <Hero mainText={heroData.mainText} paragraphs={heroData.paragraphs} />

      {/* Three Step Band */}
      <ThreeStepBand steps={threeStepBandData} />

      {/* Introduction Section */}
      <Introduction
        title={introductionData.title}
        description={introductionData.description}
      />

      {/* Why brand and IP abuse matters */}
      <SimpleSection
        title={whyBrandMattersData.title}
        description={whyBrandMattersData.description}
      />

      {/* When to Act Section */}
      <WhenToAct
        title={whenToActData.title}
        subtitle={whenToActData.subtitle}
        listItems={whenToActData.listItems}
        highlightBoxText={whenToActData.highlightBoxText}
      />

      {/* Cards Sections */}
      <Cards sections={cardsSections} />

      {/* Legal and enforcement support */}
      <WhenToActSection
        title={legalEnforcementSupportData.title}
        subtitle={legalEnforcementSupportData.subtitle}
        listItems={legalEnforcementSupportData.listItems}
        accentColor="text-red-600"
      />

      {/* Cross border capability */}
      <SimpleSection
        title={crossBorderCapabilityData.title}
        description={crossBorderCapabilityData.description}
        bgColor="bg-white"
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

