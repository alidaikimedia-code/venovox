import ServicePageClient from "./ServicePageClient";
import servicesData from "@/data/our-services.json";

export async function generateStaticParams() {
    return servicesData.services.map((service) => ({
        slug: service.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return {
        title: "Background Screening | Venovox",
        description:
            "Learn about our journey from Texas headquarters to becoming APAC's premier risk consultancy offering security advisory and intelligence analysis.",
        alternates: {
            canonical: `https://venovox.com/my-en/background-screening/${slug}`,
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return <ServicePageClient slug={slug} />;
}
