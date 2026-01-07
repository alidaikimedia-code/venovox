import type { Metadata } from "next";
import CompaniesClient from "@/components/companies/CompaniesClient";

export const metadata: Metadata = {
    title: "Company Profiles | Malaysia Business Directory | Venovox",
    description: "Browse comprehensive company profiles in Malaysia. Get detailed information about businesses, their operations, compliance requirements, and background screening needs.",
    keywords: [
        "company profiles Malaysia",
        "Malaysia business directory",
        "company information Malaysia",
        "business profiles",
        "company search Malaysia",
        "SSM company search",
        "Malaysia companies"
    ],
    alternates: {
        canonical: "https://venovox.com/companies"
    }
};

export default function CompaniesPage() {
    return (
        <div className="bg-white">
            <section className="relative bg-[#b30000] text-white overflow-hidden min-h-[450px]">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-6 pt-32 pb-12">
                    <div className="text-center space-y-8 py-12">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-white">Company Profiles</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Explore comprehensive profiles of companies in Malaysia. Get detailed information about businesses, their operations, and compliance requirements.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto"></div>
                    </div>
                </div>
            </section>

            <CompaniesClient />
        </div>
    );
}

