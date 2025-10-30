"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ShieldCheck,
    CheckCircle,
    TrendingUp,
    Users,
    FileText,
    Database,
    BarChart3,
    Building,
    Lock,
    Monitor,
} from "lucide-react";
import { FiPhone } from "react-icons/fi";
import { Faqs } from "../common/faq-section";

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


    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative mt-20 w-full min-h-[50vh] overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                <img
                    src="/hero.webp"
                    alt="Fraud Risk Management and Prevention"
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
                            Fraud Risk Management and Prevention
                        </h1>

                        {/* Paragraph */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2 sm:px-4 md:px-8 lg:px-16">
                            Strong controls prevent loss and build trust. Venovox helps you find weak spots, design simple controls, and monitor them in a steady way. We focus on the risks that matter most to your business. Our approach is practical and kind. We teach people what good looks like and we give leaders clear insight so they can act early.
                        </p>

                        {/* Keywords */}
                        <div className="mt-6 sm:mt-8 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-6 md:px-10 lg:px-20">
                            <p>
                                Primary keywords: fraud risk management and prevention, fraud risk assessment, controls testing, continuous monitoring, data analytics for fraud, third party risk, procurement fraud controls, expense fraud controls, payroll fraud controls, training and awareness, control remediation.
                            </p>
                        </div>

                        {/* Trust Message */}
                        <div className="mt-6 sm:mt-8">
                            <p className="text-white text-sm sm:text-base font-semibold italic">
                                We build simple, strong controls that your teams can run
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
                                Download checklist
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
                        <span className="text-gray-900 font-medium">Fraud Risk Management and Prevention</span>
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
                                    Start your prevention program when these signals appear.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Rapid growth or entry into new markets
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            New systems, mergers, or outsourcing
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Repeated near misses or small losses that hint at bigger gaps
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            New partners or a faster vendor onboarding process
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Audit findings on approvals, segregation of duties, or data quality
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A recent incident that revealed control issues
                                        </p>
                                    </li>
                                </ul>

                                <div className="mt-8 p-6 bg-red-50 rounded-lg">
                                    <p className="text-gray-800 font-semibold text-lg">
                                        If you are unsure where to start, we can begin with a short review and a simple heat map of your highest risks.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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

                            <div className="space-y-8">
                                {/* Procurement and payables */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <FileText className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Procurement and payables</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        False vendors, duplicate invoices, kickbacks, fake approvals, and split purchases. We check master data, approvals, three way match, and payment rules.
                                    </p>
                                </motion.div>

                                {/* Sales and receivables */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <TrendingUp className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Sales and receivables</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Fictitious sales, unusual credits, channel stuffing, and write offs. We test price lists, discounts, returns, and credit notes.
                                    </p>
                                </motion.div>

                                {/* Travel and expenses */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <FileText className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Travel and expenses</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Personal spend, duplicate claims, altered receipts, and mileage abuse. We set rules that are simple to follow and easy to check.
                                    </p>
                                </motion.div>

                                {/* Payroll and HR */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Users className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Payroll and HR</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Ghost employees, false hours, and misuse of allowances. We align HR and payroll data and test for unusual patterns.
                                    </p>
                                </motion.div>

                                {/* Inventory and assets */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Database className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Inventory and assets</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Shrinkage, theft, and misuse of company assets. We design cycle counts, access rules, and handover checks.
                                    </p>
                                </motion.div>

                                {/* Third party risk */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Building className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Third party risk</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Agents, distributors, and consultants that create bribery or sanctions exposure. We add due diligence, contract clauses, and monitoring.
                                    </p>
                                </motion.div>

                                {/* IT and access */}
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <Lock className="text-red-600 w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">IT and access</h3>
                                    </div>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Shared accounts, weak privilege controls, and risky downloads. We link identity, approvals, and offboarding steps.
                                    </p>
                                </motion.div>
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
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                                            <span className="text-red-600 font-bold text-xl">1</span>
                                        </div>
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
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                                            <span className="text-red-600 font-bold text-xl">2</span>
                                        </div>
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
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                                            <span className="text-red-600 font-bold text-xl">3</span>
                                        </div>
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
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                                            <span className="text-red-600 font-bold text-xl">4</span>
                                        </div>
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
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                                            <span className="text-red-600 font-bold text-xl">5</span>
                                        </div>
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
                                        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                                            <span className="text-red-600 font-bold text-xl">6</span>
                                        </div>
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
                                    Data analytics and continuous monitoring
                                </h2>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Data makes prevention stronger. Venovox sets up simple tests that run on a schedule. We avoid heavy tools unless you already have them. We focus on clear signals and fast follow up.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Duplicate invoice and vendor checks
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Round number and weekend payment tests
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Split purchase and threshold checks
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Travel and expense anomaly checks
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Ghost employee and payroll mismatch checks
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Master data changes without approval
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Access rights that do not match job roles
                                        </p>
                                    </li>
                                </ul>

                                <div className="mt-8 p-6 bg-red-50 rounded-lg">
                                    <p className="text-gray-800 font-semibold text-lg">
                                        We agree on who reviews alerts, how to clear them, and how to record actions. This keeps effort focused and results easy to show.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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
                                            A fraud risk assessment with a heat map and top risks
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A control matrix with owners, frequency, and evidence
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Data tests and a light dashboard for monthly review
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Updated policies, job aids, and training materials
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A remediation plan with quick wins and longer actions
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-red-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            A board and executive pack that explains progress in plain language
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
              Fewer losses and faster detection of issues
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Clear roles and controls that staff can follow
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Better records that stand up to audit and legal review
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              Higher trust and a stronger speak up culture
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            whileHover={{ y: -3 }}
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              A program that grows with your business without heavy cost
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

                            <div className="grid md:grid-cols-2 gap-8">
                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Independent and practical</h3>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We report facts as we find them and we design steps that work in the real world. We remove jargon and focus on results.
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cross border experience</h3>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        We help global teams align on simple standards while respecting local rules. We support multi language training and reporting.
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinary team</h3>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        Investigators, control specialists, data analysts, and trainers work as one team. You do not need to coordinate several vendors.
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" whileHover={{ y: -3 }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Clear communication</h3>
                                    <p className="text-gray-700 text-justify leading-relaxed">
                                        You get one point of contact, short updates, and tools your teams can use without extra help.
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
                            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
                                Explore our full set of services that connect with fraud risk management and prevention. Use the links below to learn more or to request a short scoping call.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Regulatory and Compliance Investigations", href: "/corporate-investigations/regulatory-and-compliance-investigations" },
                                    { title: "Corporate Intelligence and OSINT", href: "/corporate-intelligence-and-osint" },
                                    { title: "Digital Forensics and Incident Investigations", href: "/corporate-investigations/digital-forensics-and-incident-investigations" },
                                    { title: "Workplace Misconduct Investigations", href: "/corporate-investigations/workplace-misconduct-investigations" },
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
                                If you want to reduce fraud risk and build simple, strong controls, talk to Venovox. Share your goals and your timeline. We will suggest a short plan that starts with the areas of highest impact and lowest effort. We can begin with a focused assessment and a pilot for one process, then scale across the business once you see results.
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
