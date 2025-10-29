import WhistleblowingAndEthicsManagement from "@/components/corporate-investigations/whistleblowing-and-ethics-management";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Whistleblowing and Ethics Management | Hotline, Intake, Retaliation Safeguards | Venovox",
    description: "Venovox builds and runs whistleblowing and ethics programs with safe intake, fair investigations, and clear board reporting. We protect people and help you act with confidence.",
};

export default function WhistleblowingAndEthicsManagementPage() {
    return (
        <>
            <WhistleblowingAndEthicsManagement />
        </>
    );
}