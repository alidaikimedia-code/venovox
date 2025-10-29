import FraudRiskManagementAndPrevention from "@/components/corporate-investigations/fraud-risk-management-and-prevention";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fraud Risk Management and Prevention | Assess, Control, Monitor, Train | Venovox",
    description: "Venovox helps you prevent fraud with clear controls, data analytics, and training. We run fraud risk assessments, design controls, and set up continuous monitoring with simple reports.",
};

export default function FraudRiskManagementAndPreventionPage() {
    return (
        <>
            <FraudRiskManagementAndPrevention />
        </>
    );
}