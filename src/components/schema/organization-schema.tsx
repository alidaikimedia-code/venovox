import Script from "next/script";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  contactPoint?: {
    telephone?: string;
    contactType?: string;
    email?: string;
  };
}

export function OrganizationSchema({
  name = "Venovox",
  url = "https://venovox.com",
  logo = "https://venovox.com/logo.png",
  contactPoint,
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
    },
    ...(contactPoint && {
      contactPoint: {
        "@type": "ContactPoint",
        telephone: contactPoint.telephone || "+60-3-XXXX-XXXX",
        contactType: contactPoint.contactType || "Customer Service",
        email: contactPoint.email || "info@venovox.com",
      },
    }),
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
