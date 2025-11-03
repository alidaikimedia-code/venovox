"use client";

import { motion,  } from "framer-motion";
import ContentSection from "../common/hero-content";
import WhenToActSection from "../common/act";
import { ServiceCard } from "../common/card";
import {
 
  MailIcon,
  SpellCheck2,
  CircleDollarSign,
  FileUp,
  LibraryBig,
  MessageSquareQuote,
  Star,
  Code,
} from "lucide-react";
import { Faqs } from "../common/faq-section";
import { ActionSection } from "../common/action";

export default function RegulatoryAndComplianceInvestigations() {

  const faqs = [
    {
      id: "1",
      question: "Do you help with voluntary disclosures?",
      answer: "Yes. We align with counsel to plan timing, scope, and messaging for constructive regulator engagement."
    },
    {
      id: "2",
      question: "How do you select transactions for testing?",
      answer: "We use risk based sampling that focuses on high risk markets, channels, counterparties, and red flag patterns."
    },
    {
      id: "3",
      question: "Can you support a dawn raid response?",
      answer: "Yes. We provide playbooks, on call guidance, evidence logging, and post event stabilization and review."
    },
    {
      id: "4",
      question: "What outcomes should we expect?",
      answer: "Clear answers to regulator questions, evidence that stands up to review, and a practical remediation roadmap."
    },
  ];

  const actionSection = [
    {
      title: "Ready to get started?",
      description: "  If you face a possible breach or a regulator inquiry, speak with Venovox today. Share the basic facts and your timeline. We will propose first steps that protect evidence and show control. We can start light with an intake review, then scale the work as needed. ",
      primaryButton: {
        text: "Get in Touch",
        link: "/my-en/contact-us",
        icon: MailIcon,
      },
    },
  ]

  const services = [
    {
      title: "Anti bribery and corruption",
      description: "We look at payments, benefits, and decision points that may involve public officials or private bribery. We review third party agreements, marketing development funds, rebates, sponsorships, gifts, travel, and entertainment. We compare what was approved to what occurred in the field. We test high risk markets and channels and we map the control gaps that allowed risk to pass.",
      icon: SpellCheck2 ,
      link: "/anti-bribery-and-corruption-investigations/",
    },
    {
      title: "Anti money laundering",
      description: "We test customer due diligence, onboarding steps, risk scoring, screening, and alert handling. We review sample files and look for missing documents, weak justification, and poor escalation. We assess the tuning of transaction monitoring and the quality of investigations. We confirm whether suspicious activity reports were made on time and with enough detail.",
      icon: CircleDollarSign ,
      link: "/anti-bribery-and-corruption-investigations/",
    },
    {
      title: "Sanctions and export controls",
      description: "We screen counterparties, vessels, and beneficial owners. We review routing, transshipment, and payment paths that may hide the true party. We check restricted party lists, sectoral rules, and export classifications. We work with external counsel to judge the risk and to plan disclosures where required.",
      icon: FileUp ,
      link: "/anti-bribery-and-corruption-investigations/",
    },
    {
      title: "Books and records",
      description: "We test the accuracy of accounting entries and supporting documents. We look for vague descriptions, false vendors, round numbers, and off cycle entries. We compare ledgers with contracts and delivery proof. We align payment dates with key events like tenders, site visits, and approvals.",
      icon: LibraryBig ,
      link: "/anti-bribery-and-corruption-investigations/",
    },
    {
      title: "Dawn raid readiness and response",
      description: "We help you prepare playbooks and brief teams. In the event of a raid we support reception, document handling, and legal coordination. We keep a log of actions and items taken. After the event we help you stabilize systems, continue business, and plan a careful internal review.",
      icon: MessageSquareQuote ,
      link: "/anti-bribery-and-corruption-investigations/",
    },
    {
      title: "Monitorships and independent reviews",
      description: "Where a regulator appoints a monitor or requests an independent review, we support planning, evidence gathering, and progress tracking. We set clear milestones, owners, and measures of success. We prepare simple reports that show how risks are being reduced over time.",
      icon: Star ,
      link: "/anti-bribery-and-corruption-investigations/",
    },
    {
      title: "Remediation and program uplift",
      description: "We turn findings into practical change. We update policies, simplify approvals, and add detective controls. We train teams and leaders. We plan quick wins that reduce risk now and longer fixes that build a stronger culture.",
      icon: Code ,
      link: "/anti-bribery-and-corruption-investigations/",
    },
  ]
  const services2 = [ 
    {
      title: "Privilege and work streams",
      description: "We document instructions and separate privileged and non privileged tracks where needed. We use clear labels and distribution lists to keep files clean.",
      link: undefined,
    },
    {
      title: "Regulatory strategy",
      description: "We help you plan timing, scope, and messages. We prepare briefing packs with key facts, actions taken, and remediation plans. We support voluntary disclosures and responses to formal requests.",
      link: undefined,
    },
    {
      title: "Cross border coordination",
      description: "For multi country matters we align with local counsel and partners. We respect privacy and data transfer rules and we keep a single master record so leaders see the whole picture.",
      link: undefined,
    },
  ]

  const services3 = [
    {
      title: "Independent and trusted",
      description: "We report facts as we find them and we act with care. Our work is transparent and repeatable.",
      link: undefined,
    },
    {
      title: "Cross border experience",
      description: "We handle matters that span multiple countries. We work with local experts and follow local law.",
      link: undefined,
    },
    {
      title: "Multidisciplinary team",
      description: "Investigators, forensic accountants, sanctions and AML specialists, and digital analysts work as one team. You get a complete view without managing several vendors.",
      link: undefined,
    },
    {
      title: "Clear communication",
      description: "You get a single point of contact, short updates, and reports that leaders can read in minutes.",
      link: undefined,
    },
  ]
  const services4 = [
    {
      title: "Corporate Intelligence and OSINT",
   
      // link: "https://chatgpt.com/corporate-intelligence-and-osint/",
    },
    {
      title: "Fraud Risk Management and Prevention",
     
      // link: "https://chatgpt.com/corporate-intelligence-and-osint/",
    },
    {
      title: "Asset Tracing and Recovery",
   
      // link: "https://chatgpt.com/corporate-intelligence-and-osint/",
    },
    {
      title: "Digital Forensics and Incident Investigations",
     
      // link: "https://chatgpt.com/corporate-intelligence-and-osint/",
    },
    {
      title: "Litigation Support Investigations",
     
      // link: "https://chatgpt.com/corporate-intelligence-and-osint/",
    },
    {
      title: "Corporate Investigations Hub",
     
      // link: "https://chatgpt.com/corporate-intelligence-and-osint/",
    },
  ]

  const services5 = [
    {
      description: "Clear answers to the questions regulators and boards ask",
      link: undefined,
    },
    {
      description: "Evidence that stands up to legal review and audit",
      link: undefined,
    },
    {
      description: "A practical plan to fix gaps and show progress",
      link: undefined,
    },
    {
      description: "Better controls, better culture, and lower risk going forward",
      link: undefined,
    },
  ]
    return (
    <div className="bg-white px-6 text-gray-900">
      {/* Hero Section */}

      <ContentSection
        mainText="Regulators expect clear answers and a fair process. "
        paragraphs={[
          "   Venovox helps you investigate possible breaches and show credible progress. We focus on facts, legal defensibility, and practical change. Our team reviews high risk transactions, third parties, and control gaps. We work with your legal and compliance leaders to protect privilege and to meet local rules.",
        ]}
      />
   

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl text-center font-bold text-red-600 mb-4">
                What this page covers
              </h2>
              <p className="text-lg text-gray-700 text-center [text-justify:inter-word] hyphens-none leading-relaxed mb-6">
                This page explains how Venovox investigates anti bribery and corruption, anti money laundering, sanctions and export controls, and related books and records issues. It also sets out how we support dawn raid response, independent reviews, and remedial plans. You will see when to start, how we work, what you receive, and the results you can expect.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Act Section */}
      <WhenToActSection
  title="When to act"
  subtitle="Move quickly when there is a credible concern. Early action preserves evidence and builds trust with regulators and your board."
  listItems={[
    "A whistleblower report or hotline alert names a payment or a partner",
    "A regulator request, dawn raid, or inquiry arrives",
    "Sanctions screening flags a hit that was missed in the past",
    "Transaction monitoring shows unusual patterns or structuring",
    "A due diligence review reveals hidden ownership or adverse media",
    "Audit findings point to weak approvals or false records",

  ]}
  highlightBoxText="If the facts are unclear we can begin with a focused intake review and a short chronology. This helps you decide the right scope."
  accentColor="text-red-600"
/>

      {/* Areas We Investigate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  Areas we investigate
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    link={service.link}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Investigation Method Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  Our investigation method
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Venovox follows a disciplined method that protects privilege and produces reliable results. We keep a calm pace and give plain language updates.
                </p>
              </div>

              <div className="space-y-8 bg-white p-8 rounded-lg">
                {[
                  {
                    num: 1,
                    title: "Intake and scoping",
                    description: "We confirm the questions to be answered, the time window, and the teams involved. We set a plan for evidence preservation and stakeholder communication."
                  },
                  {
                    num: 2,
                    title: "Preservation and collection",
                    description: "We place legal holds and secure emails, chats, and files. We collect documents from finance, sales, compliance, and legal. We gather third party contracts, invoices, and proof of service. For digital sources we follow chain of custody."
                  },
                  {
                    num: 3,
                    title: "Transaction testing",
                    description: "We select samples based on risk. We test approvals, support, delivery, and payment routing. We compare data across systems to confirm whether each step was valid and in policy."
                  },
                  {
                    num: 4,
                    title: "Third party and ownership checks",
                    description: "We review beneficial ownership and related parties. We use open sources and structured data to find links, adverse media, and sanctions risk. We confirm whether due diligence was performed and whether red flags were cleared with care."
                  },
                  {
                    num: 5,
                    title: "Interviews and fact pattern",
                    description: "We run structured interviews with staff and partners. We test claims against documents and logs. We build a timeline that explains who acted, what was known, and when decisions were made."
                  },
                  {
                    num: 6,
                    title: "Reporting and advice",
                    description: "We provide an executive summary, a detailed report with findings, and an appendix with evidence. We explain limits and confidence levels. We advise on disclosures, engagement with regulators, and next steps for remediation."
                  }
                ].map((step, index) => (
                  <motion.div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.num}. {step.title}
                        </h3>
                        <p className="text-gray-700 text-justify leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal and Regulator Interface Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  Legal and regulator interface
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We work hand in hand with your counsel. Our goal is to protect privilege, reduce risk, and foster constructive engagement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services2.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Receive Section */}
      <WhenToActSection
  title="What you receive from Venovox"
  listItems={[
    "Risk register with root causes and owners",
    "Transaction testing workbook and sampling method",
    "Issue memos on each significant finding",
    "Board and executive slide pack",
    "Regulator briefing pack with facts and actions",
    "Remediation roadmap with quick wins and long term fixes",
    "Training plan and simple job aids for front line teams",


  ]}
  accentColor="text-red-600"
/>

      {/* Outcomes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                  Outcomes you can expect
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {services5.map((service, index) => (
                    <ServiceCard
                      key={index}
                      description={service.description}
                      link={service.link}
                    />
                  ))}
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Faqs faqs={faqs} head="Frequently asked questions" />

      {/* Why Venovox Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                  Why Venovox
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {services3.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                  />
                ))}
              </div>
             
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Related Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                  Related services
                </h2>
              </div>
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Explore our full set of services that connect with regulatory and compliance investigations. Use the links below to learn more or to request a short scoping call.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {services4.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    // link={service.link}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto  space-y-24 relative">
      {actionSection.map((action, index) => (
    <ActionSection
      key={index}
      title={action.title}
      description={action.description}
      primaryButton={action.primaryButton} 
    />
  ))}
</div>

    </div>
    );
}