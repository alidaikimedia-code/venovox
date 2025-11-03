"use client";
import { ServiceCard } from "../common/card";
import { motion,  } from "framer-motion";
import {ActionSection}from "../common/action"
import ContentSection from "../common/hero-content";
import WhenToActSection from "../common/act";
import {
  
  AlertCircle,
  PersonStanding,
  HandFist,
  Code,
  Ban,
  MailIcon,
  
 

} from "lucide-react";
import { Faqs } from "../common/faq-section";


export default function WorkplaceMisconductInvestigations() {


  const services = [
    {
      title: "Harassment",
      description: "We investigate complaints of harassment, including sexual harassment, racial harassment, and other forms of discrimination.",
      icon: AlertCircle  ,
      link: undefined,
    },
    {
      title :"Discrimination",
      description:"Unequal treatment based on a protected trait. We review hiring, pay, promotion, and access to work. We compare data to policy and law.",
    icon: PersonStanding,
    link: undefined,
    },
    {
      title:"Bullying and intimidation",
      description:"Repeated behavior that humiliates or isolates someone. We examine team culture, workload, and norms that allow harm to continue.",
      icon: HandFist ,
      link: undefined,
    },
    {
      title:"Code of conduct breaches",
      description:"Conflicts of interest, favoritism, misuse of company resources, and policy violations. We map decisions, approvals, and benefits.",
      icon: Code ,
      link: undefined,
    },
    {
      title:"Retaliation",
      description:"Any negative action against a person who raised a concern or helped an inquiry. We put safeguards in place from day one.",
      icon: Ban ,
      link: undefined,
    },
    
  ];

  const services2 = [
    {
      title: "Privilege and documentation",
      description: "We plan with counsel to protect privilege where possible. We keep clean files. We record scope, roles, and instructions.",
      
      link: undefined,
    },
    {
      title: "Privacy and data",
      description: "We follow privacy rules in each location. We collect only what we need and store it safely. We limit access to the core team.",
      
      link: undefined,
    },
    {
      title: "Interview practice",
      description: "We use fair, trauma informed interviews. We explain rights and process. We avoid leading questions and we keep a respectful tone.",
      
      link: undefined,
    },
    {
      title: "Outcome management",
      description: "We help HR communicate results in a way that is clear and careful. We give guidance on record keeping and retention.",
      
      link: undefined,
    },
    
  ];

  const services3 = [
    {
      title: "Multiple channels",        
      description: " hotline, email, web form, and in person options",
    
      link: undefined,
    },
    {
      title: "Safe intake:",
      description: "clear next steps, privacy notice, and non retaliation message",
      link: undefined,
    },
    {
      title: "Triage",
      description: "classify risk, set urgency, and choose the right team",
      link: undefined,
    },
    {
      title: "Eligibility",
      description: "what is in scope and what is better sent to HR or other teams",
      link: undefined,
    },
    {
      title: "Early holds",
      description: " protect messages, logs, and key devices before facts fade",
      link: undefined,
    },
    
  ];


  const services4 = [
    {
      description: " Soft starts and clear consent in interviews",
    
      link: undefined,
    },
    {
      description: "Right to a support person where policy allows",
      link: undefined,
    },
    {
      description: "Safety plans for those who feel at risk",
      link: undefined,
    },
    {
      description: "Non retaliation reminders for managers and peers",
      link: undefined,
    },
    {
      description: " Information on support services and next steps",
      link: undefined,
    },
    
  ];


  

  const services5 = [
    {
      description: "Chats and collaboration tools",
      link: undefined,
    },
    {
      description: "Email and calendar data",
      link: undefined,
    },
    {
      description: "Access logs and badge records",
      link: undefined,
    },
    {
      description: "Document history and edits",
      link: undefined,
    },
    {
      description: "Device images for targeted review",
      link: undefined,
    },
  ];

  const actionSection = [
    {
      title: "Ready to get started?",
      description:
        "If you need help now, contact us. Share the basic facts and your timeline. We will set a short call and outline the first safe steps. We can also prepare a one page plan you can share with leaders.",
      primaryButton: {
        text: "Get in Touch",
        link: "/my-en/contact-us",
        icon: MailIcon,
      },
      
    },
  ]
  

  const services6 = [
    {
      title: "A short executive summary for leaders",
      // link: "https://chatgpt.com/whistleblowing-and-ethics-management/",
    },
    {
      title: "A detailed report with findings, evidence, and timelines",
      // link: "https://chatgpt.com/digital-forensics-and-incident-investigations/",
    },
    {
      title: "An appendix with interview notes and exhibits",
      // link: "https://chatgpt.com/whistleblowing-and-ethics-management/",
    },
    {
      title: "A remediation plan with owners and dates",
      // link: "https://chatgpt.com/digital-forensics-and-incident-investigations/",
    },
    {
      title: "A board ready slide pack if you need one",
      // link: "https://chatgpt.com/digital-forensics-and-incident-investigations/",
    },
  ];

  const services7 = [
    {
      title: "Whistleblowing and Ethics Management",
      // link: "https://chatgpt.com/whistleblowing-and-ethics-management/",
    },
    {
      title: "Digital Forensics and Incident Investigations",
      // link: "https://chatgpt.com/whistleblowing-and-ethics-management/",
    },
    {
      title: "Corporate Intelligence and OSINT",
      // link: "https://chatgpt.com/whistleblowing-and-ethics-management/",
    },
    {
      title: "Corporate Investigations Hub",
      // link: "https://chatgpt.com/whistleblowing-and-ethics-management/",
    },
  ]

  


  const faqs = [
    {
      id: "1",
      question: "Will participants be protected from retaliation?",
      answer: "Yes. We set clear safeguards, remind managers of duties, and monitor for subtle harms such as isolation or lost opportunities."
    },
    {
      id: "2",
      question: "How are interviews conducted?",
      answer: "We use fair, trauma informed interviews with clear consent, simple ground rules, and respectful language."
    },
    {
      id: "3",
      question: "Can reports be anonymous?",
      answer: "In many locations yes. Where names are required, we limit access to the core team and protect privacy."
    },
    {
      id: "4",
      question: "How long does a typical case take?",
      answer: "It depends on scope and evidence. Many matters resolve within a few weeks after intake, preservation, and interviews."
    },
   
  ];

  return (
    <div className="bg-white px-6 text-gray-900">
      {/* Hero Section */}

      <ContentSection
        mainText="When people feel unsafe at work  the whole company feels it."
        paragraphs={[
          " Trust drops. Good staff leave. Legal risk grows. We step in with care, speed, and a fair process. Our job is to find facts, protect people, and help leaders act with confidence.",
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
                This page explains how we handle reports of harassment, discrimination, bullying, retaliation, and other conduct breaches. It also shows how we protect people, evidence, and your culture while we work. If you need urgent help, contact us for a short scoping call.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Act Section */}
      <WhenToActSection
  title="When to act"
  subtitle="Act early if you notice any of the signs below. Early action protects staff and preserves evidence."
  listItems={[
    "A complaint or whistleblower report arrives",
    "You see patterns in exit interviews or HR data",
    "A manager hears about a hostile team culture",
    "Staff avoid a person or a place at work",
    "Rumors spread on chat channels or social media",
    "You get a legal letter or regulator inquiry",

  ]}
  highlightBoxText="If you are unsure, start with a quiet intake review. We can help you judge the risk and choose the first safe steps."
  accentColor="text-red-600"
/>

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
      <p className="text-lg text-gray-700 text-center leading-relaxed mt-6">
          We can manage your hotline or work with the system you already use. We can also run intake in more than one language when needed.
        </p>
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

        <div className="grid md:grid-cols-2 gap-8">
                {services4.map((service, index) => (
                  <ServiceCard
                    key={index}
                    description={service.description}

                    link={service.link}
                  />
                ))}
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

        <div className="grid md:grid-cols-2 gap-8">
                {services5.map((service, index) => (
                  <ServiceCard
                    key={index}
                    description={service.description}

                    link={service.link}
                  />
                ))}
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

        <div className="grid md:grid-cols-2 gap-8">
                {services6.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}

                    //link={service.link}
                  />
                ))}
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

              <div className="grid md:grid-cols-2 gap-8">
                  {services7.map((service, index) => (
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
