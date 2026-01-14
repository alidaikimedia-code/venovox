import { notFound } from 'next/navigation';
import HomeClient from '@/app/HomeClient';
import AboutUs from '@/components/about/AboutUs';
import ContactUs from '@/components/ContactUs/contact-us';
import OurServicesClient from '@/app/my-en/our-services/OurServicesClient';
import BackgroundScreeningMalaysiaClient from '@/components/BackgroundscreeningMalaysia';
import ServicePageClient from '@/app/my-en/background-screening/[slug]/ServicePageClient';
import VenovoxCredibilitySection from '@/components/Career/credibilitysection';
import FunTeamSection from '@/components/Career/FunTeamSection';
import GrowWithUsSection from '@/components/Career/GrowWithUsSection';
import VenovoxHero from '@/components/Career/top-section';
import Form from '@/components/Career/submit-form';
import servicesData from '@/data/our-services.json';
import { blogData } from '@/data/blogsData';

// Map language codes to their URL prefixes
const languageMap: Record<string, string> = {
  'my-en': 'my-en',
  'ms': 'ms',
  'zh': 'zh',
  'ar': 'ar',
  'de': 'de',
  'fr': 'fr',
};

interface PageProps {
  params: Promise<{
    lang: string;
    slug?: string[];
  }>;
}

// Case study slugs
const caseStudySlugs = [
  'airline-mass-screening',
  'international-bank-fit-and-proper-test',
  'international-school-malaysia',
  'logistics-driver-screening',
  'pharma-employee-verification',
  'venture-capital-due-diligence',
];

// Corporate investigation slugs
const corporateInvestigationSlugs = [
  'workplace-misconduct-investigations',
  'asset-tracing-and-recovery',
  'regulatory-and-compliance-investigations',
  'digital-forensics-and-incident-investigations',
  'whistleblowing-and-ethics-management',
  'brand-and-ip-investigations',
  'fraud-risk-management-and-prevention',
];

export async function generateStaticParams() {
  const languages = ['my-en', 'ms', 'zh', 'ar', 'de', 'fr'];
  const params: Array<{ lang: string; slug?: string[] }> = [];

  // Generate params for root/home pages
  languages.forEach(lang => {
    params.push({ lang, slug: [] });
    
    // Generate params for main pages
    params.push({ lang, slug: ['about'] });
    params.push({ lang, slug: ['contact-us'] });
    params.push({ lang, slug: ['career'] });
    params.push({ lang, slug: ['our-services'] });
    params.push({ lang, slug: ['background-screening'] });
    params.push({ lang, slug: ['blogs'] });
    params.push({ lang, slug: ['case-studies'] });
    params.push({ lang, slug: ['corporate-investigations'] });
    // Companies pages are gitignored, so removed from static params

    // Generate params for our-services subpages
    servicesData.services.forEach(service => {
      params.push({ lang, slug: ['our-services', service.id] });
    });

    // Generate params for background-screening subpages (for backward compatibility)
    servicesData.services.forEach(service => {
      params.push({ lang, slug: ['background-screening', service.id] });
    });

    // Generate params for blog pages
    blogData.forEach(blog => {
      params.push({ lang, slug: ['blogs', blog.slug] });
    });

    // Generate params for case study pages
    caseStudySlugs.forEach(slug => {
      params.push({ lang, slug: ['case-studies', slug] });
    });

    // Generate params for corporate investigation pages
    corporateInvestigationSlugs.forEach(slug => {
      params.push({ lang, slug: ['corporate-investigations', slug] });
    });
  });

  return params;
}

export default async function LanguagePage({ params }: PageProps) {
  const { lang, slug = [] } = await params;

  // Validate language
  if (!languageMap[lang]) {
    notFound();
  }

  const path = slug.join('/');

  // Handle root/home page
  if (path === '') {
    return <HomeClient />;
  }

  // Handle about page
  if (path === 'about') {
    return <AboutUs />;
  }

  // Handle contact-us page
  if (path === 'contact-us') {
    return <ContactUs />;
  }

  // Handle Career page
  if (path === 'career') {
    return (
      <>
        <VenovoxHero />
        <VenovoxCredibilitySection />
        <GrowWithUsSection />
        <FunTeamSection />
        <Form />
      </>
    );
  }

  // Handle our-services page
  if (path === 'our-services') {
    return <OurServicesClient />;
  }

  // Handle our-services/[slug] pages
  if (path.startsWith('our-services/')) {
    const serviceSlug = path.replace('our-services/', '');
    // Verify the slug exists in services data
    const serviceExists = servicesData.services.some(s => s.id === serviceSlug);
    if (serviceExists) {
      return <ServicePageClient slug={serviceSlug} />;
    }
  }

  // Handle background-screening main page
  if (path === 'background-screening') {
    return <BackgroundScreeningMalaysiaClient />;
  }

  // Handle background-screening/[slug] pages (for backward compatibility)
  if (path.startsWith('background-screening/')) {
    const serviceSlug = path.replace('background-screening/', '');
    // Verify the slug exists in services data
    const serviceExists = servicesData.services.some(s => s.id === serviceSlug);
    if (serviceExists) {
      return <ServicePageClient slug={serviceSlug} />;
    }
  }

  // Handle blogs page
  if (path === 'blogs') {
    const BlogsPage = (await import('@/app/blogs/page')).default;
    return <BlogsPage />;
  }

  // Handle blogs/[slug] pages
  if (path.startsWith('blogs/')) {
    const blogSlug = path.replace('blogs/', '');
    const blogExists = blogData.some(b => b.slug === blogSlug);
    if (blogExists) {
      const BlogPage = (await import('@/app/blogs/[slug]/page')).default;
      return <BlogPage params={Promise.resolve({ slug: blogSlug })} />;
    }
  }

  // Handle case-studies page
  if (path === 'case-studies') {
    const CaseStudiesPage = (await import('@/app/case-studies/page')).default;
    return <CaseStudiesPage />;
  }

  // Handle case-studies/[slug] pages
  if (path.startsWith('case-studies/')) {
    const caseStudySlug = path.replace('case-studies/', '');
    if (caseStudySlugs.includes(caseStudySlug)) {
      // Import the specific case study page
      try {
        const CaseStudyPage = (await import(`@/app/case-studies/${caseStudySlug}/page`)).default;
        return <CaseStudyPage />;
      } catch {
        notFound();
      }
    }
  }

  // Handle corporate-investigations page
  if (path === 'corporate-investigations') {
    const CorporateInvestigationsPage = (await import('@/app/corporate-investigations/page')).default;
    return <CorporateInvestigationsPage />;
  }

  // Handle corporate-investigations/[slug] pages
  if (path.startsWith('corporate-investigations/')) {
    const corporateSlug = path.replace('corporate-investigations/', '');
    if (corporateInvestigationSlugs.includes(corporateSlug)) {
      // Import the specific corporate investigation page
      try {
        const CorporatePage = (await import(`@/app/corporate-investigations/${corporateSlug}/page`)).default;
        return <CorporatePage />;
      } catch {
        notFound();
      }
    }
  }

  // Companies pages are gitignored, so removed from routing
  // If companies pages are needed, they should be added to the repository first

  // If no matching page found, return 404
  notFound();
}

