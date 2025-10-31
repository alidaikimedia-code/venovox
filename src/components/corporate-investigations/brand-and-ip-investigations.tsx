"use client";

import { motion } from "framer-motion";
import ContentSection from "../common/hero-content";
import WhenToActSection from "../common/act";
import { ServiceCard } from "../common/card";
import {
    Search,
    FileText,
   
    Ban,
    MailIcon,
    ReceiptCent,
    CirclePercent,
    MapMinus,
    BrushCleaning,
    Bubbles,
    Link2,
    FlaskConical,
    Check,
    TvMinimalPlay,
    ScanFace,
    Scale,
} from "lucide-react";
import { Faqs } from "../common/faq-section";
import { ActionSection } from "../common/action";

export default function BrandAndIpInvestigations() {
    
    const faqs = [
        {
          id: "1",
          question: "Do you run covert test buys?",
          answer: "Yes. We keep receipts, photos, and chain of custody so samples can be used as evidence."
        },
        {
          id: "2",
          question: "Can you help with customs recordation?",
          answer: "Yes. We prepare filings and training to help border agents spot risky shipments."
        },
        {
          id: "3",
          question: "How quickly can listings be removed?",
          answer: "Timing varies by platform and evidence. Strong proofs often lead to removal within hours or days."
        },
        {
          id: "4",
          question: "Do you coordinate with law enforcement?",
          answer: "Where facts support it, we prepare referrals and assist with planning for seizures or raids."
        },
      ];  

  const actionSection = [
    {
      title: "Ready to get started?",
      description: " If you see counterfeit or diversion, speak with Venovox. Share what you have seen and where. We will confirm the scale and propose first steps. We can begin with a short scan and one or two test buys, then scale as needed. ",
      primaryButton: {
        text: "Get in Touch",
        link: "/contact-us",
        icon: MailIcon,
      },
    },
  ]

  const services = [
    {
      title: "Counterfeit goods",
      description: "We identify makers and sellers of fake products. We map how goods move from source to market. We collect samples and keep chain of custody so that tests and photos can be used in court.",
      icon: ReceiptCent ,
      link: undefined,
    },
    {
        title: "Grey market diversion",
        description: "We find where genuine stock is leaking into unintended markets. We review distributor agreements, rebate programs, and serial ranges. We compare factory output and sales to spot gaps.",
        icon: CirclePercent ,
        link: undefined,
      },
      {
        title: "Trademark and brand misuse",
        description: "We remove listings that use your marks without consent. We address misleading ads, fake service centers, and lookalike packaging.",
        icon: MapMinus ,
        link: undefined,
      },
      {
        title: "Trade secret and design theft",
        description: "We investigate leaks of formulas, drawings, software, or process know how. We review access, downloads, and unusual use of external drives. We align with our digital team where needed.",
        icon: BrushCleaning ,
        link: undefined,
      },
      {
        title: "Online impersonation and phishing",
        description: "We locate false websites, social profiles, and messaging campaigns that pretend to be you. We gather proof and support takedowns.",
        icon: Bubbles ,
        link: undefined,
      },
      {
        title: "Supply chain leaks",
        description: "We trace leaks in manufacturing, packaging, warehousing, and transit. We visit sites and review logs to see where controls failed.",
        icon: Link2 ,
        link: undefined,
      },
  ]

  const services2 = [
    {
      title: "Intelligence and OSINT",
      description: "We scan marketplaces, social platforms, review sites, and forums. We collect seller data, contact details, and shipping patterns. We gather open source records on companies and domains.",
      icon: Search,
      link: undefined,
    },
    {
        title: "Test buys with chain of custody",
        description: "We make covert purchases on markets of interest. We record the process, keep receipts, and store items securely. We photograph packaging, labels, and serial numbers. Where needed we send items for lab testing and keep a clean record from purchase to report.",
        icon: FlaskConical ,
        link: undefined,
      },
      {
        title: "Supply chain tracing and site checks",
        description: "We review bills of lading, warehouse logs, and shipping labels. We compare serial ranges and batch codes to your own records. We visit factories, warehouses, and retail points with local partners.",
        icon: Check ,
        link: undefined,
      },
      {
        title: "Digital monitoring and takedowns",
        description: "We monitor listings and ads. We prepare platform notices with the evidence needed for quick action. We work with hosts, registrars, and payment providers to remove or block bad actors.",
        icon: TvMinimalPlay ,
        link: undefined,
      },
      {
        title: "Forensic marking and serialization",
        description: "We help you add or improve markings, QR codes, or track and trace features. This makes it easier to prove origin and to spot leakage points.",
        icon: ScanFace ,
        link: undefined,
      },
      {
        title: "Partner and law enforcement coordination",
        description: "We brief distributors and logistics partners and agree on simple checks. Where the facts support it, we prepare referrals to law enforcement and support raids with careful planning.",
        icon: Scale ,
        link: undefined,
      },
  ]

  const services3 = [
    {
      title: "Independent and discreet",
      description: "We work quietly and keep your brand safe while we collect proof.",
      link: undefined,
    },
    {
        title: "Cross border reach",
        description: "We act across regions and manage local rules and languages with care.",
        link: undefined,
      },
      {
        title: "Multidisciplinary team",
        description: "Investigators, digital analysts, and supply chain specialists work as one team. You do not need to manage several vendors.",
        link: undefined,
      },
      {
        title: "Practical and fast",
        description: "We focus on steps that deliver results. We report in plain language so leaders can act.",
        link: undefined,
      },
  ]

  const services4 = [
    {
      title: "Corporate Intelligence and OSINT",

      link: "https://chatgpt.com/corporate-intelligence-and-osint/"
    },
    {
        title: "Digital Forensics and Incident Investigations",
  
        link: "https://chatgpt.com/corporate-intelligence-and-osint/"
      },
      {
        title: "Asset Tracing and Recovery",
  
        link: "https://chatgpt.com/corporate-intelligence-and-osint/"
      },
      {
        title: "Corporate Investigations Hub",
  
        link: "https://chatgpt.com/corporate-intelligence-and-osint/"
      },
  ]
  const services5 = [
    {
      description: "Faster removals and fewer fake listings",
      link: undefined,
    },
    {
        description: "Clear evidence for court and for law enforcement",
        link: undefined,
      },
      {
        description: "Better control of channels and pricing",
        link: undefined,
      },
      {
        description: "Safer customers and stronger trust in your brand",
        link: undefined,
      },
      {
        description: "Lower cost of response as repeat actors are blocked",
        link: undefined,
      },
  ]

    return (
        <div className="bg-white px-6 text-gray-900">
            {/* Hero Section */}

            
      <ContentSection
        mainText="Your brand is a promise to customers"
        paragraphs={[
          " When counterfeit goods or grey market diversion appear, trust and revenue are at risk. Venovox helps you find the source, collect proof, and act with speed. We run test buys, trace supply chains, and support takedowns and seizures. We work with care and keep your name protected.",
        ]}
      />
           
        

            {/* Three Step Band */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Search className="text-red-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Find</h3>
                            <p className="text-gray-700 text-sm">Identify sources and actors</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <FileText className="text-red-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Prove</h3>
                            <p className="text-gray-700 text-sm">Collect court-ready evidence</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Ban className="text-red-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Remove</h3>
                            <p className="text-gray-700 text-sm">Act with speed and precision</p>
                        </motion.div>
                    </div>
                </div>
            </section>

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

                            <p className="p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                                This page explains how Venovox investigates counterfeit and grey market activity. It shows how we find the actors, collect evidence that stands up to review, and work with platforms, payment providers, logistics firms, and law enforcement. You will see when to act, how we work, what you receive, and the results you can expect.
                            </p>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why brand and IP abuse matters */}
            <section className="py-16">
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
                                    Why brand and IP abuse matters
                                </h2>
                            </div>

                            <div className="p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Counterfeit and diversion harm safety, customer trust, and margins. They confuse distributors and upset channel partners. They pull support teams away from real customers. A calm and steady investigation stops the loss and shows partners that you protect your brand.
                                </p>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* When to act */}
            <WhenToActSection
  title="When to act"
  subtitle="Move early when warning signs appear. Fast action protects customers and preserves leads."
  listItems={[
    "Sudden price drops or unusual discounts online",
    "New sellers with limited history or vague contact details",
    "Product complaints that do not match your quality control data",
    "Missing units between factory output and market sales",
    "Domain names or social profiles that mimic your brand",
    "A whistleblower tip about diversion or leaks",

  ]}
  highlightBoxText="If you are unsure, start with a quiet scan. We can confirm scale and risk before you go public."
  accentColor="text-red-600"
/>
            {/* Types of cases we handle */}
            <section className="py-16">
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
                                    Types of cases we handle
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

            {/* Our investigation approach */}
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
                                    Our investigation approach
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                    Venovox combines field work, digital monitoring, and legal support. We keep a low profile and document every step.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                {services2.map((service, index) => (
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

            {/* Legal and enforcement support */}
            <WhenToActSection
  title="Legal and enforcement support"
  subtitle="We align with your counsel to plan the right mix of actions. We prepare clean files that support notices and court steps."
  listItems={[
    "Marketplace and social media notices that meet platform rules",
    "Domain dispute filings and registrar requests",
    "Customs recordation and training for border agents",
    "Cease and desist letters and settlement options",
    "Civil claims with evidence packs and witness statements",
    "Criminal referrals where public safety is at risk",

  ]}
  accentColor="text-red-600"
/>

            {/* Cross border capability */}
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
                                    Cross border capability
                                </h2>
                            </div>

                            <div className="p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Brand abuse is rarely limited to one place. Venovox works across regions with trusted partners. We collect records, conduct site checks, and coordinate language and local practice. We respect privacy and data rules in every step.
                                </p>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What you receive from Venovox */}
            <WhenToActSection
  title="What you receive from Venovox"
  listItems={[
    "A brand risk map that shows sources, routes, and markets",
    "A seller and platform register with links, contacts, and status",
    "Test buy reports with photos, receipts, and chain of custody notes",
    "Evidence packs for takedowns and for court use",
    "A dashboard that tracks removes, seizures, and repeat actors",
    "A playbook for partners with checks and contact points",
    "A short board pack that explains scale, impact, and next steps",


  ]}
  accentColor="text-red-600"
/>

            {/* Outcomes you can expect */}
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

            {/* Why Venovox */}
            <section className="py-16">
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


            <Faqs faqs={faqs} head="Frequently asked questions" />

            {/* Related Services Section */}
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
                                    Related services
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 text-center [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                                Explore our full set of services that connect with brand and IP investigations. Use the links below to learn more or to request a short scoping call.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                {services4.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    link={service.link}
                  />
                ))}
              </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className=" mx-auto  space-y-24 relative">
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
