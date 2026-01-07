import { notFound } from "next/navigation";
import { companiesData } from "@/data/companiesData";
import CompanyContent from "@/components/companies/CompanyContent";
import CompanyHeader from "@/components/companies/CompanyHeader";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://venovox.com';

interface CompanyPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return companiesData.map((company) => ({
        slug: company.slug,
    }));
}

export async function generateMetadata({ params }: CompanyPageProps) {
    const { slug } = await params;
    const company = companiesData.find((c) => c.slug === slug);
    if (!company) return {};

    const canonicalUrl = `${BASE_URL}/companies/${slug}`;

    return {
        title: company.seo.metaTitle,
        description: company.seo.metaDescription,
        keywords: company.seo.keywords.join(", "),
        alternates: {
            canonical: canonicalUrl
        },
    };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
    const { slug } = await params;
    const company = companiesData.find((c) => c.slug === slug);

    if (!company) return notFound();

    return (
        <div className="bg-white">
            {/* Header Section */}
            <CompanyHeader company={company} />

            {/* Simple Content Section - No Tabs */}
            <CompanyContent company={company} />
        </div>
    );
}

