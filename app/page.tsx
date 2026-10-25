import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { How } from "@/components/How";
import { FaqSection, FAQS } from "@/components/Faq";
import { Community, Waitlist } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { AppStoreButton } from "@/components/Buttons";
import { Reveal } from "@/components/Reveal";
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
        <How />
        <FaqSection />
        <Community />
        <Waitlist />
        <section className="mx-auto max-w-4xl px-5 pb-28 text-center">
          <Reveal>
            <h2 className="font-display text-6xl font-bold italic leading-none md:text-8xl">Start your first <span className="glow-text">workout</span> today.</h2>
            <div className="mt-8 flex justify-center"><AppStoreButton /></div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
