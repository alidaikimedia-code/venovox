import BrandAndIpInvestigations from "@/components/corporate-investigations/brand-and-ip-investigations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brand and IP Investigations | Counterfeit, Grey Market, Test Buys, Takedowns | Venovox",
    description: "Venovox investigates counterfeit and grey market activity. We run test buys, trace supply chains, and support online takedowns and court actions with clear evidence.",
    keywords: "brand and IP investigations, counterfeit investigations, grey market investigations, supply chain leak tracing, test buys, online takedowns, marketplace removals, domain disputes, trade secret investigations, customs recordation, brand protection program",
};

export default function BrandAndIpInvestigationsPage() {
    return (
        <>
            <BrandAndIpInvestigations />
        </>
    );
}