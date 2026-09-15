import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-noir-footer border-t border-border-gold pt-24 pb-12">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-24">
          <div className="max-w-sm">
            <Link href="/" className="text-3xl font-serif font-medium text-noir-text tracking-tight flex items-center gap-4 mb-8 group w-max">
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-noir-surface border border-border-white group-hover:border-gold-primary/50 transition-colors">
                <Image
                  src="/logo.png"
                  alt="WhyMarketing Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="group-hover:text-gold-light transition-colors">WhyMarketing</span>
            </Link>
            <p className="text-[16px] text-noir-muted font-normal leading-[1.6] max-w-sm">
              Engineering growth for ambitious brands through strategic design, performance marketing, and undeniable authority.
            </p>
          </div>

          <div className="flex gap-16 md:gap-32">
            <div>
              <h4 className="text-gold-primary text-[13px] font-bold tracking-[0.12em] uppercase mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-noir-text-sec hover:text-gold-light transition-colors text-[15px] font-semibold tracking-[0.02em]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold-primary text-[13px] font-bold tracking-[0.12em] uppercase mb-8">Socials</h4>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-noir-text-sec hover:text-gold-light transition-colors text-[15px] font-semibold tracking-[0.02em]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border-white flex flex-col md:flex-row justify-between items-center gap-4 text-[15px] text-noir-muted font-normal tracking-[0.02em]">
          <p>© {new Date().getFullYear()} WhyMarketing. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-gold-light transition-colors font-semibold">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-light transition-colors font-semibold">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
