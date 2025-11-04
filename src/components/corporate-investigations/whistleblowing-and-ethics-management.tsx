"use client";

import { motion } from "framer-motion";
import ContentSection from "../common/hero-content";
import WhenToActSection from "../common/act";
import { ServiceCard } from "../common/card";
import {
  ShieldCheck,

  MessageCircle,
  TrendingUp,

  MailIcon,
  CircleSlash,
  UmbrellaOff,
  BriefcaseBusiness,
  Lectern,
  Shredder,
  Shield,
  AudioLines,
  Cpu,
  Droplet,
  GlobeLock,
} from "lucide-react";
import { Faqs } from "../common/faq-section";   
import { ActionSection } from "../common/action";

export default function WhistleblowingAndEthicsManagement() {

  const faqs = [
    {
      id: "1",
      question: "Can reporters stay anonymous?",
      answer: "In many places yes. Where names are required by law, we limit access and protect confidentiality."
    },
    {
      id: "2",
      question: "How fast do you acknowledge a report?",
      answer: "Promptly, often within one business day, with a clear outline of next steps."
    },
    {
      id: "3",
      question: "Who can see a report?",
      answer: "Only the core intake and investigation team and legal where needed, following least privilege."
    },
    {
      id: "4",
      question: "How do you prevent retaliation?",
      answer: "We set clear rules, brief managers, monitor for signs of harm, and act quickly if issues arise."
    },
  ];  


  const actionSection = [
    {
      title: "Ready to get started?",
      description: " If you want to improve your speak up culture, talk to Venovox. Share your current setup and your goals. We will recommend first steps and a simple plan for rollout. We can start small with a pilot and grow from there. I",
      primaryButton: {
        text: "Get in Touch",
        link: "/my-en/contact-us",
        icon: MailIcon,
      },
    },
  ]

  const services = [
    {
      title: "Policy and governance",
      description: "We align your policy with local law and industry rules. We define roles for intake owners, investigators, HR, legal, and the board or audit committee. We set service levels for intake, triage, investigation, and close out. We include a plain language non retaliation promise and clear examples of what to report.",
      icon: ShieldCheck,
      link: undefined,
    },
    {
      title: "Hotline and intake channels",
      description: "We provide web, phone, and email channels and can add in person intake where needed. Lines can be open all day, every day. We support anonymous or named reports based on local law. Each report receives a clear receipt message and next step plan so people know what to expect.",
      icon: CircleSlash ,
      link: undefined,
    },
    {
      title: "Triage and risk rating",
      description: "We screen each report for urgency and risk. We decide who should handle it and who should be walled off. We check for conflicts of interest. We set early holds to protect data, messages, and devices. We track time to first action and keep the reporter informed where possible.",
      icon: UmbrellaOff ,
      link: undefined,
    },
    {
      title: "Case management workflow",
      description: "We map each step from intake to close. We define the evidence to be collected, interview plans, and review points. We use simple checklists and templates so cases move in a steady and fair way. We record scope, actions, and decisions at each key moment.",
      icon: BriefcaseBusiness ,
      link: undefined,
    },
    {
      title: "Investigation standards",
      description: "We follow fair process in every case. We keep chain of custody for digital and paper evidence. We use trauma informed interviews. We write findings in clear language and we explain limits and confidence. We do not use leading questions or unfair pressure.",
      icon: Lectern ,
      link: undefined,
    },
    {
      title: "Anonymity and confidentiality",
      description: "Reporters can stay anonymous in many places. Where names must be known, we keep access limited and remind teams of privacy duties. We store data safely and we control who can view it. We never expose the identity of a reporter in public channels.",
      icon: Shredder ,
      link: undefined,
    },
    {
      title: "Non retaliation and safety",
      description: "We make it clear that retaliation is not allowed. We give managers simple guidance on what to do and what not to do. We watch for signs of subtle harm such as shift changes, isolation, or lost opportunities. We set up support options for those who feel at risk.",
      icon: Shield ,
      link: undefined,
    },
    {
      title: "Communication and training",
      description: "We prepare a simple launch kit. It includes posters, intranet content, slides, and manager talking points. We train leaders and investigators on intake, interviews, and fair process. We refresh training each year and after major changes.",
      icon: AudioLines ,
      link: undefined,
    },
    {
      title: "Technology and integrations",
      description: "We can deploy a secure case management system or work with your current tools. We integrate with HR, identity, and collaboration systems where possible. We keep audit trails, access logs, and role based permissions.",
      icon: Cpu ,
      link: undefined,
    },
    {
      title: "Multi language and global reach",
      description: "We support reports in many languages and cover different time zones. We provide translators and local partner support where required. We adapt messages to local culture while keeping global standards.",
      icon: Droplet ,
      link: undefined,
    },
    {
      title: "Privacy and data protection",
      description: "We follow privacy rules in every place you work. We collect only what is needed and we keep it no longer than required. We set clear retention rules and document lawful bases for processing.",
      icon: GlobeLock ,
      link: undefined,
    },
    
  ]

  const services2 = [
    {
      title: "Volume of reports and trends over time",
      description: "We track how report volumes change across months and teams to spot spikes or quiet periods that may indicate deeper issues.",
      link: undefined,
    },
    {
      title: "Mix of channels and locations",
      description: "We show which channels and regions are most active, helping leaders understand communication reach and awareness gaps.",
      link: undefined,
    },
    {
      title: "Time from intake to first action and close",
      description: "Reports include average time metrics that reflect responsiveness and investigation efficiency across teams.",
      link: undefined,
    },
    {
      title: "Case outcomes and root causes",
      description: "We summarize how cases were resolved, highlight recurring themes, and document underlying patterns that drive incidents.",
      link: undefined,
    },
    {
      title: "Status of remedial actions and training",
      description: "Dashboards track corrective actions and completed trainings so leaders can see progress toward stronger compliance.",
      link: undefined,
    },
    {
      title: "Heat maps for higher-risk regions or functions",
      description: "We visualize where issues cluster geographically or functionally, helping prioritize oversight and preventive measures.",
      link: undefined,
    },
    {
      title: "Board-ready case summaries",
      description: "We prepare concise board packs for major cases — including a clear timeline, actions taken, lessons learned, and prevention plans.",
      link: undefined,
    },
  
  ]

  const services3 = [
    {
      title: "Independent and trusted",
      description: "We report facts as we find them and we treat every person with respect. Our work is transparent and repeatable.",
      link: undefined,
    },
    {
      title: "Practical and human",
      description: "We keep things simple and avoid jargon. We design steps that people can follow on a busy day.",
      link: undefined,
    },
    {
      title: "Cross border capability",
      description: "We run programs across regions with care for local law and culture. We support multi language intake and reporting.",
      link: undefined,
    },
    {
      title: "One team approach",
      description: "Investigators, policy specialists, and digital analysts work together. You do not need to manage several vendors.",
      link: undefined,
    }
    ]
    const services4 = [
    {
      title: "Workplace Misconduct Investigations",
      // link: "https://chatgpt.com/workplace-misconduct-investigations/",
    },
    {
      title: "Corporate Investigations Hub",
      // link: "https://chatgpt.com/workplace-misconduct-investigations/",
    },
    {
      title: "Regulatory and Compliance Investigations",
      // link: "https://chatgpt.com/workplace-misconduct-investigations/",
    },
    {
      title: "Fraud Risk Management and Prevention",
      // link: "https://chatgpt.com/workplace-misconduct-investigations/",
    },
  ]

  const services5 = [
    {
      description: "Higher trust in the program and more timely reports",
      link: undefined,
    },
    {
      description: "Faster and fairer investigations with better records",
      link: undefined,
    },
    {
      description: "Lower risk of retaliation and better staff wellbeing",
      link: undefined,
    },
    {
      description: "Clearer insight for leaders and the board",
      link: undefined,
    },
    {
      description: "A stronger culture of integrity across regions",
      link: undefined,
    },
  ]
  return (
    <div className="bg-white px-6 text-gray-900">
      {/* Hero Section */}

      
      <ContentSection
        mainText="A strong speak up culture protects people and protects the company"
        paragraphs={[
          " Venovox designs and runs whistleblowing and ethics programs that are trusted, fair, and simple to use. We help you receive concerns safely, investigate with care, and report with confidence to leaders and the board.",
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

              <p className="p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                This page explains how Venovox builds and improves whistleblowing and ethics programs.
                It shows how we set policy, create safe intake, run careful triage, manage cases,
                and protect people from retaliation. It also explains our reporting model for
                management and the board, and the training that helps your culture grow stronger.
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Why a strong speak up program matters */}
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
                  Why a strong speak up program matters
                </h2>
              </div>

              <div className="p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  People raise issues earlier when they feel safe. Early notice protects staff and reduces loss.
                  A clear program also shows regulators and partners that you take integrity seriously.
                  It helps leaders understand risks that normal reporting may miss.
                  Most of all, it gives every person a fair way to be heard.
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

      {/* Reporting to leaders and the board */}
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
                  Reporting to leaders and the board
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Good reporting builds trust. We design simple dashboards and written reports that focus on risk and progress.
                </p>
              </div>

              {/* Cards Section */}
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
      <WhenToActSection
  title="What you receive from Venovox"
  listItems={[
    "Updated policy and governance documents",
    "Hotline and intake setup with scripts and templates",
    "Triage model and risk matrix",
    "Case workflow, forms, and guidance notes",
    "Training materials for leaders, managers, and investigators",
    "Monthly and quarterly report templates and dashboards",
    "A playbook for non retaliation and safety plans",


  ]}
  highlightBoxText="If this is urgent, contact us now. We can start with a short scoping call and a quick preservation plan."
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
                  {services5.map((service, index) => (
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
                {services3.map((service, index) => (
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
              <p className="text-lg text-gray-700 text-center [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Explore our full set of services that connect with whistleblowing and ethics management. Use the links below to learn more or to request a short scoping call.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {services4.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    // link={service.link}
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
