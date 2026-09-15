import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote: "WhyMarketing completely restructured our digital presence. We saw a 300% increase in qualified leads within the first quarter. Their strategic clarity is unmatched.",
    name: "Sarah Jenkins",
    role: "Chief Marketing Officer",
    company: "Apex Financial",
  },
  {
    quote: "Working with them doesn't feel like an agency relationship. They operate like our in-house growth team, relentlessly pursuing better margins and stronger branding.",
    name: "David Chen",
    role: "Founder & CEO",
    company: "Lumina Health",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 min-h-0 md:min-h-[90svh] flex items-center bg-noir-bg relative w-full">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="flex flex-col justify-between h-full">
                <p className="text-[1.5rem] md:text-[1.875rem] font-serif font-medium leading-[1.4] mb-12 text-noir-text tracking-tight">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-border-gold pt-8 mt-auto">
                  <p className="text-[16px] font-semibold tracking-[0.02em] uppercase mb-2 text-noir-text-sec">
                    {testimonial.name}
                  </p>
                  <p className="text-[16px] text-noir-muted font-normal">
                    {testimonial.role}, <span className="text-gold-primary">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
