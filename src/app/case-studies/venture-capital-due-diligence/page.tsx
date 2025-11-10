import VentureCapitalDueDiligence from "@/components/CaseStudies/VentureCapitalDueDiligence";
import { Metadata } from "next";
import {
    OrganizationSchema,
    WebPageSchema,
} from "@/components/Schema";

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Corporate Due Diligence and Investigation for Venture Capital in Malaysia",
    description: "Venovox Malaysia conducted an in-depth due diligence and corporate investigation in Malaysia to help a venture capital firm make an informed M&A decision.",
    alternates: {
        canonical: "https://venovox.com/case-studies/venture-capital-due-diligence"
    }
};

export default function VentureCapitalDueDiligencePage() {
    return (
        <>
            <OrganizationSchema />
            <WebPageSchema
                name="Corporate Due Diligence and Investigation for Venture Capital in Malaysia"
                description="Venovox Malaysia conducted an in-depth due diligence and corporate investigation in Malaysia to help a venture capital firm make an informed M&A decision."
                url="/case-studies/venture-capital-due-diligence"
                baseUrl={BASE_URL}
            />
            <VentureCapitalDueDiligence />
        </>
    );
}

