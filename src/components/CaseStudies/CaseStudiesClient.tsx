"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { FAQSection } from "../common/faq-section";
import { ActionSection } from "../common/action";

interface CaseStudyCard {
  title: string;
  description: string;
  industry: string;
  url: string;
  imageUrl: string;
}

export default function CaseStudiesClient() {
  const caseStudies: CaseStudyCard[] = [
    {
      title: "International School in Malaysia — Protecting Student Safety",
      description: "A pre-employment screening flagged a sexual‑offense record for a security guard candidate, enabling the school to protect students and uphold its standards.",
      industry: "Education",
      url: "/case-studies/international-school-malaysia",
      imageUrl: "/case-studies/international-school-screening-01.png",
    },
    {
      title: "International Bank — Meeting the 'Fit & Proper' Standard",
      description: "Comprehensive checks aligned to Bank Negara guidance identified three high‑risk candidates before hiring—safeguarding data, compliance, and trust.",
      industry: "Banking",
      url: "/case-studies/international-bank-fit-and-proper-test",
      imageUrl: "/case-studies/banking-fit-and-proper-screening-01.png",
    },
    {
      title: "Logistics Firm — Trusted Drivers for High‑Value Cargo",
      description: "Targeted screening across civil litigation, reputation, and driving history reduced operational risk; annual re‑checks institutionalized ongoing assurance.",
      industry: "Logistics",
      url: "/case-studies/logistics-driver-screening",
      imageUrl: "/case-studies/logistics-driver-background-check-01.png",
    },
    {
      title: "Venture Capital — Red Flags Before an Acquisition",
      description: "Full‑scope due diligence on a target and its directors surfaced financial and reputational issues—informing a disciplined decision not to proceed.",
      industry: "Investment",
      url: "/case-studies/venture-capital-due-diligence",
      imageUrl: "/case-studies/venture-capital-due-diligence-malaysia-01.png",
    },
    {
      title: "Airline — 400 Candidates Screened in Two Working Days",
      description: "An accelerated screening programme across identity, financial health, and legal records enabled rapid, confident hiring at scale.",
      industry: "Aviation",
      url: "/case-studies/airline-mass-screening",
      imageUrl: "/case-studies/airlines-mass-background-screening-01.png",
    },
    {
      title: "Pharmaceutical Company — Credentials Verified for Senior Hires",
      description: "Education and employment verification uncovered falsified claims, delivering a shortlist that management could trust.",
      industry: "Healthcare",
      url: "/case-studies/pharma-employee-verification",
      imageUrl: "/case-studies/pharma-executive-background-screening-01.png",
    },
  ];

  const faqs = [
    {
      id: "1",
      question: "Which industries does Venovox serve?",
      answer: "We support clients across banking and finance, logistics and transportation, education, aviation, healthcare, private equity, and corporate services.",
    },
    {
      id: "2",
      question: "How fast can a screening be completed?",
      answer: "Standard checks complete within 2–3 working days, subject to scope and jurisdiction. Accelerated timelines are available for high‑volume needs.",
    },
    {
      id: "3",
      question: "Are Venovox screenings compliant in Malaysia?",
      answer: "Yes. Our processes align with Malaysian legal, privacy, and employment guidelines, and can be configured to your governance framework.",
    },
    {
      id: "4",
      question: "Can we customise the scope?",
      answer: "Absolutely. Each engagement is tailored—whether you need pre‑employment checks, executive vetting, or transaction‑grade due diligence.",
    },
    {
      id: "5",
      question: "How do we get started?",
      answer: "Contact us to discuss objectives and risk thresholds. We will recommend an approach and provide a clear timeline and deliverables.",
    },
  ];

  const actionSection = [
    {
      title: "Your Partner in Intelligent Risk Decisions",
      description: "Whether you are hiring, investing, or protecting your operations, Venovox delivers clarity with discretion. Speak with our team to shape a screening or due diligence programme that fits your risk profile.",
      primaryButton: {
        text: "Get in Touch",
        link: "/my-en/contact-us",
        icon: MailIcon,
      },
    },
  ];

  return (
    <div className="px-6">
      {/* Hero Section */}
      <section className="relative w-full py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto"
          >
            {/* Top decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-12"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-full max-w-md" />
            </motion.div>

            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center space-y-8"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed px-4 text-gray-800">
                Real Proof. Refined Precision.
              </p>
              
              <div className="relative py-8 px-6 sm:px-12">
                <p className="text-base sm:text-lg md:text-xl text-center leading-relaxed text-gray-700">
                  Where discretion meets excellence. At Venovox, every engagement is treated with the care, rigour, and confidentiality expected by leading institutions. This curated portfolio showcases how our background screening and corporate intelligence help clients in Malaysia—and beyond—make safer, smarter decisions with absolute confidence.
                </p>
              </div>
            </motion.div>

            {/* Bottom decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-4 mt-12"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-full max-w-md" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Venovox Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 text-center">
              Why Venovox
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Venovox is a Kuala Lumpur–based background screening and corporate due diligence partner for organizations that demand clarity without compromise. Our method pairs advanced data analysis with human expertise to surface what truly matters: integrity, compliance, and reputation protection. From pre-employment checks to investment due diligence, we deliver results with quiet efficiency and impeccable standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                Case Studies That Show Real Progress
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Explore a selection of recent engagements across education, banking, logistics, investment, aviation, and healthcare. Each card represents a verified outcome—distilled for clarity, written for decision‑makers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1 h-full flex flex-col"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={caseStudy.imageUrl}
                        alt={caseStudy.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full backdrop-blur-sm">
                          {caseStudy.industry}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-red-600 transition-colors duration-300">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-justify mb-4 flex-grow">
                        {caseStudy.description}
                      </p>
                      <Link
                        href={caseStudy.url}
                        className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn more
                        <svg
                          className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Action Section */}
      <div className="container mx-auto space-y-24 relative py-12">
        {actionSection.map((action, index) => (
          <ActionSection
            key={index}
            title={action.title}
            description={action.description}
            primaryButton={action.primaryButton}
          />
        ))}
      </div>

      {/* FAQs Section */}
      <FAQSection faqs={faqs} heading="FAQs" />
    </div>
  );
}

