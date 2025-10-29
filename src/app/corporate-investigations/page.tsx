import CorporateInvestigations from "@/components/corporate-investigations/corporate-investigations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Corporate Investigations Services | Fraud, Misconduct, Asset Tracing, Digital Forensics",
    description: "Independent corporate investigations for fraud, misconduct, cyber incidents, regulatory breaches, asset tracing, and brand protection. Clear reports, legal ready methods, global reach.",
};

export default function CorporateInvestigationsPage() {
    return (
        <>
            <CorporateInvestigations />
        </>
    );
}