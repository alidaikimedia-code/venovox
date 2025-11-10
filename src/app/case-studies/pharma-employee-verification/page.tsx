import PharmaEmployeeVerification from "@/components/CaseStudies/PharmaEmployeeVerification";
import { Metadata } from "next";
import {
    OrganizationSchema,
    WebPageSchema,
} from "@/components/Schema";

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Executive Background Screening for Healthcare Company in Malaysia | Venovox",
    description: "Venovox Malaysia helped a pharmaceutical company strengthen compliance and HR services through executive background screening and verification.",
    alternates: {
        canonical: "https://venovox.com/case-studies/pharma-employee-verification"
    }
};

export default function PharmaEmployeeVerificationPage() {
    return (
        <>
            <OrganizationSchema />
            <WebPageSchema
                name="Executive Background Screening for Healthcare Company in Malaysia | Venovox"
                description="Venovox Malaysia helped a pharmaceutical company strengthen compliance and HR services through executive background screening and verification."
                url="/case-studies/pharma-employee-verification"
                baseUrl={BASE_URL}
            />
            <PharmaEmployeeVerification />
        </>
    );
}

