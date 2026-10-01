import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-noir-bg min-h-[calc(100vh-100px)] pt-24 pb-12 flex flex-col justify-center items-center">
      <Container className="flex-1 flex flex-col justify-center items-center py-20">
        <FadeIn className="max-w-2xl text-center">
          <h1 className="text-[3rem] md:text-[4rem] font-serif font-medium text-white mb-6">
            Let's <span className="text-gold-primary italic">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-noir-muted mb-12">
            Ready to scale your business? Get in touch with us directly or drop us a message on WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="https://wa.me/919495494275"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-noir-surface border border-gold-primary/30 hover:border-gold-primary hover:bg-gold-primary/5 px-8 py-6 rounded-[20px] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-gold-primary" />
              </div>
              <div className="text-left">
                <div className="text-[12px] font-bold text-noir-muted uppercase tracking-wider mb-1">WhatsApp</div>
                <div className="text-lg font-bold text-white group-hover:text-gold-light transition-colors">+91 94954 94275</div>
              </div>
            </Link>

            <Link 
              href="tel:+919495494275"
              className="group flex items-center gap-4 bg-noir-surface border border-border-white hover:border-white/20 px-8 py-6 rounded-[20px] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[12px] font-bold text-noir-muted uppercase tracking-wider mb-1">Call Us</div>
                <div className="text-lg font-bold text-white">+91 94954 94275</div>
              </div>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
