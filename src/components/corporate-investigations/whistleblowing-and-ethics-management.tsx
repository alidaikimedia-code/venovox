"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  CheckCircle,
  Phone,
  Globe,
  Lock,
  MessageCircle,
  TrendingUp,
  Database,
  AlertCircle,
} from "lucide-react";
import { FiPhone } from "react-icons/fi";

export default function WhistleblowingAndEthicsManagement() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative mt-20 w-full min-h-[50vh] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/hero.webp"
          alt="Whistleblowing and Ethics Management"
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
              Whistleblowing and Ethics Management
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2 sm:px-4 md:px-8 lg:px-16">
              A strong speak up culture protects people and protects the company. Venovox designs and runs whistleblowing and ethics programs that are trusted, fair, and simple to use. We help you receive concerns safely, investigate with care, and report with confidence to leaders and the board.
            </p>

            {/* Keywords */}
            <div className="mt-6 sm:mt-8 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-6 md:px-10 lg:px-20">
              <p>
                Primary keywords: whistleblowing and ethics management, whistleblowing hotline, intake and triage, retaliation safeguards, investigation workflow, ethics policy, speak up culture, board reporting, case management metrics, multi language hotline.
              </p>
            </div>

            {/* Trust Message */}
            <div className="mt-6 sm:mt-8">
              <p className="text-white text-sm sm:text-base font-semibold italic">
                Your report will be handled with care and kept confidential
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
                Download program overview
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
            <span className="text-gray-900 font-medium">Whistleblowing and Ethics Management</span>
          </div>
        </div>
      </div>

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
                <MessageCircle className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Speak up</h3>
              <p className="text-gray-700 text-sm">Safe intake and clear triage</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Investigate</h3>
              <p className="text-gray-700 text-sm">Fair process and careful review</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Improve</h3>
              <p className="text-gray-700 text-sm">Clear reporting and better culture</p>
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
              <p className="text-lg text-gray-700 text-center [text-justify:inter-word] hyphens-none leading-relaxed mb-6">
                This page explains how Venovox builds and improves whistleblowing and ethics programs. It shows how we set policy, create safe intake, run careful triage, manage cases, and protect people from retaliation. It also explains our reporting model for management and the board, and the training that helps your culture grow stronger.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why a strong speak up program matters */}
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
                  Why a strong speak up program matters
                </h2>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  People raise issues earlier when they feel safe. Early notice protects staff and reduces loss. A clear program also shows regulators and partners that you take integrity seriously. It helps leaders understand risks that normal reporting may miss. Most of all, it gives every person a fair way to be heard.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core program elements */}
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
                  Core program elements
                </h2>
              </div>

              <div className="space-y-8">
                {/* Policy and governance */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <FileText className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Policy and governance</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We align your policy with local law and industry rules. We define roles for intake owners, investigators, HR, legal, and the board or audit committee. We set service levels for intake, triage, investigation, and close out. We include a plain language non retaliation promise and clear examples of what to report.
                  </p>
                </motion.div>

                {/* Hotline and intake channels */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Phone className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Hotline and intake channels</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We provide web, phone, and email channels and can add in person intake where needed. Lines can be open all day, every day. We support anonymous or named reports based on local law. Each report receives a clear receipt message and next step plan so people know what to expect.
                  </p>
                </motion.div>

                {/* Triage and risk rating */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <AlertCircle className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Triage and risk rating</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We screen each report for urgency and risk. We decide who should handle it and who should be walled off. We check for conflicts of interest. We set early holds to protect data, messages, and devices. We track time to first action and keep the reporter informed where possible.
                  </p>
                </motion.div>

                {/* Case management workflow */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <TrendingUp className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Case management workflow</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We map each step from intake to close. We define the evidence to be collected, interview plans, and review points. We use simple checklists and templates so cases move in a steady and fair way. We record scope, actions, and decisions at each key moment.
                  </p>
                </motion.div>

                {/* Investigation standards */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <CheckCircle className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Investigation standards</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We follow fair process in every case. We keep chain of custody for digital and paper evidence. We use trauma informed interviews. We write findings in clear language and we explain limits and confidence. We do not use leading questions or unfair pressure.
                  </p>
                </motion.div>

                {/* Anonymity and confidentiality */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Lock className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Anonymity and confidentiality</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Reporters can stay anonymous in many places. Where names must be known, we keep access limited and remind teams of privacy duties. We store data safely and we control who can view it. We never expose the identity of a reporter in public channels.
                  </p>
                </motion.div>

                {/* Non retaliation and safety */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <ShieldCheck className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Non retaliation and safety</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We make it clear that retaliation is not allowed. We give managers simple guidance on what to do and what not to do. We watch for signs of subtle harm such as shift changes, isolation, or lost opportunities. We set up support options for those who feel at risk.
                  </p>
                </motion.div>

                {/* Communication and training */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <MessageCircle className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Communication and training</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We prepare a simple launch kit. It includes posters, intranet content, slides, and manager talking points. We train leaders and investigators on intake, interviews, and fair process. We refresh training each year and after major changes.
                  </p>
                </motion.div>

                {/* Technology and integrations */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Database className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Technology and integrations</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We can deploy a secure case management system or work with your current tools. We integrate with HR, identity, and collaboration systems where possible. We keep audit trails, access logs, and role based permissions.
                  </p>
                </motion.div>

                {/* Multi language and global reach */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Globe className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Multi language and global reach</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We support reports in many languages and cover different time zones. We provide translators and local partner support where required. We adapt messages to local culture while keeping global standards.
                  </p>
                </motion.div>

                {/* Privacy and data protection */}
                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Lock className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Privacy and data protection</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We follow privacy rules in every place you work. We collect only what is needed and we keep it no longer than required. We set clear retention rules and document lawful bases for processing.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reporting to leaders and the board */}
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
                  Reporting to leaders and the board
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Good reporting builds trust. We design simple dashboards and written reports that focus on risk and progress.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Volume of reports and trends over time
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Mix of channels and locations
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Time from intake to first action and to close
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Case outcomes and common root causes
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Status of remedial actions and training
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Heat maps for regions or functions with higher risk
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  We also prepare board ready packs for deep dives on major cases. These include a timeline, actions taken, lessons learned, and a plan to prevent repeat events.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal and HR collaboration */}
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
                  Legal and HR collaboration
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Whistleblowing and ethics work touches both legal and HR. Venovox aligns with both teams so the program is fair, defensible, and kind.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Protect privilege where possible with clear instructions and clean files</h3>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Align investigations with HR policy and local labor rules</h3>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Keep privacy and data security in view at each step</h3>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Plan communications for reporters, subjects, and witnesses</h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you receive from Venovox */}
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
                  What you receive from Venovox
                </h2>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Updated policy and governance documents
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Hotline and intake setup with scripts and templates
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Triage model and risk matrix
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Case workflow, forms, and guidance notes
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Training materials for leaders, managers, and investigators
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Monthly and quarterly report templates and dashboards
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A playbook for non retaliation and safety plans
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Higher trust in the program and more timely reports
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Faster and fairer investigations with better records
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Lower risk of retaliation and better staff wellbeing
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Clearer insight for leaders and the board
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm md:col-span-2">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    A stronger culture of integrity across regions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Venovox */}
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
                    We report facts as we find them and we treat every person with respect. Our work is transparent and repeatable.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Practical and human</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We keep things simple and avoid jargon. We design steps that people can follow on a busy day.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cross border capability</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We run programs across regions with care for local law and culture. We support multi language intake and reporting.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">One team approach</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Investigators, policy specialists, and digital analysts work together. You do not need to manage several vendors.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Explore our full set of services that connect with whistleblowing and ethics management. Use the links below to learn more or to request a short scoping call.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Workplace Misconduct Investigations", href: "/corporate-investigations/workplace-misconduct-investigations" },
                  { title: "Corporate Investigations Hub", href: "/corporate-investigations" },
                  { title: "Regulatory and Compliance Investigations", href: "/corporate-investigations/regulatory-and-compliance-investigations" },
                ].map((service, index) => (
                  <Link key={index} href={service.href}>
                    <motion.div
                      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
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
                If you want to improve your speak up culture, talk to Venovox. Share your current setup and your goals. We will recommend first steps and a simple plan for rollout. We can start small with a pilot and grow from there.
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
