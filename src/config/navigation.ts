import type { NavigationItem } from "@/types";

export const homeNavigation: NavigationItem = { label: "Trang Chủ", href: "/" };
export const aboutNavigation: NavigationItem = {
  label: "Giới Thiệu",
  href: "/about",
};
export const servicesNavigation: NavigationItem = {
  label: "Dịch Vụ",
  href: "/services",
};
export const blogNavigation: NavigationItem = { label: "Blog", href: "/blogs" };
export const contactNavigation: NavigationItem = {
  label: "Liên Hệ",
  href: "/contact",
};

export const navigationItems: NavigationItem[] = [
  homeNavigation,
  aboutNavigation,
  servicesNavigation,
  blogNavigation,
  contactNavigation,
];
