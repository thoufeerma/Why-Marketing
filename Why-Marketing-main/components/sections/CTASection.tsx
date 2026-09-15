import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="contact" className="py-24 md:py-32 min-h-0 md:min-h-[100svh] flex items-center bg-noir-bg relative overflow-hidden border-t border-border-white w-full">
      <Container>
        <div className="bg-noir-card border border-border-white rounded-3xl p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
          
          <FadeIn className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] font-serif font-medium text-noir-text tracking-tight mb-8 leading-none">
              Ready to Build a Brand <br className="hidden md:block" />
              <span className="italic">People Remember?</span>
            </h2>
            
            <p className="text-[18px] text-noir-muted font-normal leading-[1.7] -tracking-[0.01em] mb-16 max-w-2xl mx-auto">
              Partner with WhyMarketing to engineer a comprehensive growth strategy that transforms your brand and accelerates revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/#hero"
                className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary tracking-wide bg-gold-primary text-noir-bg hover:bg-gold-light hover:-translate-y-[2px] hover:shadow-lg hover:shadow-gold-primary/20 active:translate-y-0 active:shadow-sm h-14 px-12 py-3 text-[16px] w-full sm:w-auto"
              >
                Start Free Audit
              </Link>
              <Link 
                href="mailto:hello@whymarketing.com"
                className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary tracking-wide bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary/5 hover:-translate-y-[2px] active:translate-y-0 h-14 px-12 py-3 text-[16px] w-full sm:w-auto"
              >
                Book Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
