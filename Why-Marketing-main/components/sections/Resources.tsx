import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const articles = [
  "SEO Playbook",
  "CRO Blueprint",
  "Brand Identity Guide",
  "Paid Ads Formula",
  "Lifecycle Marketing",
  "Organic Growth Guide"
];

export function Resources() {
  return (
    <section id="resources" className="py-24 md:py-32 min-h-0 md:min-h-[90svh] flex items-center bg-noir-bg relative border-t border-border-white w-full">
      <Container>
        <FadeIn>
          <SectionHeading 
            label="Intellectual Capital"
            title="Insights & Playbooks" 
            subtitle="Tactical frameworks and strategic thinking from our team."
          />
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link 
                href="#"
                className="group flex items-center justify-between p-10 border border-border-white bg-transparent hover:bg-[#111111] hover:-translate-y-[2px] transition-all duration-300 shadow-none hover:shadow-xl hover:border-[rgba(212,175,55,0.3)] h-full"
              >
                <h4 className="text-[22px] font-sans font-semibold text-noir-text group-hover:text-gold-light tracking-tight transition-colors duration-300">
                  {article}
                </h4>
                <div className="w-10 h-10 rounded-full flex shrink-0 items-center justify-center bg-transparent border border-border-white group-hover:border-gold-primary text-noir-muted group-hover:text-gold-primary transition-all duration-300 ml-4">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
