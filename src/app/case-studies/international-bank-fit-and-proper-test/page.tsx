import InternationalBankFitAndProper from "@/components/CaseStudies/InternationalBankFitAndProper";
import { Metadata } from "next";
import {
    OrganizationSchema,
    WebPageSchema,
} from "@/components/Schema";

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Employee Background Screening for International Bank in Malaysia",
    description: "Learn how Venovox helped a global bank in Malaysia ensure compliance with Bank Negara's fit and proper test through enhanced employee background screening.",
    alternates: {
        canonical: "https://venovox.com/case-studies/international-bank-fit-and-proper-test"
    }
};

export default function InternationalBankFitAndProperPage() {
    return (
        <>
            <OrganizationSchema />
            <WebPageSchema
                name="Employee Background Screening for International Bank in Malaysia"
                description="Learn how Venovox helped a global bank in Malaysia ensure compliance with Bank Negara's fit and proper test through enhanced employee background screening."
                url="/case-studies/international-bank-fit-and-proper-test"
                baseUrl={BASE_URL}
            />
            <InternationalBankFitAndProper />
        </>
    );
}

