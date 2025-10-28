"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  AlertCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";

export default function WorkplaceMisconductInvestigations() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can you start",
      answer: "Usually within 24 hours for intake and within days for a full investigation once scope is set."
    },
    {
      question: "Will the people involved be treated fairly",
      answer: "Yes. We follow fair process, protect dignity, and apply policy consistently. All parties get a chance to be heard."
    },
    {
      question: "How do you protect privacy",
      answer: "We limit access to the core team. We secure data. We follow local privacy rules. We communicate with care."
    },
    {
      question: "What if we need urgent action",
      answer: "We can start intake immediately and put safety measures in place within hours."
    },
    {
      question: "Can you work under legal privilege",
      answer: "Yes. We align with counsel to protect privilege where possible and keep clean files."
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative mt-20 w-full min-h-[60vh] overflow-hidden flex items-center justify-center">
  {/* Background Image */}
  <img
    src="/hero.webp"
    alt="Workplace Misconduct Investigations"
    className="absolute inset-0 w-full h-full object-cover brightness-50"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />

  {/* Content Container */}
  <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20 flex flex-col items-center justify-center text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
        Workplace Misconduct Investigations
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2 sm:px-4 md:px-0">
        When people feel unsafe at work the whole company feels it. Trust drops. Good staff leave. Legal risk grows. We step in with care, speed, and a fair process. Our job is to find facts, protect people, and help leaders act with confidence.
      </p>

      {/* Keywords */}
      <div className="mt-6 sm:mt-8 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-6 md:px-10">
        <p>
          Primary keywords: workplace misconduct investigations, harassment investigations, discrimination investigations, bullying investigations, code of conduct investigations, whistleblowing intake, retaliation safeguards, HR investigations, trauma informed investigations, board reporting.
        </p>
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
            <span className="text-gray-900 font-medium">Workplace Misconduct Investigations</span>
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
                This page explains how we handle reports of harassment, discrimination, bullying, retaliation, and other conduct breaches. It also shows how we protect people, evidence, and your culture while we work. If you need urgent help, contact us for a short scoping call.
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

              <div className=" p-8  bg-gray-50 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Act early if you notice any of the signs below. Early action protects staff and preserves evidence.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A complaint or whistleblower report arrives
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      You see patterns in exit interviews or HR data
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A manager hears about a hostile team culture
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Staff avoid a person or a place at work
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Rumors spread on chat channels or social media
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      You get a legal letter or regulator inquiry
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-red-50 rounded-lg">
                  <p className="text-gray-800 font-semibold text-lg">
                    If you are unsure, start with a quiet intake review. We can help you judge the risk and choose the first safe steps.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Workplace Misconduct Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl text-center font-bold text-red-600 mb-6">
                What is workplace misconduct
              </h2>
              <p className="text-lg text-gray-700 text-center [text-justify:inter-word] hyphens-none leading-relaxed mb-6">
                Workplace misconduct is behavior that breaks your code of conduct or the law. It includes harassment, discrimination, bullying, intimidation, conflicts of interest, misuse of power, and retaliation. It can be a single serious event or an ongoing pattern. Both deserve a fair and careful response.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Cases Section */}
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
            Types of cases we handle
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Harassment */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                <Users className="text-red-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Harassment</h3>
            </div>
            <p className="text-gray-700 text-justify leading-relaxed">
              Unwanted behavior that harms dignity at work. This can be verbal, physical, or digital. We assess impact, power dynamics, and prior patterns.
            </p>
          </motion.div>

          {/* Discrimination */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                <AlertCircle className="text-red-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Discrimination</h3>
            </div>
            <p className="text-gray-700 text-justify leading-relaxed">
              Unequal treatment based on a protected trait. We review hiring, pay, promotion, and access to work. We compare data to policy and law.
            </p>
          </motion.div>

          {/* Bullying */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                <ShieldCheck className="text-red-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Bullying and intimidation
              </h3>
            </div>
            <p className="text-gray-700 text-justify leading-relaxed">
              Repeated behavior that humiliates or isolates someone. We examine team culture, workload, and norms that allow harm to continue.
            </p>
          </motion.div>

          {/* Code of conduct */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                <CheckCircle className="text-red-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Code of conduct breaches
              </h3>
            </div>
            <p className="text-gray-700 text-justify leading-relaxed">
              Conflicts of interest, favoritism, misuse of company resources, and policy violations. We map decisions, approvals, and benefits.
            </p>
          </motion.div>

          {/* Retaliation — Fixed width */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                <AlertCircle className="text-red-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Retaliation</h3>
            </div>
            <p className="text-gray-700 text-justify leading-relaxed">
              Any negative action against a person who raised a concern or helped an inquiry. We put safeguards in place from day one.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Whistleblowing and Intake Section */}
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
            Whistleblowing and intake
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            People speak up when they feel safe and heard. We design intake with care and clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Multiple channels */}
          <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Multiple channels</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              Hotline, email, web form, and in person options
            </p>
          </motion.div>

          {/* Safe intake */}
          <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Safe intake</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              Clear next steps, privacy notice, and non retaliation message
            </p>
          </motion.div>

          {/* Triage */}
          <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Triage</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              Classify risk, set urgency, and choose the right team
            </p>
          </motion.div>

          {/* Eligibility */}
          <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              What is in scope and what is better sent to HR or other teams
            </p>
          </motion.div>

          {/* Early holds — fixed width */}
          <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Early holds</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              Protect messages, logs, and key devices before facts fade
            </p>
          </motion.div>
        </div>

        <p className="text-lg text-gray-700 text-center leading-relaxed mt-6">
          We can manage your hotline or work with the system you already use. We can also run intake in more than one language when needed.
        </p>
      </motion.div>
    </div>
  </div>
</section>


      {/* Investigation Process Section */}
      <section className="py-16 bg-gray-50">
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
                  Our investigation process
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We use a simple and strong method. It keeps your matter defensible and your people respected.
                </p>
              </div>

              <div className="space-y-8 bg-gray-50 p-8 rounded-lg">
                {[
                  {
                    num: 1,
                    title: "Plan and scope",
                    description: "We listen to the concern. We define issues, goals, and limits. We agree who is involved and who must be kept out. We record our plan and share a short timeline."
                  },
                  {
                    num: 2,
                    title: "Preserve evidence",
                    description: "We place legal holds. We secure emails, chats, and files. We collect device images where needed. We note chain of custody for every item."
                  },
                  {
                    num: 3,
                    title: "Gather facts",
                    description: "We review policies, HR files, calendars, access logs, and prior complaints. We interview witnesses and relevant managers. We collect digital traces like chat messages, edits, or access events."
                  },
                  {
                    num: 4,
                    title: "Analyze and validate",
                    description: "We compare statements with documents and data. We test competing stories. We look for motive, opportunity, and pattern. We are careful with bias and language."
                  },
                  {
                    num: 5,
                    title: "Report and brief",
                    description: "We write a clear report with a summary, timeline, findings, and evidence list. We include limits and confidence levels. We brief HR, Legal, and leaders and answer questions."
                  },
                  {
                    num: 6,
                    title: "Remediate and follow up",
                    description: "We propose actions that fit the facts and your policy. This can include coaching, warnings, separation, policy changes, training, and cultural repair. We plan follow up checks to make sure the fix holds."
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

      {/* Legal and HR Collaboration Section */}
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
            Workplace cases often run under legal privilege and must align with HR processes and local law. We work closely with both teams.
          </p>
        </div>

        {/* Box layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Privilege and documentation */}
          <motion.div
            className=" p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Privilege and documentation</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              We plan with counsel to protect privilege where possible. We keep clean files. We record scope, roles, and instructions.
            </p>
          </motion.div>

          {/* Privacy and data */}
          <motion.div
            className=" p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy and data</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              We follow privacy rules in each location. We collect only what we need and store it safely. We limit access to the core team.
            </p>
          </motion.div>

          {/* Interview practice */}
          <motion.div
            className=" p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Interview practice</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              We use fair, trauma informed interviews. We explain rights and process. We avoid leading questions and we keep a respectful tone.
            </p>
          </motion.div>

          {/* Outcome management */}
          <motion.div
            className=" p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Outcome management</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              We help HR communicate results in a way that is clear and careful. We give guidance on record keeping and retention.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Care for People Section */}
      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl text-center font-bold text-red-600 mb-6">
          Care for people
        </h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-10 max-w-2xl mx-auto">
          Respect is not a slogan. It is a set of actions. We build these into every case.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Soft starts and clear consent in interviews
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Right to a support person where policy allows
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Safety plans for those who feel at risk
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Non retaliation reminders for managers and peers
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1 sm:col-span-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Information on support services and next steps
            </p>
          </motion.div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center max-w-2xl mx-auto">
          A fair process helps people heal and helps teams move forward.
        </p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Digital Evidence Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <div className="mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl text-center font-bold text-red-600 mb-6">
          Digital evidence and forensics
        </h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-10 max-w-2xl mx-auto">
          Misconduct can leave a digital trail. We collect and review it in a defensible way.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Chats and collaboration tools
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Email and calendar data
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Access logs and badge records
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Document history and edits
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1 sm:col-span-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Device images for targeted review
            </p>
          </motion.div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center max-w-2xl mx-auto">
          We log every step so your evidence can stand up to review or court use.
        </p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Deliverables Section */}
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
            Deliverables you receive
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              A short executive summary for leaders
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              A detailed report with findings, evidence, and timelines
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              An appendix with interview notes and exhibits
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              A remediation plan with owners and dates
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1 sm:col-span-1"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              A board ready slide pack if you need one
            </p>
          </motion.div>
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
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Clear facts about what happened and who was involved
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    A fair process that respects privacy and dignity
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Steps that reduce risk and improve culture
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Records that meet legal and audit standards
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            Why choose us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Neutral and independent</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              We report facts as they are
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Kind and firm</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              We protect people and hold to policy
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cross border reach</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              We work across regions with local care
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            whileHover={{ y: -3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">One team</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              Investigators, HR specialists, and digital analysts
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1 sm:col-span-1"
            whileHover={{ y: -3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Plain language</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              No jargon, just clear next steps
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Whistleblowing and Ethics Management", href: "/whistleblowing-and-ethics-management/" },
                  { title: "Digital Forensics and Incident Investigations", href: "/digital-forensics-and-incident-investigations/" },
                  { title: "Corporate Intelligence and OSINT", href: "/corporate-intelligence-and-osint/" },
                  { title: "Corporate Investigations Hub", href: "/corporate-investigations/" },
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

      {/* FAQ Section */}
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
                  Frequently asked questions
                </h2>
              </div>

              <div className="space-y-4 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full p-6 flex items-center justify-between text-left focus:ring-red-600 focus:ring-inset"
                    >
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        {openIndex === index ? (
                          <ChevronUp className="w-6 h-6 text-red-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
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
                If you need help now, contact us. Share the basic facts and your timeline. We will set a short call and outline the first safe steps. We can also prepare a one page plan you can share with leaders.
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
