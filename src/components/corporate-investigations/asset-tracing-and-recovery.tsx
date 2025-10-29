"use client";

import { motion,  } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Search,
  FileText,
  Database,
  Network,
  TrendingUp,
  CheckCircle,
 
  Map,
  Fingerprint,
} from "lucide-react";
import { FiPhone } from "react-icons/fi";
import { Faqs } from "../common/faq-section";

export default function AssetTracingAndRecovery() {

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

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative mt-20 w-full min-h-[50vh] overflow-hidden flex items-center justify-center">
  {/* Background Image */}
  <img
    src="/hero.webp"
    alt="Asset Tracing and Recovery"
    className="absolute inset-0 w-full h-full object-cover brightness-50"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

  {/* Content */}
  <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-center flex flex-col items-center justify-center py-10 sm:py-16 md:py-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-snug">
        Asset Tracing and Recovery
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2 sm:px-4 md:px-8 lg:px-16">
        When money or property goes missing, the clock starts ticking. Venovox helps you find what is lost and turn findings into action. We work with care, precision, and discretion. Our team traces assets across borders, lifts the veil on complex structures, and supports legal steps that lead to recovery. You get a calm plan, clear reporting, and evidence that can stand up to challenge.
      </p>

      {/* Keywords */}
      <div className="mt-6 sm:mt-8 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-6 md:px-10 lg:px-20">
        <p>
          Primary keywords: asset tracing and recovery, cross border asset tracing, enforcement support, receivership support, offshore structures, judgment enforcement, fraud investigations, financial investigations, litigation support investigations, corporate intelligence and OSINT.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12">
        <Link
          href="/my-en/contact-us"
          className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors w-full sm:w-auto text-center"
        >
          Talk to Venovox
        </Link>
        <button className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border-2 border-white font-semibold rounded-lg hover:bg-white/20 transition-colors w-full sm:w-auto">
          Download overview
        </button>
      </div>
    </motion.div>
  </div>
</section>


      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600 transition-colors duration-200">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/corporate-investigations" className="hover:text-red-600 transition-colors duration-200">
              Services
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/corporate-investigations" className="hover:text-red-600 transition-colors duration-200">
              Corporate Investigations
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Asset Tracing and Recovery</span>
          </div>
        </div>
      </div>

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

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Search className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Discover</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We gather information from public records, financial analysis, open source intelligence, and human sources. We build a factual timeline and map the flow of value. Each step is documented so findings can be used with confidence.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Map className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Map</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We turn names, entities, addresses, and identifiers into a network graph that shows relationships. The graph helps us see common directors, shared contact details, nominee patterns, and circular transactions. This often reveals the next place to look or a location where a freezing step may succeed.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <TrendingUp className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Act</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We deliver clear outputs including a recovery map, asset register, ownership charts, timeline, exhibits, and a recommended action plan. We support your legal and finance teams with evidence that can be used in court or at the negotiating table.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Start an Asset Trace Section */}
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
                  When to start an asset trace
                </h2>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 text-justify leading-relaxed mb-6">
                  Act early if you think value has been hidden or moved. Speed helps preserve evidence and improves your options in court or in negotiations. Typical triggers include internal fraud, vendor or partner disputes, insolvency or bankruptcy, breach of fiduciary duty, judgment or award enforcement, and post exit data theft that may relate to diversion of business. If the facts are unclear we can begin with a short scoping review to confirm whether a full trace is warranted.
                </p>
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
                {/* Discovery from public records */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <FileText className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Discovery from public records</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed mb-4">
                    We collect information from corporate and beneficial ownership registers, land and property records, ship and aircraft registries, trademark and patent databases, court filings, procurement records, customs data, and licensing sources. We look for changes in ownership, new filings that align with key dates, and links between people and entities that point to hidden interests.
                  </p>
                </motion.div>

                {/* Forensic accounting and transaction testing */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Database className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Forensic accounting and transaction testing</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed mb-4">
                    We review general ledgers, bank statements where available, invoices, contracts, and payment files. We test for round sum payments, split payments, off cycle activity, shell vendors, and unusual rebates. We align payments with known events and look for asset purchases that match the pattern of loss. Where needed we work with your auditors and controllers to secure read only access so the business can continue while we work.
                  </p>
                </motion.div>

                {/* Open source and human source intelligence */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Globe className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Open source and human source intelligence</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed mb-4">
                    We search media, trade publications, social networks, domain records, corporate announcements, and community sources. We speak with knowledgeable people where lawful and appropriate. This helps confirm whether an asset is in use, where it is located, and who may control it. We are careful with privacy rules and local custom and we keep a clean record of sources.
                  </p>
                </motion.div>

                {/* Digital forensics support */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Fingerprint className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Digital forensics support</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed mb-4">
                    If data theft or account compromise is suspected we work with our digital team to review devices, logs, and cloud systems. We confirm who accessed what and when, and whether files were moved to external drives or personal accounts. The result is a stronger link between a person, a time period, and a transfer of value.
                  </p>
                </motion.div>

                {/* Network mapping and link analysis */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow md:col-span-2"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Network className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Network mapping and link analysis</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed mb-4">
                    We turn names, entities, addresses, and identifiers into a graph that shows relationships. The graph helps us see common directors, shared contact details, nominee patterns, and circular transactions. This often reveals the next place to look or a location where a freezing step may succeed.
                  </p>
                </motion.div>
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
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Privilege and confidentiality</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We document instructions and communication lines to protect privilege where possible. We keep clean files and secure all evidence. Sensitive steps are handled by a small core team and we limit access to need to know participants.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence standards</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We record sources, dates, and methods. For digital work we keep hashes and tool notes. For interviews we keep attendance, consents, and summaries. This discipline gives your lawyers material they can trust.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Receive from Venovox Section */}
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
                  What you receive from Venovox
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We deliver clear and useful outputs that you can take to court or to the table.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A recovery map that shows the flow of value and the points where you can act
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      An asset register that lists properties, corporate interests, vehicles, vessels, and other items of value
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Ownership charts that explain who controls what and how entities connect
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A timeline with key events and transactions
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Exhibits and appendices with documents, filings, and sources
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A recommended action plan with options, costs, and likely impact
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A short pack for leaders and boards that supports decisions
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Better insight into where assets are located and who controls them
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Evidence that supports freezing, disclosure, settlement, or seizure
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Practical paths to recovery, including quick wins and longer actions
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Reduced risk of new breaches while you pursue your claim
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm md:col-span-2">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Stronger controls that make future diversion harder
                  </p>
                </div>
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
                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Independent and discreet</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Venovox is trusted because we report facts without fear or favor. We keep a low profile, protect privacy, and act with care in sensitive settings.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cross border reach</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We work across regions through a vetted partner network. We handle language, local practice, and data rules so your case keeps moving.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinary team</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Our investigators, forensic accountants, digital specialists, and intelligence analysts work as one team. You get a complete view without managing multiple vendors.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Speed with precision</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We move quickly without losing accuracy. Early steps focus on evidence preservation and high value leads so you see results sooner.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ethics and compliance</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We follow the law in each place we work and we respect human rights and privacy. This protects your reputation and the value of the case.
                  </p>
                </motion.div>
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
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Explore our full set of services that connect with asset tracing and recovery. Use the links below to learn more or to request a short scoping call.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Litigation Support Investigations", href: "/litigation-support-investigations/" },
                  { title: "Corporate Intelligence and OSINT", href: "/corporate-intelligence-and-osint/" },
                  { title: "Regulatory and Compliance Investigations", href: "/regulatory-and-compliance-investigations/" },
                  { title: "Digital Forensics and Incident Investigations", href: "/digital-forensics-and-incident-investigations/" },
                  { title: "Corporate Investigations Hub", href: "/corporate-investigations/" },
                  { title: "Fraud Investigations", href: "#" },
                ].map((service, index) => (
                  <Link key={index} href={service.href}>
                    <motion.div
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


     


      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Content box */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm mb-10 text-left md:text-center">
              <p className="text-lg leading-relaxed mb-6">
                If you believe assets have been hidden or moved, speak with Venovox today. Share the background and your timeline. We will propose a short plan for the first safe steps, including what to preserve, who to notify, and where to look first. We can start with a scoping call and a light touch discovery, then scale to a full trace once we confirm value at stake.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-lg">Prefer email</p>
                  <p className="text-gray-300">
                    Send a short note and we will reply with times for a quick call.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-lg">Prefer a document</p>
                  <p className="text-gray-300">
                    We can send a one page plan that outlines scope, timing, and estimated effort.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/my-en/contact-us"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-800 transition-colors"
              >
                Contact Us Now
              </Link>
              <a
                href="tel:+60128008888"
                className="flex items-center gap-2 px-6 py-3 bg-white text-red-600 border-2 border-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors"
              >
                <FiPhone className="text-lg" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
