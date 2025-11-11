import LogisticsDriverScreening from "@/components/CaseStudies/LogisticsDriverScreening";
import { Metadata } from "next";
import {
    OrganizationSchema,
    WebPageSchema,
} from "@/components/Schema";

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Driver Background Screening for Logistics Company in Malaysia",
    description: "How Venovox Malaysia helped a logistics company improve safety and reliability through driver background screening and risk verification services.",
    alternates: {
        canonical: "https://venovox.com/case-studies/logistics-driver-screening"
    }
};

export default function LogisticsDriverScreeningPage() {
    return (
        <>
            <OrganizationSchema />
            <WebPageSchema
                name="Driver Background Screening for Logistics Company in Malaysia"
                description="How Venovox Malaysia helped a logistics company improve safety and reliability through driver background screening and risk verification services."
                url="/case-studies/logistics-driver-screening"
                baseUrl={BASE_URL}
            />
            <LogisticsDriverScreening />
        </>
    );
}

