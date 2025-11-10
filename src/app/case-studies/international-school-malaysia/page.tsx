import InternationalSchoolMalaysia from "@/components/CaseStudies/InternationalSchoolMalaysia";
import { Metadata } from "next";
import {
    OrganizationSchema,
    WebPageSchema,
} from "@/components/Schema";

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Pre Employment Screening for International School in Kuala Lumpur",
    description: "How Venovox helped a leading international school in Kuala Lumpur prevent a potential safety risk through pre employment screening and secure a trusted learning environment.",
    alternates: {
        canonical: "https://venovox.com/case-studies/international-school-malaysia"
    }
};

export default function InternationalSchoolMalaysiaPage() {
    return (
        <>
            <OrganizationSchema />
            <WebPageSchema
                name="Pre Employment Screening for International School in Kuala Lumpur"
                description="How Venovox helped a leading international school in Kuala Lumpur prevent a potential safety risk through pre employment screening and secure a trusted learning environment."
                url="/case-studies/international-school-malaysia"
                baseUrl={BASE_URL}
            />
            <InternationalSchoolMalaysia />
        </>
    );
}

