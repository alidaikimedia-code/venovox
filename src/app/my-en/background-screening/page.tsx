import type { Metadata } from 'next';
import BackgroundScreeningClient from '../background-screening/BackgroundScreeningClient';
import Head from 'next/head';
export const metadata: Metadata = {
  title: "Background Screening | Venovox",
  description:
    "Learn about our journey from Texas headquarters to becoming APAC's premier risk consultancy offering security advisory and intelligence analysis.",
  alternates: {
    canonical: "https://venovox.com/my-en/background-screening",
  },
};

export default function Home() {
  <Head>
    <link rel="canonical" href="https://venovox.com/my-en/background-screening" />
  </Head>

  return <BackgroundScreeningClient />;
}