import AirlineMassScreening from "@/components/CaseStudies/AirlineMassScreening";
import { Metadata } from "next";
import {
    OrganizationSchema,
    WebPageSchema,
} from "@/components/Schema";

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Mass Employee Screening for Airlines in Malaysia | Venovox",
    description: "Venovox Malaysia supported a national airline with large-scale employee background screening, ensuring full compliance and risk management during its recruitment drive.",
    alternates: {
        canonical: "https://venovox.com/case-studies/airline-mass-screening"
    }
};

export default function AirlineMassScreeningPage() {
    return (
        <>
            <OrganizationSchema />
            <WebPageSchema
                name="Mass Employee Screening for Airlines in Malaysia | Venovox"
                description="Venovox Malaysia supported a national airline with large-scale employee background screening, ensuring full compliance and risk management during its recruitment drive."
                url="/case-studies/airline-mass-screening"
                baseUrl={BASE_URL}
            />
            <AirlineMassScreening />
        </>
    );
}

