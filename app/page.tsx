import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServiceCardsSection } from "@/components/sections/ServiceCardsSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { CaseStudies } from "@/components/sections/CaseStudies";

import { Testimonials } from "@/components/sections/Testimonials";
import { Resources } from "@/components/sections/Resources";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

import { getHomePageData } from "@/lib/wordpress";

export default async function Home() {
  // Fetch ACF data from WordPress for the Home page (ID: 23)
  const pageData = await getHomePageData(23);

  return (
    <>
      <HeroSection data={pageData} />
      <ChallengesSection />
      <TrustSection />
      <ServicesSection />
      <ServiceCardsSection />
      <ProcessTimeline />
      <WhyChooseUs />
      <Industries />
      <CaseStudies />

      <Testimonials />
      <Resources />
      <LeadershipSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
