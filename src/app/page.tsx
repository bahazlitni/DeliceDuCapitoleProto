import { AppPromoSection } from "@/sections/AppPromoSection";
import HeroSection from "@/sections/HeroSection";
import { LocationMapSection } from "@/sections/LocationMapSection";
import { MenuByMeatSection } from "@/sections/MenuByMeatSection";
import { MenuCategoriesSection } from "@/sections/MenuCategoriesSection";
import { NewsletterSection } from "@/sections/NewsLetterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MenuByMeatSection />
      <MenuCategoriesSection />
      <AppPromoSection />
      <NewsletterSection />
      <LocationMapSection />
    </>
  );
}
