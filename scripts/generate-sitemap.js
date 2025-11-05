const fs = require('fs');
const path = require('path');

// Import the blog data
const { blogData } = require('../src/data/blogsData.ts');

// Base URL for your site
const BASE_URL = 'https://venovox.com';

// Static pages that should always be in the sitemap
const staticPages = [
  {
    url: '/',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/our-services',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/due-diligence',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/risk-audit',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/compliance',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/intellectual-property',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/counter-measures',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/financial-crime',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/hr-services',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/cyber-security',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/contact-us',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/Career',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/about',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/blogs',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/privacy/privacy-policy',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/privacy/security-policy',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/privacy/terms-and-conditions',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/privacy/whistleblowing-policy',
    lastmod: '2025-01-14T10:43:49+00:00'
  }
];

function generateSitemap() {
  console.log('Generating dynamic sitemap...');
  
  // Get current date for lastmod
  const currentDate = new Date().toISOString();
  
  // Generate blog URLs from blog data
  const blogUrls = blogData.map(blog => ({
    url: `/blogs/${blog.slug}`,
    lastmod: blog.publishDate ? new Date(blog.publishDate).toISOString() : currentDate
  }));
  
  // Combine static pages and blog pages
  const allPages = [...staticPages, ...blogUrls];
  
  // Generate XML sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- Generated dynamically on ${currentDate} -->`;

  allPages.forEach(page => {
    sitemap += `
<url>
  <loc>${BASE_URL}${page.url}</loc>
  <lastmod>${page.lastmod}</lastmod>
</url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log(`Sitemap generated successfully with ${allPages.length} URLs`);
  console.log(`Blog URLs included: ${blogUrls.length}`);
}

// Run the generation
generateSitemap();
