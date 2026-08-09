import type { Metadata } from "next";
import PartnerHeader from "@/components/partner/PartnerHeader";
import PartnerHero from "@/components/partner/PartnerHero";
import PartnerAbout from "@/components/partner/PartnerAbout";
import PartnerFeatures from "@/components/partner/PartnerFeatures";
import PartnerCTA from "@/components/partner/PartnerCTA";
import PartnerFooter from "@/components/partner/PartnerFooter";

export const metadata: Metadata = {
  title: "وَهـج — الشريك الرسمي لـ Vynox Studio",
  description:
    "وَهـج هو سيرفر ديسكورد يجمع بين المجتمع والخدمات والإضافات المتنوعة، ويوفر بيئة ممتعة للتواصل والتعرف على أصدقاء جدد.",
};

export default function PartnerPage() {
  return (
    <div dir="rtl" lang="ar" className="partner-page min-h-screen overflow-x-clip">
      <PartnerHeader />
      <main>
        <PartnerHero />
        <PartnerAbout />
        <PartnerFeatures />
        <PartnerCTA />
      </main>
      <PartnerFooter />
    </div>
  );
}
