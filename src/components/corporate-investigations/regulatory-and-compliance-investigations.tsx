"use client";

import { motion,  } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  CheckCircle,
  
  AlertCircle,
  Database,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";
import { FiPhone } from "react-icons/fi";

export default function RegulatoryAndComplianceInvestigations() {

 
    return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative mt-20 w-full min-h-[50vh] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/hero.webp"
          alt="Regulatory and Compliance Investigations"
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
              Regulatory and Compliance Investigations
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2 sm:px-4 md:px-8 lg:px-16">
              Regulators expect clear answers and a fair process. Venovox helps you investigate possible breaches and show credible progress. We focus on facts, legal defensibility, and practical change. Our team reviews high risk transactions, third parties, and control gaps. We work with your legal and compliance leaders to protect privilege and to meet local rules.
            </p>

            {/* Keywords */}
            <div className="mt-6 sm:mt-8 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-6 md:px-10 lg:px-20">
              <p>
                Primary keywords: regulatory and compliance investigations, ABC investigations, AML investigations, sanctions investigations, dawn raid response, monitorships, remediation plans, books and records, internal controls testing, compliance program uplift.
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
            <span className="text-gray-900 font-medium">Regulatory and Compliance Investigations</span>
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
                This page explains how Venovox investigates anti bribery and corruption, anti money laundering, sanctions and export controls, and related books and records issues. It also sets out how we support dawn raid response, independent reviews, and remedial plans. You will see when to start, how we work, what you receive, and the results you can expect.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Act Section */}
      <section className="py-16 ">
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
                  When to act
                </h2>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Move quickly when there is a credible concern. Early action preserves evidence and builds trust with regulators and your board.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A whistleblower report or hotline alert names a payment or a partner
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A regulator request, dawn raid, or inquiry arrives
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Sanctions screening flags a hit that was missed in the past
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Transaction monitoring shows unusual patterns or structuring
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A due diligence review reveals hidden ownership or adverse media
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Audit findings point to weak approvals or false records
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-red-50 rounded-lg">
                  <p className="text-gray-800 font-semibold text-lg">
                    If the facts are unclear we can begin with a focused intake review and a short chronology. This helps you decide the right scope.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                {/* Anti bribery and corruption */}
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <ShieldCheck className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Anti bribery and corruption</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We look at payments, benefits, and decision points that may involve public officials or private bribery. We review third party agreements, marketing development funds, rebates, sponsorships, gifts, travel, and entertainment. We compare what was approved to what occurred in the field. We test high risk markets and channels and we map the control gaps that allowed risk to pass.
                  </p>
                </motion.div>

                {/* Anti money laundering */}
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Database className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Anti money laundering</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We test customer due diligence, onboarding steps, risk scoring, screening, and alert handling. We review sample files and look for missing documents, weak justification, and poor escalation. We assess the tuning of transaction monitoring and the quality of investigations. We confirm whether suspicious activity reports were made on time and with enough detail.
                  </p>
                </motion.div>

                {/* Sanctions and export controls */}
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Globe className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Sanctions and export controls</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We screen counterparties, vessels, and beneficial owners. We review routing, transshipment, and payment paths that may hide the true party. We check restricted party lists, sectoral rules, and export classifications. We work with external counsel to judge the risk and to plan disclosures where required.
                  </p>
                </motion.div>

                {/* Books and records */}
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <FileText className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Books and records</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We test the accuracy of accounting entries and supporting documents. We look for vague descriptions, false vendors, round numbers, and off cycle entries. We compare ledgers with contracts and delivery proof. We align payment dates with key events like tenders, site visits, and approvals.
                  </p>
                </motion.div>

                {/* Dawn raid readiness and response */}
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <AlertCircle className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Dawn raid readiness and response</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We help you prepare playbooks and brief teams. In the event of a raid we support reception, document handling, and legal coordination. We keep a log of actions and items taken. After the event we help you stabilize systems, continue business, and plan a careful internal review.
                  </p>
                </motion.div>

                {/* Monitorships and independent reviews */}
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Users className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Monitorships and independent reviews</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Where a regulator appoints a monitor or requests an independent review, we support planning, evidence gathering, and progress tracking. We set clear milestones, owners, and measures of success. We prepare simple reports that show how risks are being reduced over time.
                  </p>
                </motion.div>

                {/* Remediation and program uplift */}
                <motion.div 
  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
  whileHover={{ y: -5 }}
>
  <div className="flex items-center mb-4">
    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
      <TrendingUp className="text-red-600 w-7 h-7" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900">Remediation and program uplift</h3>
  </div>
  <p className="text-gray-700 text-justify leading-relaxed">
    We turn findings into practical change. We update policies, simplify approvals, and add detective controls. We train teams and leaders. We plan quick wins that reduce risk now and longer fixes that build a stronger culture.
  </p>
</motion.div>
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

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Privilege and work streams</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We document instructions and separate privileged and non privileged tracks where needed. We use clear labels and distribution lists to keep files clean.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory strategy</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We help you plan timing, scope, and messages. We prepare briefing packs with key facts, actions taken, and remediation plans. We support voluntary disclosures and responses to formal requests.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cross border coordination</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    For multi country matters we align with local counsel and partners. We respect privacy and data transfer rules and we keep a single master record so leaders see the whole picture.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Receive Section */}
      <section className="py-16 ">
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
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Risk register with root causes and owners
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Transaction testing workbook and sampling method
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Issue memos on each significant finding
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Board and executive slide pack
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Regulator briefing pack with facts and actions
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Remediation roadmap with quick wins and long term fixes
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Training plan and simple job aids for front line teams
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Clear answers to the questions regulators and boards ask
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Evidence that stands up to legal review and audit
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    A practical plan to fix gaps and show progress
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Better controls, better culture, and lower risk going forward
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Independent and trusted</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We report facts as we find them and we act with care. Our work is transparent and repeatable.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cross border experience</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We handle matters that span multiple countries. We work with local experts and follow local law.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinary team</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Investigators, forensic accountants, sanctions and AML specialists, and digital analysts work as one team. You get a complete view without managing several vendors.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Clear communication</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    You get a single point of contact, short updates, and reports that leaders can read in minutes.
                  </p>
                </motion.div>
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Corporate Intelligence and OSINT", href: "/corporate-intelligence-and-osint/" },
                  { title: "Fraud Risk Management and Prevention", href: "/fraud-risk-management-and-prevention/" },
                  { title: "Asset Tracing and Recovery", href: "/asset-tracing-and-recovery/" },
                  { title: "Digital Forensics and Incident Investigations", href: "/digital-forensics-and-incident-investigations/" },
                  { title: "Litigation Support Investigations", href: "/litigation-support-investigations/" },
                  { title: "Corporate Investigations Hub", href: "/corporate-investigations/" },
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
                If you face a possible breach or a regulator inquiry, speak with Venovox today. Share the basic facts and your timeline. We will propose first steps that protect evidence and show control. We can start light with an intake review, then scale the work as needed.
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