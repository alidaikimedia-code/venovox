import DigitalForensicsAndIncidentInvestigations from "@/components/corporate-investigations/digital-forensics-and-incident-investigations"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Forensics and Incident Investigations | Ransomware, Data Theft, Email Compromise | Venovox",
    description: "Venovox investigates cyber incidents with careful evidence handling and clear reporting. We handle ransomware, data theft, account compromise, and cloud security events, and we help you recover safely.",
};

export default function DigitalForensicsAndIncidentInvestigationsPage() {
    return (
        <>
            <DigitalForensicsAndIncidentInvestigations />
        </>
    );
}