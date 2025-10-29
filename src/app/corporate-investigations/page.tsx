import CorporateInvestigations from "@/components/corporate-investigations/corporate-investigations";
import { Metadata } from "next";
import {
    OrganizationSchema,
    BreadcrumbSchema,
    FAQSchema,
    CollectionPageSchema,
    ItemListSchema,
} from "@/components/schema";

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Corporate Investigations Services | Fraud, Misconduct, Asset Tracing, Digital Forensics",
    description: "Independent corporate investigations for fraud, misconduct, cyber incidents, regulatory breaches, asset tracing, and brand protection. Clear reports, legal ready methods, global reach.",
};

export default function CorporateInvestigationsPage() {
    const faqs = [
        {
            id: "1",
            question: "How quickly can an investigation start?",
            answer: "We can usually begin once scope and access are agreed. We prioritize evidence preservation and a safe plan first."
        },
        {
            id: "2",
            question: "Do you work under legal privilege?",
            answer: "Yes. We align with your counsel from the start, keep clean files, and protect privilege where possible."
        },
        {
            id: "3",
            question: "Can Venovox operate across borders?",
            answer: "Yes. We work internationally with trusted local partners and follow local rules and privacy laws."
        },
        {
            id: "4",
            question: "What will the final report include?",
            answer: "A plain language summary, a detailed timeline, evidence lists, methods, limits, and clear next steps."
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/corporate-investigations" },
        { name: "Corporate Investigations", url: "/corporate-investigations" },
    ];

    const services = [
        {
            name: "Workplace Misconduct Investigations",
            url: "/corporate-investigations/workplace-misconduct-investigations",
        },
        {
            name: "Asset Tracing and Recovery",
            url: "/corporate-investigations/asset-tracing-and-recovery",
        },
        {
            name: "Regulatory and Compliance Investigations",
            url: "/corporate-investigations/regulatory-and-compliance-investigations",
        },
        {
            name: "Digital Forensics and Incident Investigations",
            url: "/corporate-investigations/digital-forensics-and-incident-investigations",
        },
        {
            name: "Whistleblowing and Ethics Management",
            url: "/corporate-investigations/whistleblowing-and-ethics-management",
        },
        {
            name: "Brand and IP Investigations",
            url: "/corporate-investigations/brand-and-ip-investigations",
        },
        {
            name: "Fraud Risk Management and Prevention",
            url: "/corporate-investigations/fraud-risk-management-and-prevention",
        },
    ];

    return (
        <>
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbItems} baseUrl={BASE_URL} />
            <CollectionPageSchema
                name="Corporate Investigations Services"
                description="Independent corporate investigations for fraud, misconduct, cyber incidents, regulatory breaches, asset tracing, and brand protection. Clear reports, legal ready methods, global reach."
                url="/corporate-investigations"
                baseUrl={BASE_URL}
            />
            <ItemListSchema
                name="Corporate Investigations Services"
                description="Comprehensive range of corporate investigation services"
                items={services}
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <CorporateInvestigations />
        </>
    );
}