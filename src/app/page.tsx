import React, { JSX } from "react";
import { TopBar } from "@/components/top-bar";
import { MainNav } from "@/components/main-nav";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ExploreServices } from "@/components/explore-services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ProductsSection } from "@/components/products-section";
import { TeamSection } from "@/components/team-section";
import { navigationItems } from "@/config/navigation";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <TopBar />
      <MainNav navigationItems={navigationItems} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExploreServices />
      <WhyChooseUs />
      <ProductsSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
