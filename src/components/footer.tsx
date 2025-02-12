import Link from "next/link";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JSX } from "react";

interface QuickLink {
  label: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer(): JSX.Element {
  return (
    <footer className="bg-[#0a0f1c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-[#fdb813]">CM-</span>REPAIR
              </div>
            </Link>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#fdb813] hover:text-[#fdb813] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#fdb813] hover:text-[#fdb813] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#fdb813] hover:text-[#fdb813] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
              <div className="w-12 h-0.5 bg-[#fdb813]" />
            </div>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#fdb813] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
              <div className="w-12 h-0.5 bg-[#fdb813]" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#fdb813]" />
                <span>Find A Location</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-[#fdb813]" />
                  <span>Call Us : +927-189-095</span>
                </div>
                <div className="pl-8 text-gray-400">+992-899-297</div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#fdb813]" />
                <span>info@Services.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              Copyright © 2022. All Rights Reserved By{" "}
              <Link href="/" className="text-[#fdb813] hover:text-[#fdb813]/90">
                CM-Repair
              </Link>
            </p>
            <div className="flex gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
