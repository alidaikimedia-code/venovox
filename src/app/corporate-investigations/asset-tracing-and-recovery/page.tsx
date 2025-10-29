import AssetTracingAndRecovery from "@/components/corporate-investigations/asset-tracing-and-recovery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Asset Tracing and Recovery | Cross Border Tracing, Enforcement, Offshore Structures | Venovox",
    description: "Venovox traces assets across borders and through complex structures. We support freezing steps, receiverships, and enforcement with clear evidence and practical action plans.",
};

export default function AssetTracingAndRecoveryPage() {
    return (
        <>
        
            <AssetTracingAndRecovery />
        </>
    );
}