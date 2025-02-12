import type React from "react";

export interface BrandInfo {
  name: string;
  logo: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "twitter" | "facebook" | "linkedin";
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  locationUrl: string;
}

export interface HeroContent {
  title: string;
  slogan: string;
  description: string;
  backgroundImage: string;
}

export interface AboutUsContent {
  title: string;
  description: string;
  imageFirst: string;
  imageSecond: string;
}
