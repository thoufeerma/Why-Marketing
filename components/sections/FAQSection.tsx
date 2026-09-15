import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { getFAQs } from "@/lib/wordpress";
import Link from "next/link";

export async function FAQSection() {
  const faqs = await getFAQs();
  
  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Display only the top 5 FAQs on the homepage
  const displayFaqs = faqs.slice(0, 5);

  return (
    <section className="py-24 bg-noir-bg border-t border-[rgba(212,175,55,0.1)]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <FadeIn className="w-full lg:w-1/3 shrink-0">
            <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-4 block">
              FAQ
            </span>
            <h2 className="text-[3rem] md:text-[3.5rem] font-serif font-medium text-noir-text tracking-tight leading-none mb-6">
              Common Questions.
            </h2>
            <p className="text-[17px] text-noir-muted font-normal leading-[1.6] mb-8 max-w-sm">
              Before we start working together, here are answers to the questions we hear most often.
            </p>
            <Link 
              href="/faq"
              className="inline-flex items-center justify-center px-6 py-3 text-[13px] font-bold tracking-wide text-noir-text border border-[rgba(212,175,55,0.3)] rounded-full hover:bg-gold-primary hover:text-noir-bg transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0"
            >
              View All FAQs
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="left" className="w-full lg:w-2/3">
            <FAQAccordion faqs={displayFaqs} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
