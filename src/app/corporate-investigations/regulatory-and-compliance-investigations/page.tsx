import RegulatoryAndComplianceInvestigations from "@/components/corporate-investigations/regulatory-and-compliance-investigations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Regulatory and Compliance Investigations | ABC, AML, Sanctions, Dawn Raid Response | Venovox",
    description: "Venovox investigates ABC, AML, sanctions, and books and records issues. We support dawn raid response, monitorships, and remediation plans with clear reports and practical advice.",
};

export default function RegulatoryAndComplianceInvestigationsPage() {
    return (
        <>
            <RegulatoryAndComplianceInvestigations />
        </>
    );
}