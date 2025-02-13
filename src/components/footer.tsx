import Link from "next/link";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { JSX } from "react";
import { BrandInfo, ContactInfo, SocialLink } from "@/types";
import { navigationItems } from "@/config/navigation";

export function Footer(): JSX.Element {
  //TODO: Get contact info from the API
  const contactInfo: ContactInfo = {
    email: "laptopsun.vn@gmail.com",
    phone: "0857 270 270",
    locationUrl: "https://maps.app.goo.gl/rDudjsszuEuZHsM5A",
    location: "995 CMT8, Phường 7, Quận Tân Bình, TP.HCM",
  };

  //TODO: Get social links from the API
  const socialLinks: SocialLink[] = [
    { platform: "twitter", href: "#", icon: Twitter },
    {
      platform: "facebook",
      href: "https://www.facebook.com/profile.php?id=61563907542801",
      icon: Facebook,
    },
    { platform: "linkedin", href: "#", icon: Linkedin },
  ];

  const brandInfo: BrandInfo = {
    name: "LaptopSun",
    logo: "/logo.png",
    shortDescription: "Your one-stop solution for all laptop repairs.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  return (
    <footer className="bg-[#0a0f1c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-[#fdb813]">{brandInfo.name}</span>
              </div>
            </Link>
            <p className="text-gray-400">{brandInfo.description}</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fdb813] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Truy Cập Nhanh</h2>
              <div className="w-12 h-0.5 bg-[#fdb813]" />
            </div>
            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-400 hover:text-[#fdb813] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Liên Hệ</h2>
              <div className="w-12 h-0.5 bg-[#fdb813]" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#fdb813]" />
                <span>Địa chỉ: {contactInfo.location}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-[#fdb813]" />
                  <span>Hotline: {contactInfo.phone}</span>
                </div>
                {/* <div className="pl-8 text-gray-400">{contactInfo.phone}</div> */}
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#fdb813]" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
              <div className="w-12 h-0.5 bg-[#fdb813]" />
            </div>
            <p className="text-gray-400">
              Signup our newsletter to get update information, news & insight
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-gray-600 focus:border-[#fdb813] text-white"
              />
              <Button className="w-full bg-[#fdb813] hover:bg-[#fdb813]/90 text-white">
                Submit Now
              </Button>
            </form>
          </div>*/}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              Copyright © 2025. All Rights Reserved By{" "}
              <Link href="/" className="text-[#fdb813] hover:text-[#fdb813]/90">
                LaptopSun.vn
              </Link>
            </p>
            {/* <div className="flex gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#fdb813] transition-colors"
              >
                Get Support
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#fdb813] transition-colors"
              >
                Our Plugins
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#fdb813] transition-colors"
              >
                Our Themes
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
