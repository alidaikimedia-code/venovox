"use client";

import { motion, } from "framer-motion";
import ContentSection from "../common/hero-content";
import WhenToActSection from "../common/act";
import { ServiceCard } from "../common/card";
import {
  ShieldCheck,

  MailIcon,
  Search,
  CheckCircle,
  CircleUserRound,
  BetweenHorizontalStart,
  Worm,
  CloudFog,
  HardDrive,
  Tally3,
} from "lucide-react";
import { Faqs } from "../common/faq-section";
import { ActionSection } from "../common/action";

export default function DigitalForensicsAndIncidentInvestigations() {

  const faqs = [
    {
      id: "1",
      question: "Can staff keep working while you collect evidence?",
      answer: "Often yes. We plan safe containment and target collections to reduce disruption while protecting data."
    },
    {
      id: "2",
      question: "What cloud sources can you examine?",
      answer: "We collect logs and artifacts from suites like Microsoft 365, Google Workspace, common EDR and SIEM tools, and major cloud platforms."
    },
    {
      id: "3",
      question: "Do you handle ransomware negotiations?",
      answer: "We focus on investigation and recovery and can coordinate with counsel and specialist negotiators where appropriate."
    },
    {
      id: "4",
      question: "How long do you retain forensic images?",
      answer: "Retention follows your policy and legal guidance. We store evidence securely and control access."
    },
  ];
  const services = [
    {
      title: "Account compromise and BEC",
      description: "Unauthorized access to email or collaboration tools that leads to invoice fraud, phishing, or data exposure.",
      icon: CircleUserRound,
      link: undefined,
    },
    {
      title: "Data theft and insider threat",
      description: "Copying of files to personal accounts or devices, repository cloning, or covert use of portable storage.",
      icon: BetweenHorizontalStart,
      link: undefined,
    },
    {
      title: "Malware and ransomware",
      description: "Execution of malicious code that encrypts systems or provides backdoor access.",
      icon: Worm,
      link: undefined,
    },
    {
      title: "Cloud security events",
      description: "Misconfigurations or abused tokens in Microsoft 365, Google Workspace, AWS, or Azure that expose data.",
      icon: CloudFog,
      link: undefined,
    },
    {
      title: "Endpoint and server intrusions",
      description: "Lateral movement, privilege escalation, and persistence on laptops, desktops, and servers.",
      icon: HardDrive,
      link: undefined,
    },
    {
      title: "Third party incidents",
      description: "Breaches at vendors or partners that place your data at risk.",
      icon: Tally3,
      link: undefined,
    },
  ]

  const services2 = [
    {
      title: "Independent and trusted",
      description: "We report facts as we find them and we protect your privacy. Our work is transparent and repeatable.",
      link: undefined,
    },
    {
      title: "Cross border capability",
      description: "Many incidents cross regions and time zones. We coordinate with local partners and keep one master view for your leaders.",
      link: undefined,
    },
    {
      title: "Multidisciplinary team",
      description: "Forensic analysts, investigators, and compliance specialists work as one team. You get complete answers without juggling vendors.",
      link: undefined,
    },
    {
      title: "Clear and calm communication",
      description: "You get one point of contact, short status updates, and reports that non technical leaders can read in minutes.",
      link: undefined,
    },
  ]
  const services3 = [
    {
      title: "Regulatory and Compliance Investigations",
      link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
    },
    {
      title: "Litigation Support Investigations",
      link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
    },
    {
      title: "Workplace Misconduct Investigations",
      link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
    },
    {
      title: "Corporate Intelligence and OSINT",
      link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
    },
    {
      title: "Corporate Investigations Hub",
      link: "https://chatgpt.com/regulatory-and-compliance-investigations/",
    },
  ]

  const services4 = [
    {
      description: "A clear view of how the incident happened and what was affected",
      link: undefined,
    },
    {
      description: "Evidence that supports legal decisions and notification",
      link: undefined,
    },
    {
      description: "Faster recovery with fewer surprises",
      link: undefined,
    },
    {
      description: "Stronger controls that reduce future risk",
      link: undefined,
    },
  ]

  const actionSection = [
    {
      title: "Ready to get started?",
      description: "  If you are facing a cyber incident or data loss, speak with Venovox today. Share what you see and your timeline. We will propose safe first steps and begin preservation. We can start small with triage and expand as needed.",
      primaryButton: {
        text: "Get in Touch",
        link: "/contact-us",
        icon: MailIcon,
      },
    },
  ]
  return (
    <div className="bg-white px-6 text-gray-900">

      {/* Hero Section */}
      <ContentSection
        mainText="When accounts are breached or data goes missing, speed and care matter"
        paragraphs={[
          "  Venovox helps you understand what happened, limit the damage, and get back to safe operations. We collect and preserve evidence, analyze devices and logs, and deliver clear findings that leaders and lawyers can use. Our work is calm, methodical, and discreet.",
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
                This page explains how Venovox investigates cyber incidents and data loss. It shows when to act, what types of cases we handle, our forensics process, and how we coordinate with legal, IT, and security teams. It also lists the deliverables you receive, the outcomes you can expect, and the related services that complete your response.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Act Section */}
      <WhenToActSection
        title="When to act"
        subtitle="Move quickly if you see early signs of compromise. Fast action preserves evidence and reduces impact."
        listItems={[
          "A ransomware note or sudden encryption of files",
          "Unusual data transfers or downloads outside working hours",
          "New forwarding rules or mail flow changes in email",
          "Alerts on admin actions or disabled security tools",
          "Staff reporting suspicious prompts or messages",
          "A whistleblower suggests data was taken by a departing employee",
          "A regulator or customer asks about a potential breach",


        ]}
        highlightBoxText="If you are unsure, start with a short triage call. We will help you decide the first safe steps."
        accentColor="text-red-600"
      />

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
      <WhenToActSection
        title="What you receive from Venovox"
        listItems={[
          "Executive summary for leaders and the board",
          "Detailed technical report with timelines and evidence",
          "List of indicators of compromise and defensive rules",
          "Data exposure assessment and notification guidance",
          "Hardening plan with quick wins and longer actions",
          "Briefing pack for customers or regulators if required",

        ]}
        accentColor="text-red-600"
      />

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
                  {services4.map((service, index) => (
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
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Explore our full set of services that connect with digital forensics and incident investigations. Use the links below to learn more or to request a short scoping call.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {services3.map((service, index) => (
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

      <div className=" mx-auto container  space-y-24 relative">
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