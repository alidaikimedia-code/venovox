"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ShieldCheck,
    Search,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Package,
    Users,
    Eye,
    Lock,
    Target,
    Ban,
} from "lucide-react";
import { FiPhone } from "react-icons/fi";
import { Faqs } from "../common/faq-section";

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



    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative mt-20 w-full min-h-[50vh] overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                <img
                    src="/hero.webp"
                    alt="Brand and IP Investigations"
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
                            Brand and IP Investigations
                        </h1>

                        {/* Paragraph */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2 sm:px-4 md:px-8 lg:px-16">
                            Your brand is a promise to customers. When counterfeit goods or grey market diversion appear, trust and revenue are at risk. Venovox helps you find the source, collect proof, and act with speed. We run test buys, trace supply chains, and support takedowns and seizures. We work with care and keep your name protected.
                        </p>

                        {/* Keywords */}
                        <div className="mt-6 sm:mt-8 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-6 md:px-10 lg:px-20">
                            <p>
                                Primary keywords: brand and IP investigations, counterfeit investigations, grey market investigations, supply chain leak tracing, test buys, online takedowns, marketplace removals, domain disputes, trade secret investigations, customs recordation, brand protection program.
                            </p>
                        </div>

                        {/* Trust Message */}
                        <div className="mt-6 sm:mt-8">
                            <p className="text-white text-sm sm:text-base font-semibold italic">
                                We act quietly and protect your brand
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
                                Report a fake
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
                        <span className="text-gray-900 font-medium">Brand and IP Investigations</span>
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
                                    When to act
                                </h2>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Move early when warning signs appear. Fast action protects customers and preserves leads.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Sudden price drops or unusual discounts online
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            New sellers with limited history or vague contact details
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Product complaints that do not match your quality control data
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Missing units between factory output and market sales
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Domain names or social profiles that mimic your brand
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A whistleblower tip about diversion or leaks
                                        </p>
                                    </li>
                                </ul>

                                <div className="mt-8 p-6 bg-red-50 rounded-lg">
                                    <p className="text-gray-800 font-semibold text-lg">
                                        If you are unsure, start with a quiet scan. We can confirm scale and risk before you go public.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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

                            <div className="space-y-8">
                                {/* Counterfeit goods */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Package className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Counterfeit goods</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We identify makers and sellers of fake products. We map how goods move from source to market. We collect samples and keep chain of custody so that tests and photos can be used in court.
                                    </p>
                                </motion.div>

                                {/* Grey market diversion */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <TrendingUp className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Grey market diversion</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We find where genuine stock is leaking into unintended markets. We review distributor agreements, rebate programs, and serial ranges. We compare factory output and sales to spot gaps.
                                    </p>
                                </motion.div>

                                {/* Trademark and brand misuse */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <ShieldCheck className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Trademark and brand misuse</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We remove listings that use your marks without consent. We address misleading ads, fake service centers, and lookalike packaging.
                                    </p>
                                </motion.div>

                                {/* Trade secret and design theft */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Lock className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Trade secret and design theft</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We investigate leaks of formulas, drawings, software, or process know how. We review access, downloads, and unusual use of external drives. We align with our digital team where needed.
                                    </p>
                                </motion.div>

                                {/* Online impersonation and phishing */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Eye className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Online impersonation and phishing</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We locate false websites, social profiles, and messaging campaigns that pretend to be you. We gather proof and support takedowns.
                                    </p>
                                </motion.div>

                                {/* Supply chain leaks */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Globe className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Supply chain leaks</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We trace leaks in manufacturing, packaging, warehousing, and transit. We visit sites and review logs to see where controls failed.
                                    </p>
                                </motion.div>
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
                                {/* Intelligence and OSINT */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Search className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Intelligence and OSINT</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We scan marketplaces, social platforms, review sites, and forums. We collect seller data, contact details, and shipping patterns. We gather open source records on companies and domains.
                                    </p>
                                </motion.div>

                                {/* Test buys with chain of custody */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Package className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Test buys with chain of custody</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We make covert purchases on markets of interest. We record the process, keep receipts, and store items securely. We photograph packaging, labels, and serial numbers. Where needed we send items for lab testing and keep a clean record from purchase to report.
                                    </p>
                                </motion.div>

                                {/* Supply chain tracing and site checks */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <TrendingUp className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Supply chain tracing and site checks</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We review bills of lading, warehouse logs, and shipping labels. We compare serial ranges and batch codes to your own records. We visit factories, warehouses, and retail points with local partners.
                                    </p>
                                </motion.div>

                                {/* Digital monitoring and takedowns */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Ban className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Digital monitoring and takedowns</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We monitor listings and ads. We prepare platform notices with the evidence needed for quick action. We work with hosts, registrars, and payment providers to remove or block bad actors.
                                    </p>
                                </motion.div>

                                {/* Forensic marking and serialization */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Target className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Forensic marking and serialization</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We help you add or improve markings, QR codes, or track and trace features. This makes it easier to prove origin and to spot leakage points.
                                    </p>
                                </motion.div>

                                {/* Partner and law enforcement coordination */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Users className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Partner and law enforcement coordination</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We brief distributors and logistics partners and agree on simple checks. Where the facts support it, we prepare referrals to law enforcement and support raids with careful planning.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Legal and enforcement support */}
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
                                    Legal and enforcement support
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                    We align with your counsel to plan the right mix of actions. We prepare clean files that support notices and court steps.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Marketplace and social media notices that meet platform rules
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Domain dispute filings and registrar requests
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Customs recordation and training for border agents
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Cease and desist letters and settlement options
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Civil claims with evidence packs and witness statements
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Criminal referrals where public safety is at risk
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A brand risk map that shows sources, routes, and markets
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A seller and platform register with links, contacts, and status
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Test buy reports with photos, receipts, and chain of custody notes
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Evidence packs for takedowns and for court use
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A dashboard that tracks removes, seizures, and repeat actors
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A playbook for partners with checks and contact points
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A short board pack that explains scale, impact, and next steps
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
                                <motion.div
                                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                                    whileHover={{ y: -3 }}
                                >
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Faster removals and fewer fake listings
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                                    whileHover={{ y: -3 }}
                                >
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Clear evidence for court and for law enforcement
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                                    whileHover={{ y: -3 }}
                                >
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Better control of channels and pricing
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                                    whileHover={{ y: -3 }}
                                >
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Safer customers and stronger trust in your brand
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-gray-50 p-6 rounded-lg shadow-sm md:col-span-2"
                                    whileHover={{ y: -3 }}
                                >
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Lower cost of response as repeat actors are blocked
                                    </p>
                                </motion.div>
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

                            <div className="grid  md:grid-cols-2 gap-8">
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Independent and discreet</h3>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We work quietly and keep your brand safe while we collect proof.
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cross border reach</h3>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We act across regions and manage local rules and languages with care.
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinary team</h3>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Investigators, digital analysts, and supply chain specialists work as one team. You do not need to manage several vendors.
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Practical and fast</h3>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We focus on steps that deliver results. We report in plain language so leaders can act.
                                    </p>
                                </motion.div>
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

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Corporate Intelligence and OSINT", href: "/corporate-intelligence-and-osint/" },
                                    { title: "Digital Forensics and Incident Investigations", href: "/corporate-investigations/digital-forensics-and-incident-investigations" },
                                    { title: "Asset Tracing and Recovery", href: "/corporate-investigations/asset-tracing-and-recovery" },
                                    { title: "Corporate Investigations Hub", href: "/corporate-investigations" },
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
                                If you see counterfeit or diversion, speak with Venovox. Share what you have seen and where. We will confirm the scale and propose first steps. We can begin with a short scan and one or two test buys, then scale as needed.
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
