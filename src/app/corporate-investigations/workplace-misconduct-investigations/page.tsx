import WorkplaceMisconductInvestigations from "@/components/corporate-investigations/workplace-misconduct-investigations";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Workplace Misconduct Investigations | Harassment, Discrimination, Bullying, Retaliation",
    description: "Independent workplace misconduct investigations with a fair and trauma informed approach. We handle harassment, discrimination, bullying, retaliation, and conduct breaches. Clear reports and safe remediation.",
};

export default function WorkplaceMisconductInvestigationsPage() {
    return (
        <>
         <WorkplaceMisconductInvestigations />
        </>
    );
}