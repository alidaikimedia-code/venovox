import ServicePageClient from "./ServicePageClient";
import servicesData from "@/data/our-services.json";

<<<<<<< HEAD
=======

>>>>>>> bd34bc7a51aa3cfa4c4dd1fa6220c6c2df04c133
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
<<<<<<< HEAD

=======
    
>>>>>>> bd34bc7a51aa3cfa4c4dd1fa6220c6c2df04c133
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
    console.log("***************", slug);
    return <ServicePageClient slug={slug} />;
}
