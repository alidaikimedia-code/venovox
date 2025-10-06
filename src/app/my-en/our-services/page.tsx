import type { Metadata } from "next"
import OurServicesClient from "./OurServicesClient"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://venovox.com/my-en/our-services",
  },
}

export default function Page() {
  return <OurServicesClient />
}