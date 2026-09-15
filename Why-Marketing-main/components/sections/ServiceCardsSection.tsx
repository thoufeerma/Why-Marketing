import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "Social Media Management",
    subtitle: "Strategy, Advertising, Planning",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing",
    subtitle: "SEO, Content Marketing, SMM",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Branding and Advertising",
    subtitle: "Company, Product, Personal",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Events",
    subtitle: "Infrastructure, Audience, Organizers",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Websites",
    subtitle: "Ecommerce, Portfolio, Blog",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "E-commerce",
    subtitle: "Business, Consumer, Products",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Technology Solutions",
    subtitle: "Technology solution",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Creative Solutions",
    subtitle: "Company",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
  },
];

export function ServiceCardsSection() {
  return (
    <section id="services" className="py-24 bg-noir-bg">
      <Container>
        {/* Editorial Header */}
        <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-4 block">
            Comprehensive Solutions
          </span>
          <h2 className="text-[3rem] md:text-[3.75rem] font-serif font-medium text-noir-text tracking-tight leading-none mb-6">
            Everything You Need to Succeed.
          </h2>
          <p className="text-[17px] text-noir-muted font-normal leading-[1.6]">
            From foundational branding to advanced technology systems, explore our full spectrum of services designed to accelerate your growth.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {cards.map((card, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div 
                className="group flex flex-col h-full bg-[#111111] rounded-[16px] md:rounded-[24px] overflow-hidden border border-[rgba(212,175,55,0.12)] hover:border-gold-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-primary/5"
              >
              <div className="relative w-full aspect-[4/3] bg-[#1a1a1a] overflow-hidden flex items-center justify-center">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              </div>
              
              {/* Content area */}
              <div className="p-3 md:p-6 flex flex-col flex-grow">
                <h3 className="text-[13px] sm:text-[15px] md:text-[17px] font-sans font-bold text-noir-text mb-1 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[9px] sm:text-[11px] md:text-[12px] text-noir-muted font-medium mb-3 md:mb-6 flex-grow leading-[1.4] md:leading-relaxed uppercase tracking-wider">
                  {card.subtitle}
                </p>
                
                <div className="flex flex-col xl:flex-row items-center justify-between mt-auto pt-3 md:pt-4 border-t border-[rgba(212,175,55,0.08)] gap-2">
                  <a 
                    href="#contact" 
                    className="inline-flex w-full xl:w-auto items-center justify-center px-2 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[12px] font-bold tracking-wide text-noir-text border border-gold-primary/30 rounded-full hover:bg-gold-primary hover:text-noir-bg transition-colors"
                  >
                    Whatsapp Now
                  </a>
                  <a 
                    href="#contact"
                    className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-[#1a1a1a] border border-gold-primary/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                    aria-label="Whatsapp Now"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
