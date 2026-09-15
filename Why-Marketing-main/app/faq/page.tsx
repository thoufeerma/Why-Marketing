import { getFAQs, getFaqCategories } from "@/lib/wordpress";
import { FaqClient } from "./FaqClient";

export const metadata = {
  title: "FAQ | WhyMarketing",
  description: "Frequently asked questions about working with WhyMarketing.",
};

export default async function FaqPage() {
  const faqs = await getFAQs();
  const categories = await getFaqCategories();
  
  if (!faqs || faqs.length === 0) {
    return (
      <div className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-serif text-noir-text mb-6">FAQ</h1>
        <p className="text-noir-text-sec text-lg">No FAQs are available at this time.</p>
      </div>
    );
  }

  return <FaqClient faqs={faqs} categories={categories} />;
}
