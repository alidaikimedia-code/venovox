"use client";

import { motion,  } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Network,
  Search,
  Server,
  CheckCircle,

  Lock,
  HardDrive,
  Users,
  Globe,
} from "lucide-react";
import { FiPhone } from "react-icons/fi";

export default function DigitalForensicsAndIncidentInvestigations() {
 

  return (
    <div className="bg-white text-gray-900">
      {/* Urgent Alert Band */}
     

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
            Digital Forensics and Incident Investigations
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2 sm:px-4 md:px-8 lg:px-16">
            When accounts are breached or data goes missing, speed and care matter. Venovox helps you understand what happened, limit the damage, and get back to safe operations. We collect and preserve evidence, analyze devices and logs, and deliver clear findings that leaders and lawyers can use. Our work is calm, methodical, and discreet.
            </p>

            {/* Keywords */}
            <div className="mt-6 sm:mt-8 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-6 md:px-10 lg:px-20">
              <p>
                Primary keywords: digital forensics, incident investigations, cyber incident response, device forensics, log analysis, insider threat investigations, data theft investigations, ransomware investigations, business email compromise, chain of custody.

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
            <span className="text-gray-900 font-medium">Digital Forensics and Incident Investigations</span>
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
                This page explains how Venovox investigates cyber incidents and data loss. It shows when to act, what types of cases we handle, our forensics process, and how we coordinate with legal, IT, and security teams. It also lists the deliverables you receive, the outcomes you can expect, and the related services that complete your response.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Act Section */}
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
                  When to act
                </h2>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Move quickly if you see early signs of compromise. Fast action preserves evidence and reduces impact.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A ransomware note or sudden encryption of files
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Unusual data transfers or downloads outside working hours
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      New forwarding rules or mail flow changes in email
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Alerts on admin actions or disabled security tools
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Staff reporting suspicious prompts or messages
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A whistleblower suggests data was taken by a departing employee
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A regulator or customer asks about a potential breach
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-red-50 rounded-lg">
                  <p className="text-gray-800 font-semibold text-lg">
                    If you are unsure, start with a short triage call. We will help you decide the first safe steps.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Incident Types We Handle Section */}
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
                  Incident types we handle
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Users className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Account compromise and BEC</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Unauthorized access to email or collaboration tools that leads to invoice fraud, phishing, or data exposure.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <HardDrive className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Data theft and insider threat</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Copying of files to personal accounts or devices, repository cloning, or covert use of portable storage.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Lock className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Malware and ransomware</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Execution of malicious code that encrypts systems or provides backdoor access.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Globe className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Cloud security events</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Misconfigurations or abused tokens in Microsoft 365, Google Workspace, AWS, or Azure that expose data.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Server className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Endpoint and server intrusions</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Lateral movement, privilege escalation, and persistence on laptops, desktops, and servers.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Network className="text-red-600 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Third party incidents</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Breaches at vendors or partners that place your data at risk.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Investigation and Forensics Process Section */}
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
                  Our investigation and forensics process
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Venovox follows a structured method that protects evidence and produces reliable answers. We explain each step in plain language and align with your change controls.
                </p>
              </div>

              {/* Three-Step Graphic */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <ShieldCheck className="text-red-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Preserve</h3>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Search className="text-red-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Investigate</h3>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="text-red-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Recover</h3>
                </motion.div>
              </div>

              <div className="space-y-8">
                {[
                  {
                    num: 1,
                    title: "Triage and scope",
                    description: "We confirm the type of incident, systems affected, and immediate risks. We agree on containment steps that do not destroy evidence. We set a communication plan and points of contact."
                  },
                  {
                    num: 2,
                    title: "Evidence preservation",
                    description: "We place legal holds and document the scene. We preserve volatile data when needed and collect forensic images of key devices. We secure server and cloud logs and ensure chain of custody for every item."
                  },
                  {
                    num: 3,
                    title: "Collection",
                    description: "We gather data from endpoints, servers, and cloud platforms. Typical sources include EDR telemetry, SIEM logs, email and audit logs, identity and access logs, network devices, collaboration tools, and mobile devices. We collect only what is needed and we store it safely."
                  },
                  {
                    num: 4,
                    title: "Analysis",
                    description: "We build a timeline of activity and correlate events across systems. We review process and driver listings, scheduled tasks, registry changes, and persistence methods. We analyze email headers and message traces. We inspect documents for metadata and exfil patterns. Where malware is present we examine samples in a safe environment to understand behavior and indicators of compromise."
                  },
                  {
                    num: 5,
                    title: "Findings and reporting",
                    description: "We prepare a clear executive summary and a detailed technical report. We include indicators of compromise, affected assets, data at risk, initial access method, and actions taken by the actor. We explain the limits of what can be confirmed and the confidence level for each key point."
                  },
                  {
                    num: 6,
                    title: "Recovery and hardening",
                    description: "We support safe containment and recovery. Typical steps include credential resets, MFA enforcement, removal of persistence, patching, EDR tuning, mail rule clean up, and restoration from backups. We deliver a prioritized hardening plan to reduce the chance of repeat events."
                  }
                ].map((step, index) => (
                  <motion.div key={index} className="bg-white p-6 rounded-lg shadow-sm">
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

      {/* Legal, Privacy, and Regulator Alignment Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Legal, privacy, and regulator alignment
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Cyber matters often touch legal privilege and privacy rules. We work closely with counsel and privacy officers so your response stays defensible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Privilege planning and clean work streams
          </h3>
        </motion.div>

        <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Chain of custody for all data and devices
          </h3>
        </motion.div>

        <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Guidance on breach notification triggers and timelines
          </h3>
        </motion.div>

        <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Support for regulator and customer communications
          </h3>
        </motion.div>

        {/* FIXED — removed md:col-span-2 */}
        <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Coordination with insurers where policies apply
          </h3>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Working with IT and Security Section */}
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
                  Working with IT and security
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We slot into your existing process and tools. We respect change windows and service levels. We use plain language and short updates so everyone stays aligned.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Clear roles and responsibilities from day one</h3>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Safe containment that avoids data loss</h3>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Out of hours support for urgent steps</h3>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge transfer so your team can maintain controls</h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools and Platforms We Support Section */}
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
                  Tools and platforms we support
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We work with common enterprise tools and log sources. Examples include endpoint detection and response tools, security information and event management systems, identity and access logs, cloud platform audit logs, email systems, and collaboration suites. If you use a different toolset we adapt to it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Receive from Venovox Section */}
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
                  What you receive from Venovox
                </h2>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Executive summary for leaders and the board
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Detailed technical report with timelines and evidence
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      List of indicators of compromise and defensive rules
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Data exposure assessment and notification guidance
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Hardening plan with quick wins and longer actions
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Briefing pack for customers or regulators if required
                    </p>
                  </li>
                </ul>
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
                    A clear view of how the incident happened and what was affected
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Evidence that supports legal decisions and notification
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Faster recovery with fewer surprises
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Stronger controls that reduce future risk
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
                    We report facts as we find them and we protect your privacy. Our work is transparent and repeatable.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cross border capability</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Many incidents cross regions and time zones. We coordinate with local partners and keep one master view for your leaders.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinary team</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Forensic analysts, investigators, and compliance specialists work as one team. You get complete answers without juggling vendors.
                  </p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Clear and calm communication</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    You get one point of contact, short status updates, and reports that non technical leaders can read in minutes.
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
                Explore our full set of services that connect with digital forensics and incident investigations. Use the links below to learn more or to request a short scoping call.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Regulatory and Compliance Investigations", href: "/regulatory-and-compliance-investigations/" },
                  { title: "Workplace Misconduct Investigations", href: "/workplace-misconduct-investigations/" },
                  { title: "Corporate Intelligence and OSINT", href: "/corporate-intelligence-and-osint/" },
                  { title: "Asset Tracing and Recovery", href: "/asset-tracing-and-recovery/" },
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
                If you are facing a cyber incident or data loss, speak with Venovox today. Share what you see and your timeline. We will propose safe first steps and begin preservation. We can start small with triage and expand as needed.
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