"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  Users,
  Briefcase,
  Target,
  CheckCircle,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

export default function CorporateInvestigations() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative mt-20 w-full min-h-[50vh] overflow-hidden flex items-center">
        <img
          src="/hero.webp"
          alt="Corporate Investigations"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center  mx-auto"
          >
          
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Corporate Investigations
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Serious problems inside a company create stress and doubt. In these moments you need steady guidance and a clear plan. Our investigators handle sensitive matters with care, structure, and respect for every person involved. We find facts, reduce risk, and help leaders act with confidence.
            </p>
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
            <span className="text-gray-900 font-medium">Corporate Investigations</span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-6">
                We focus on the real world outcomes that matter. We protect people and data. We help you meet legal and regulator expectations. We preserve your reputation while you make sound decisions. Our team has deep experience across finance, operations, cyber, and compliance, which means we can move fast and coordinate complex work without losing control.
              </p>
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-6">
                We are independent and discreet. We follow repeatable methods and keep detailed records so your findings can stand up to challenge. We work across borders with trusted partners. You get plain language updates and one point of contact from day one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scope of Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12  mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Scope of work
                </h2>
              </div>
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                We investigate problems that can harm your people, money, data, and reputation. Each topic below includes a short overview of how we work and the results you can expect. Every item links to a detailed service page.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Internal fraud */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <ShieldCheck className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Internal fraud</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We uncover embezzlement, false billing, conflict of interest, ghost employees, and financial manipulation. Our team analyzes books and records, expense data, and approval logs. We map who had access and who gained from the scheme. We interview staff and review messages and emails where needed. You receive a clear timeline, an estimate of loss, and evidence that can support recovery and HR action.
                  </p>
                </motion.div>

                {/* Third party fraud */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Globe className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Third party fraud</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We test the integrity of vendors, distributors, partners, and agents. We look for kickbacks, bid rigging, diversion, duplicate invoicing, and false claims. We review contracts, side letters, pricing, rebate structures, and proof of delivery. We compare expected activity to actual activity using data analytics. You receive findings and a practical plan to fix controls and recover value.
                  </p>
                </motion.div>

                {/* Workplace misconduct */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Users className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Workplace misconduct</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We handle harassment, discrimination, bullying, and code of conduct breaches with care and fairness. We use a trauma informed approach. We set ground rules, protect privacy, and avoid harm. We gather evidence from interviews, policies, devices, and systems. We provide balanced findings and recommendations that meet HR and legal standards.
                  </p>
                  <Link href="/workplace-misconduct-investigations/" className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center">
                    Learn more →
                  </Link>
                </motion.div>

                {/* Data and cyber incidents */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Target className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Data and cyber incidents</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We investigate insider threats, data theft, account compromise, and ransomware impact. We preserve devices, cloud data, and logs. We identify what was accessed, what was taken, and how it happened. We support containment with your IT and security teams. You receive a clear incident report, evidence logs, and guidance for notification and recovery.
                  </p>
                  <Link href="/digital-forensics-and-incident-investigations/" className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center">
                    Learn more →
                  </Link>
                </motion.div>

                {/* Regulatory breaches */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <AlertCircle className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Regulatory breaches</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We investigate ABC and AML matters, sanctions exposure, books and records issues, and dawn raid response. We test transactions and counterparties. We review approvals, controls, and training. We assess exposure against the laws that apply in your markets. We prepare briefing packs for counsel and regulators and propose a practical remediation plan.
                  </p>
                  <Link href="/regulatory-and-compliance-investigations/" className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center">
                    Learn more →
                  </Link>
                </motion.div>

                {/* Asset tracing */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <TrendingUp className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Asset tracing</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We follow money and assets across borders and through complex structures. We use corporate records, court filings, trade data, travel data, and open sources to build a picture of ownership and control. We identify bankable leads for freezing orders and enforcement. You receive a recovery map that aligns evidence with legal options.
                  </p>
                  <Link href="/asset-tracing-and-recovery/" className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center">
                    Learn more →
                  </Link>
                </motion.div>

                {/* Litigation support */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Briefcase className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Litigation support</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We gather evidence, protect chain of custody, and coordinate with eDiscovery teams. We validate the source of documents and confirm authenticity. We locate witnesses and provide background on counterparties. We supply expert reports and testimony where required. Your legal team gains facts they can trust.
                  </p>
                  <Link href="/litigation-support-investigations/" className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center">
                    Learn more →
                  </Link>
                </motion.div>

                {/* Brand and IP protection */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <ShieldCheck className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Brand and IP protection</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We fight counterfeit and grey market leakage. We run test buys on and offline. We track serial numbers and map supply chain weak points. We work with platforms, hosts, and local partners to support takedowns and seizures. You get evidence that supports enforcement and steps to protect revenue.
                  </p>
                  <Link href="/brand-and-ip-investigations/" className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center">
                    Learn more →
                  </Link>
                </motion.div>

                {/* Intelligence and OSINT */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Globe className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Intelligence and OSINT</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We deliver enhanced due diligence, background checks on people and companies, and human source insights. We assess market entry risk and partner risk. We combine online sources with field research where appropriate. You receive a clear view of integrity, reputation, and hidden risk before you act.
                  </p>
                  <Link href="/corporate-intelligence-and-osint/" className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center">
                    Learn more →
                  </Link>
                </motion.div>

                {/* Prevention and controls */}
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <CheckCircle className="text-red-700 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Prevention and controls</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We test controls, use data analytics, and train teams to stop issues early. We run fraud risk assessments and process walk throughs. We design simple monitoring that your team can run. We help you build a culture that values speaking up and early action.
                  </p>
                  <Link href="/fraud-risk-management-and-prevention/" className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center">
                    Learn more →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12 mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Industries we serve
                </h2>
              </div>
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                We support clients in many sectors. Each industry has its own rules, risks, and pressure points. We tailor our plan to fit your context and your culture.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Financial services</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Banks, fintech, insurance, payments, and asset managers face strict rules and rapid change. Typical issues include insider abuse, sanctions screening gaps, trade based money laundering, and third party risk. We help you respond to alerts, review historic activity, and prepare for regulator questions. We support remediation and testing so you can prove progress.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technology and media</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Software firms, platforms, telecoms, and media companies protect large volumes of user data and IP. Insider threat, data leaks, and account compromise are common triggers for investigations. We combine digital forensics with interviews and policy review. We help you manage notification, PR, and regulator interactions with clear facts.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing and logistics</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Global supply chains create fraud and diversion risk. We see false vendors, duplicate invoices, off invoice rebates, and grey market sales. We use data tests, site checks, and test buys to map what is real and what is not. We deliver simple fixes that strengthen approvals and cut leakage.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Energy and natural resources</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Projects often involve joint ventures, state counterparties, and complex local rules. ABC risk, sanctions exposure, and security concerns can be high. We review partner integrity, monitor local agents, and test high risk payments. We help you work within local law while meeting global standards.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare and life sciences</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Organisations handle sensitive patient data, research IP, and long vendor networks. Risks include procurement fraud, clinical misconduct, and privacy breaches. We balance duty of care with the need to find the truth. We work with counsel to keep sensitive data secure and privileged.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Consumer and retail</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Brands fight counterfeit goods and grey market diversion. Chargeback fraud and return abuse also erode margin. We run online monitoring, covert test buys, and logistics reviews. We help you remove bad listings, improve controls, and protect honest customers.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg md:col-span-2" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Public sector and NGOs</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Public funds and grants demand strong integrity and transparent records. Risks include conflict of interest, improper influence, and procurement problems. We provide evidence based reporting and clear remedial plans that stand up to audit and public review.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12  mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  How we work
                </h2>
              </div>
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Our method is simple and strong. It keeps your matter defensible and your people respected. We plan carefully, move with purpose, and explain each step in plain language.
              </p>

              <div className="space-y-8">
                <motion.div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start mb-4">
                    <div className=" text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Intake and scoping</h3>
                      <p className="text-gray-700 text-justify leading-relaxed">
                        We listen to your concerns and gather the facts you already have. We define the problem, the goals, and the limits. We agree on access, roles, and timelines. We set early safeguards so nothing is lost and nobody is harmed.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start mb-4">
                    <div className=" text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Evidence preservation</h3>
                      <p className="text-gray-700 text-justify leading-relaxed">
                        We secure devices, emails, chat records, cloud drives, and paper files. We document every action to protect chain of custody. We place holds where needed and isolate systems that may be at risk. Our goal is to freeze the scene without stopping your business.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start mb-4">
                    <div className=" text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Collection and analysis</h3>
                      <p className="text-gray-700 text-justify leading-relaxed">
                        We collect data and testimony in a fair and consistent way. We use digital forensics, accounting reviews, OSINT and HUMINT checks, and structured interviews. We build a clear timeline that shows who did what and when. We test competing theories and note what we cannot confirm.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start mb-4">
                    <div className=" text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Findings and reporting</h3>
                      <p className="text-gray-700 text-justify leading-relaxed">
                        We turn complex facts into a clear story. You get a concise executive summary and detailed appendices with evidence, methods, and sources. We explain limits and confidence levels. We brief leaders, HR, and counsel and support next steps.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start mb-4">
                    <div className=" text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Remediation and prevention</h3>
                      <p className="text-gray-700 text-justify leading-relaxed">
                        We help close gaps and improve controls. We update policies, design monitoring, and train teams on do and do not rules. We propose quick wins and longer term fixes. We plan follow up testing and can help you report progress to your board and stakeholders.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal and Regulatory Interface Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12  mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Legal and regulatory interface
                </h2>
              </div>
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Many investigations sit inside legal privilege and may face regulators or courts. We work closely with counsel from the start so your matter is protected and efficient.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Privilege planning</h3>
                  <p className="text-gray-700 text-justify leading-relaxed mb-6">
                    We align with in house and external counsel on scope, instructions, and communications. We keep privileged and non privileged work streams separate where needed. We record the basis for privilege and keep clean files.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Evidence integrity</h3>
                  <p className="text-gray-700 text-justify leading-relaxed mb-6">
                    We maintain chain of custody and use repeatable methods. We log tools, settings, and hashes for digital work. We reference sources and citations for interviews and documents. Our documentation supports review, audit, and court use.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Regulator engagement</h3>
                  <p className="text-gray-700 text-justify leading-relaxed mb-6">
                    We prepare response plans and briefing packs. We help you respond to dawn raids and inquiries with confidence. We provide clear facts, timelines, and corrective actions. Where monitorships apply we support planning and progress tracking.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Court ready outputs</h3>
                  <p className="text-gray-700 text-justify leading-relaxed mb-6">
                    We provide expert reports, exhibits, and affidavits where required. We can testify to methods and findings. We follow local procedural rules and coordinate with your legal team so evidence is presented in a clear and helpful way.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12  mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Outcomes you can expect
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    A clear understanding of what happened, why it happened, and who was involved. We highlight root causes and control gaps.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Evidence that stands up to legal and regulator review. We show how each fact was found and preserved.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Practical steps to stop the issue and prevent a repeat. We give owners, timelines, and simple measures of success.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Support for recovery, remediation, and culture change. We help you repair trust and communicate with care.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12  mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Why choose us
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Independent and discreet</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We act with care and keep your trust. We avoid conflicts and report facts as we find them. We keep a low profile and protect your privacy.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cross border reach</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    International work is routine for us. We understand regional laws and culture and we partner with trusted local experts. We coordinate permits, translation, and data transfer rules so your case runs smoothly.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinary team</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Investigators, forensic accountants, cyber experts, and intelligence analysts work as one team. This saves time and gives you a complete view of risk. You do not need to manage several vendors.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fast action and clear updates</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    You get a single point of contact, a simple plan, and regular short updates. We remove jargon and explain choices so you can decide quickly.
                  </p>
                </motion.div>

                <motion.div className="bg-gray-50 p-6 rounded-lg md:col-span-2" whileHover={{ y: -3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Human approach</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    We respect people. We protect whistleblowers and witnesses. We design interviews and communications that are firm and kind. We aim to find the truth while keeping dignity in view.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Act Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12  mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  When to act
                </h2>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      You see red flags in payments or procurement. For example, duplicate invoices, unusual round numbers, or vendors with shared details.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A whistleblower raises a concern. Treat this early so people feel safe and facts are not lost.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A dawn raid or regulator inquiry arrives. Early planning protects privilege and reduces disruption.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      A key employee leaves and data looks at risk. Preserve devices and accounts before they are reused.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Your brand is hit by fakes or grey market activity. Quick test buys and takedowns protect revenue.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-justify leading-relaxed">
                      You need to trace assets for recovery. Early intelligence can support freezing orders and stronger negotiations.
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-red-50 rounded-lg border-l-4 ">
                  <p className="text-gray-800 font-semibold text-lg">
                    If this is urgent, contact us now. We can start with a short scoping call and a quick preservation plan.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12  mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Frequently asked questions
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can you start</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Usually within hours once we agree on scope and access.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Will our staff be treated fairly</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Yes. We follow a fair process. We protect privacy and dignity.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can you work under legal privilege</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Yes. We align with counsel to protect privilege where possible.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work in multiple countries</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Yes. We handle cross border matters and complex structures.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What do your reports include</h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Facts, timelines, methods, evidence lists, and clear next steps.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12  mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Related services
                </h2>
              </div>
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Explore our full set of services that connect with corporate investigations. Use the links below to learn more or to request a short scoping call.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Workplace Misconduct Investigations", href: "/workplace-misconduct-investigations/" },
                  { title: "Asset Tracing and Recovery", href: "/asset-tracing-and-recovery/" },
                  { title: "Regulatory and Compliance Investigations", href: "/regulatory-and-compliance-investigations/" },
                  { title: "Corporate Intelligence and OSINT", href: "/corporate-intelligence-and-osint/" },
                  { title: "Litigation Support Investigations", href: "/litigation-support-investigations/" },
                  { title: "Digital Forensics and Incident Investigations", href: "/digital-forensics-and-incident-investigations/" },
                  { title: "Whistleblowing and Ethics Management", href: "/whistleblowing-and-ethics-management/" },
                  { title: "Brand and IP Investigations", href: "/brand-and-ip-investigations/" },
                  { title: "Fraud Risk Management and Prevention", href: "/fraud-risk-management-and-prevention/" },
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
          <div className=" mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm mb-6">
                <p className="text-lg leading-relaxed mb-6">
                  Speak with an investigations specialist today. Tell us what happened, what you need, and your timeline. We will propose a simple plan and the first safe steps to protect people and evidence.
                </p>

                <div className="space-y-4 text-left">
                  <p className="font-semibold text-lg">Prefer email</p>
                  <p className="text-gray-300">
                    Send a short note and we will reply with times for a quick call.
                  </p>

                  <p className="font-semibold text-lg mt-6">Prefer a document</p>
                  <p className="text-gray-300">
                    We can send a one page plan that outlines scope, timing, and estimated effort.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/my-en/contact-us"
                  className="px-8 py-4  text-white font-medium hover: transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-lg"
                >
                  Contact Us Now
                </Link>
                <a
                  href="tel:+60128008888"
                  className="px-8 py-4 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-lg"
                >
                  Call +60 12-800 8888
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}