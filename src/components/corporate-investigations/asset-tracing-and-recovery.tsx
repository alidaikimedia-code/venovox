"use client";

import { motion, } from "framer-motion";
import { ActionSection } from "../common/action";
import ContentSection from "../common/hero-content";


import { ServiceCard } from "../common/card";
import {

  Telescope,
  BookOpenCheck,
  Brain,
  Gpu,
  GlobeLock,
  MapPin,
  Activity,
  MailIcon,

} from "lucide-react";
import { Faqs } from "../common/faq-section";
import WhenToActSection from "../common/act";

export default function AssetTracingAndRecovery() {

  const services = [
    {
      title: "Discovery from public records",
      description: "We collect information from corporate and beneficial ownership registers, land and property records, ship and aircraft registries, trademark and patent databases, court filings, procurement records, customs data, and licensing sources. We look for changes in ownership, new filings that align with key dates, and links between people and entities that point to hidden interests.",
      icon: Telescope,
      link: undefined,
    },
    {
      title: "Forensic accounting and transaction testing",
      description: "We review general ledgers, bank statements where available, invoices, contracts, and payment files. We test for round sum payments, split payments, off cycle activity, shell vendors, and unusual rebates. We align payments with known events and look for asset purchases that match the pattern of loss. Where needed we work with your auditors and controllers to secure read only access so the business can continue while we work.",
      icon: BookOpenCheck,
      link: undefined,
    },
    {
      title: "Open source and human source intelligence",
      description: "We search media, trade publications, social networks, domain records, corporate announcements, and community sources. We speak with knowledgeable people where lawful and appropriate. This helps confirm whether an asset is in use, where it is located, and who may control it. We are careful with privacy rules and local custom and we keep a clean record of sources.",
      icon: Brain,
      link: undefined,
    },
    {
      title: "Digital forensics support",
      description: "If data theft or account compromise is suspected we work with our digital team to review devices, logs, and cloud systems. We confirm who accessed what and when, and whether files were moved to external drives or personal accounts. The result is a stronger link between a person, a time period, and a transfer of value.",
      icon: Gpu,
      link: undefined,
    },
    {
      title: "Network mapping and link analysis",
      description: "We turn names, entities, addresses, and identifiers into a graph that shows relationships. The graph helps us see common directors, shared contact details, nominee patterns, and circular transactions. This often reveals the next place to look or a location where a freezing step may succeed.",
      icon: GlobeLock,
      link: undefined,
    },
  ];

  const services2 = [
    {
      title: "Independent and discreet",
      description: "Venovox is trusted because we report facts without fear or favor. We keep a low profile, protect privacy, and act with care in sensitive settings.",

      link: undefined,
    },
    {
      title: "Cross border reach",
      description: "We work across regions through a vetted partner network. We handle language, local practice, and data rules so your case keeps moving.",
      link: undefined,
    },
    {
      title: "Multidisciplinary team",
      description: "Our investigators, forensic accountants, digital specialists, and intelligence analysts work as one team. You get a complete view without managing multiple vendors.",
      link: undefined,
    },
    {
      title: "Speed with precision",
      description: "We move quickly without losing accuracy. Early steps focus on evidence preservation and high value leads so you see results sooner.",
      link: undefined,
    }, {
      title: "Ethics and compliance",
      description: "We follow the law in each place we work and we respect human rights and privacy. This protects your reputation and the value of the case.",
      link: undefined,
    },
  ];

  const services3 = [
    {
      title: "Discover",
      description: "We gather information from public records, financial analysis, open source intelligence, and human sources. We build a factual timeline and map the flow of value. Each step is documented so findings can be used with confidence.",
      icon: Telescope,
      link: undefined,
    },
    {
      title: "Map",
      description: "We turn names, entities, addresses, and identifiers into a network graph that shows relationships. The graph helps us see common directors, shared contact details, nominee patterns, and circular transactions. This often reveals the next place to look or a location where a freezing step may succeed.",
      icon: MapPin,
      link: undefined,
    },
    {
      title: "Act",
      description: "We deliver clear outputs including a recovery map, asset register, ownership charts, timeline, exhibits, and a recommended action plan. We support your legal and finance teams with evidence that can be used in court or at the negotiating table.",
      icon: Activity,
      link: undefined,
    },
  ];

  const services4 = [
    {
      title: "Privilege and confidentiality",
      description: "We document instructions and communication lines to protect privilege where possible. We keep clean files and secure all evidence. Sensitive steps are handled by a small core team and we limit access to need to know participants.",

      link: undefined,
    },

    {
      title: "Evidence standards",
      description: "We record sources, dates, and methods. For digital work we keep hashes and tool notes. For interviews we keep attendance, consents, and summaries. This discipline gives your lawyers material they can trust.",
      link: undefined,
    },

  ];

  const services5 = [
    {

      description: "Better insight into where assets are located and who controls them",
      link: undefined,
    },
    {

      description: "Evidence that supports freezing, disclosure, settlement, or seizure",
      link: undefined,
    },
    {

      description: "Practical paths to recovery, including quick wins and longer actions",
      link: undefined,
    },
    {

      description: "Reduced risk of new breaches while you pursue your claim",
      link: undefined,
    },
    {

      description: "Stronger controls that make future diversion harder",
      link: undefined,
    },
  ];

  const services6 = [
    {
      title: "Litigation Support Investigations",
      // link: "https://chatgpt.com/litigation-support-investigations/",
    },
    {
      title: "Corporate Intelligence and OSINT",
      // link: "https://chatgpt.com/corporate-intelligence-and-osint/",
    },
    {
      title: "Regulatory and Compliance Investigations",
      // link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
    },
    {
      title: "Digital Forensics and Incident Investigations",
      // link: "https://chatgpt.com/digital-forensics-and-incident-investigations/",
    },
    {
      title: "Corporate Investigations Hub",
      // link: "https://chatgpt.com/corporate-investigations/",
    },
  ];

  const faqs = [
    {
      id: "1",
      question: "Can you trace crypto assets?",
      answer: "We investigate wallets and transaction flows using open sources and specialized tools, then align findings with legal strategy."
    },
    {
      id: "2",
      question: "How far back can you look?",
      answer: "We follow evidence and available records. Many traces review several years, subject to law and data retention."
    },
    {
      id: "3",
      question: "Will your findings support freezing orders?",
      answer: "Yes. We document sources and methods so counsel can use them in freezing, disclosure, or enforcement steps."
    },
    {
      id: "4",
      question: "What if assets are in another country?",
      answer: "We coordinate with local partners to obtain records and act lawfully while keeping a single master view."
    },

  ];

  const actionSection = [
    {
      title: "Ready to get started?",
      description: "  If you believe assets have been hidden or moved, speak with Venovox today. Share the background and your timeline. We will propose a short plan for the first safe steps, including what to preserve, who to notify, and where to look first. We can start with a scoping call and a light touch discovery, then scale to a full trace once we confirm value at stake. ",
      primaryButton: {
        text: "Get in Touch",
        link: "/my-en/contact-us",
        icon: MailIcon,
      },
      
    },
  ]

  return (
    <div className="bg-white px-6 text-gray-900">
      {/* Hero Section */}

      <ContentSection
        mainText="When money or property goes missing the clock starts ticking."
        paragraphs={[
          "  Venovox helps you find what is lost and turn findings into action. We work with care, precision, and discretion. Our team traces assets across borders, lifts the veil on complex structures, and supports legal steps that lead to recovery. You get a calm plan, clear reporting, and evidence that can stand up to challenge.",
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
                This page explains how Venovox traces assets and supports recovery. It shows when to begin an asset trace, how we collect and test information, and how we work with your lawyers and finance teams. It also lists the deliverables you will receive, the results you can expect, and the related services that complete the picture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


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
                When to start an asset trace
              </h2>
              <p className="text-lg text-gray-700 text-center [text-justify:inter-word] hyphens-none leading-relaxed mb-6">
              Act early if you think value has been hidden or moved. Speed helps preserve evidence and improves your options in court or in negotiations. Typical triggers include internal fraud, vendor or partner disputes, insolvency or bankruptcy, breach of fiduciary duty, judgment or award enforcement, and post exit data theft that may relate to diversion of business. If the facts are unclear we can begin with a short scoping review to confirm whether a full trace is warranted.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Path to Recovery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  Your path to recovery
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services3.map((service, index) => (
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

      {/* How Venovox Traces Assets Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  How Venovox traces assets
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We combine public records, financial analysis, open source intelligence, and human source insight. We build a factual timeline and map the flow of value. Each step is documented so that findings can be used with confidence.
                </p>
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

      {/* Cross Border and Offshore Structures Section */}
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
                  Cross border and offshore structures
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Many traces lead across jurisdictions. Venovox works with trusted local partners to obtain records and to respect local law. We handle multi language materials, notarized requests, and certified copies where needed. We are familiar with common offshore structures, nominee arrangements, and trusts. We screen for sanctions and trade controls to ensure that recovery steps do not create new risk. Our job is to give you clear choices that fit the rules of each place while keeping the full picture in view.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Working with Legal and Finance Teams Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  Working with legal and finance teams
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Asset tracing is most effective when it runs in step with legal strategy and financial planning. We align with external counsel and in house teams from the start. We prepare material that supports freezing applications, disclosure requests, and enforcement. We can assist receivers, liquidators, and insolvency practitioners with factual research and on the ground checks. We also help finance teams estimate potential recovery and weigh cost against benefit so decisions are practical and timely.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {services4.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      description={service.description}
                      link={service.link}
                    />
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Receive from Venovox Section */}
      <WhenToActSection
  title="What you receive from Venovox"
  subtitle="We deliver clear and useful outputs that you can take to court or to the table."
  listItems={[
    "A recovery map that shows the flow of value and the points where you can act",
    "An asset register that lists properties, corporate interests, vehicles, vessels, and other items of value",
    "Ownership charts that explain who controls what and how entities connect",
    "A timeline with key events and transactions",
    "Exhibits and appendices with documents, filings, and sources",
    "A recommended action plan with options, costs, and likely impact",
    "A recommended action plan with options, costs, and likely impact",
    "A short pack for leaders and boards that supports decisions",

  ]}
  
  accentColor="text-red-600"
/>

      {/* How Progress is Reported Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  How progress is reported
                </h2>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 text-justify leading-relaxed mb-6">
                  You get regular updates that explain what we found and what it means. We agree a reporting rhythm at the start. Many clients choose weekly progress notes and a structured review every two weeks. Urgent matters can run to a daily cadence. Each update covers new leads, evidence obtained, next steps, and any change to risk or cost. This helps your legal and finance teams make timely moves.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes You Can Expect Section */}
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

      <Faqs faqs={faqs} head="Frequently asked questions" />

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
              <p className="text-lg text-gray-700 text-center [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Explore our full set of services that connect with asset tracing and recovery. Use the links below to learn more or to request a short scoping call.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {services6.map((service, index) => (
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





      



      <div className=" mx-auto co space-y-24 relative">
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
