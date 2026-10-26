import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { How } from "@/components/How";
import { Showcase } from "@/components/Showcase";
import { PhotoCta } from "@/components/PhotoCta";
import { FaqSection, FAQS } from "@/components/Faq";
import { Community, Waitlist } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/config";

export default function Home() {
  const ld = [
    { "@context": "https://schema.org", "@type": "MobileApplication", name: SITE.name, operatingSystem: "iOS", applicationCategory: "HealthApplication", description: SITE.description, url: SITE.url },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <How />
        <FaqSection />
        <Community />
        <Waitlist />
        <PhotoCta />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
