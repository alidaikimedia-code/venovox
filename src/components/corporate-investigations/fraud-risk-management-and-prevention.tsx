"use client";

import { motion } from "framer-motion";
import WhenToActSection from "../common/act";
import ContentSection from "../common/hero-content";
import { ServiceCard } from "../common/card";
import {
    ShieldCheck,
   
    BarChart3,
    
    Monitor,
    MailIcon,
    HandCoins,
    BadgePoundSterling,
    BaggageClaim,
    Speech,
    ChartCandlestick,
    Asterisk,
    SquareActivity,
} from "lucide-react";
import { Faqs } from "../common/faq-section";
import { ActionSection } from "../common/action";
export default function FraudRiskManagementAndPrevention() {

    const faqs = [
        {
          id: "1",
          question: "How long does a fraud risk assessment take?",
          answer: "Scope and size matter, but many organizations can complete a focused assessment in a few weeks."
        },
        {
          id: "2",
          question: "Do we need new software for monitoring?",
          answer: "Not always. We often start with light analytics using your current systems and scale if needed."
        },
        {
          id: "3",
          question: "Can you train our managers and teams?",
          answer: "Yes. We provide practical sessions with real examples and simple job aids."
        },
        {
          id: "4",
          question: "How do we measure success?",
          answer: "Lower losses, faster detection, fewer repeat issues, and positive audit and regulator feedback."
        },
      ];  

  const actionSection = [
    {
      title: "Ready to get started?",
      description: " If you want to reduce fraud risk and build simple, strong controls, talk to Venovox. Share your goals and your timeline. We will suggest a short plan that starts with the areas of highest impact and lowest effort. We can begin with a focused assessment and a pilot for one process, then scale across the business once you see results. ",
      primaryButton: {
        text: "Get in Touch",
        link: "/contact-us",
        icon: MailIcon,
      },
    },
  ]
  const services2 = [
    {
      title: "Independent and practical",
      description: "We report facts as we find them and we design steps that work in the real world. We remove jargon and focus on results.",
      
      link: undefined,
    },
    {
        title: "Cross border experience",
        description: "We help global teams align on simple standards while respecting local rules. We support multi language training and reporting.",
        
        link: undefined,
      },
      {
        title: "Multidisciplinary team",
        description: "Investigators, control specialists, data analysts, and trainers work as one team. You do not need to coordinate several vendors.",
        
        link: undefined,
      },
      {
        title: "Clear communication",
        description: "You get one point of contact, short updates, and tools your teams can use without extra help.",
        
        link: undefined,
      },
    
  ]

  const services = [    
    {
      title: "Procurement and payables",
      description: "False vendors, duplicate invoices, kickbacks, fake approvals, and split purchases. We check master data, approvals, three way match, and payment rules.",
      icon: HandCoins ,
      link: undefined,
    },
    {
        title: "Sales and receivables",
        description: "Fictitious sales, unusual credits, channel stuffing, and write offs. We test price lists, discounts, returns, and credit notes.",
        icon: BadgePoundSterling ,
        link: undefined,
      },
      {
        title: "Travel and expenses",
        description: "Personal spend, duplicate claims, altered receipts, and mileage abuse. We set rules that are simple to follow and easy to check.",
        icon: BaggageClaim ,
        link: undefined,
      },
      {
        title: "Payroll and HR",
        description: "Ghost employees, false hours, and misuse of allowances. We align HR and payroll data and test for unusual patterns.",
        icon: Speech ,
        link: undefined,
      },
      {
        title: "Inventory and assets",
        description: "Shrinkage, theft, and misuse of company assets. We design cycle counts, access rules, and handover checks.",
        icon: ChartCandlestick ,
        link: undefined,
      },
      {
        title: "Third party risk",
        description: "Agents, distributors, and consultants that create bribery or sanctions exposure. We add due diligence, contract clauses, and monitoring.",
        icon: Asterisk ,
        link: undefined,
      },
      {
        title: "IT and access",
        description: "Shared accounts, weak privilege controls, and risky downloads. We link identity, approvals, and offboarding steps.",
        icon: SquareActivity ,
        link: undefined,
      },
  ]
  const services4 = [
    {
      title: "Regulatory and Compliance Investigations",
      link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
    },
    {
        title: "Corporate Intelligence and OSINT",
        link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
      },
      {
        title: "Digital Forensics and Incident Investigations",
        link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
      },
      {
        title: "Workplace Misconduct Investigations",
        link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
      },
      {
        title: "Corporate Investigations Hub",
        link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
      },
  ]

  const services3 = [
    {
      description: "Fewer losses and faster detection of issues",
    
    },
    {
        description: "Clear roles and controls that staff can follow",
      
      },
      {
        description: "Better records that stand up to audit and legal review",
      
      },
      {
        description: "Higher trust and a stronger speak up culture",
      
      },
      {
        description: "A program that grows with your business without heavy cost",
      
      },
  ]

  

    return (
        <div className="bg-white px-6 text-gray-900">
            {/* Hero Section */}
  
      <ContentSection
        mainText="Strong controls prevent loss and build trust"
        paragraphs={[
          " Venovox helps you find weak spots, design simple controls, and monitor them in a steady way. We focus on the risks that matter most to your business. Our approach is practical and kind. We teach people what good looks like and we give leaders clear insight so they can act early.",
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
                                <BarChart3 className="text-red-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Assess</h3>
                            <p className="text-gray-700 text-sm">Find weak spots and set priorities</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <ShieldCheck className="text-red-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Build</h3>
                            <p className="text-gray-700 text-sm">Design simple, strong controls</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Monitor className="text-red-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Monitor</h3>
                            <p className="text-gray-700 text-sm">Check steadily and act early</p>
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
                                This page explains how Venovox prevents fraud through risk assessment, control design, data analytics, and training. It shows when to act, which areas are most exposed, and how we build a simple program that your teams can run. You will see what you receive, the outcomes you can expect, and the related services that complete the picture.
                            </p>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why prevention matters */}
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
                                    Why prevention matters
                                </h2>
                            </div>

                            <div className="p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Fraud is easier to stop than to fix. A small set of clear controls can block many schemes. Prevention also supports culture. When staff see fair rules and fair checks, they feel safe and respected. Prevention saves money, protects reputation, and reduces the chance you will need a long investigation later. It also helps you meet the expectations of your board, auditors, and regulators.
                                </p>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* When to act */}
            <WhenToActSection
  title="When to act"
  subtitle="Start your prevention program when these signals appear."
  listItems={[
    "Rapid growth or entry into new markets",
    "New systems, mergers, or outsourcing",
    "Repeated near misses or small losses that hint at bigger gaps",
    "New partners or a faster vendor onboarding process",
    "Audit findings on approvals, segregation of duties, or data quality",
    "A recent incident that revealed control issues",

  ]}
  highlightBoxText="If you are unsure where to start, we can begin with a short review and a simple heat map of your highest risks."
  accentColor="text-red-600"
/>

            {/* Common fraud risks we address */}
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
                                    Common fraud risks we address
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

            {/* Our approach to fraud risk management */}
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
                                    Our approach to fraud risk management
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                    Venovox uses a clear and steady method that builds lasting control without heavy burden on your teams.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-start">
                                       
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Assess</h3>
                                            <p className="text-gray-700 text-justify leading-relaxed">
                                                We run a fraud risk assessment. We meet with process owners and review policies and data. We identify where value could leak and where controls are missing or weak. We score risks by impact and likelihood and we propose a small set of priorities.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-start">
                                       
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Design</h3>
                                            <p className="text-gray-700 text-justify leading-relaxed">
                                                We choose controls that fit your size and systems. We keep steps simple so people can follow them on a busy day. We set clear roles, thresholds, and approvals. We add checks that can be measured and we write short job aids.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-start">
                                      
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Build</h3>
                                            <p className="text-gray-700 text-justify leading-relaxed">
                                                We help you put controls in place. This can include updates to forms and workflows, changes to master data, and automated rules in your systems. We align with IT change processes and we document each change.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-start">
                                      
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Monitor</h3>
                                            <p className="text-gray-700 text-justify leading-relaxed">
                                                We set up ongoing checks. Some are manual spot checks. Others use data analytics to find patterns that merit a closer look. We design a short monthly report that shows what was tested and what was found.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-start">
                             
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Train</h3>
                                            <p className="text-gray-700 text-justify leading-relaxed">
                                                We train teams and managers. We explain why controls matter and how to use them. We give examples of real life issues and the right response. We teach people how to raise concerns early and with care.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-start">
                                     
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Review</h3>
                                            <p className="text-gray-700 text-justify leading-relaxed">
                                                We check what works and what could be better. We adjust rules that cause friction and we strengthen weak spots. We plan a yearly refresh so your program stays current as the business changes.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Data analytics and continuous monitoring */}
            <WhenToActSection
  title="Data analytics and continuous monitoring"
  subtitle="Data makes prevention stronger. Venovox sets up simple tests that run on a schedule. We avoid heavy tools unless you already have them. We focus on clear signals and fast follow up."
  listItems={[
    "Duplicate invoice and vendor checks",
    "Round number and weekend payment tests",
    "Split purchase and threshold checks",
    "Travel and expense anomaly checks",
    "Ghost employee and payroll mismatch checks",
    "Master data changes without approval",
    "Access rights that do not match job roles",


  ]}
  highlightBoxText="We agree on who reviews alerts, how to clear them, and how to record actions. This keeps effort focused and results easy to show."
  accentColor="text-red-600"
/>

            {/* Governance and reporting */}
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
                                    Governance and reporting
                                </h2>
                            </div>

                            <div className="p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center mb-6">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Fraud prevention works best when people know what to do and who owns each step. We set a simple governance model with clear lines.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">A senior sponsor who removes roadblocks</h3>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Process owners for each control set</h3>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">A small risk forum that meets monthly</h3>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">A quarterly report to leaders and the board</h3>
                                </motion.div>
                            </div>

                            <div className="mt-8 p-6 bg-red-50 rounded-lg max-w-3xl mx-auto">
                                <p className="text-gray-800 font-semibold text-lg">
                                    We include measures that show progress, such as time to close alerts, number of controls tested, and trend lines for issues.
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
    "A fraud risk assessment with a heat map and top risks",
    "A control matrix with owners, frequency, and evidence",
    "Data tests and a light dashboard for monthly review",
    "Updated policies, job aids, and training materials",
    "A remediation plan with quick wins and longer actions",
    "A board and executive pack that explains progress in plain language",

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
                  {services3.map((service, index) => (
                    <ServiceCard
                      key={index}
                      description={service.description}
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
                            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
                                Explore our full set of services that connect with fraud risk management and prevention. Use the links below to learn more or to request a short scoping call.
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
