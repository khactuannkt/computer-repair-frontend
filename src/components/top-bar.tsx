import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import type { SocialLink, ContactInfo } from "@/types";
import { JSX } from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export function TopBar(): JSX.Element {
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

  return (
    <div className="bg-[#0a0f1c] text-white py-3 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <span className="text-sm">Theo dõi chúng tôi trên :</span>
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
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <Link
            href={contactInfo.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#fdb813] transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Địa chỉ: {contactInfo.location}
          </Link>
          <Link
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 hover:text-[#fdb813] transition-colors"
          >
            {contactInfo.email}
          </Link>
          <Link
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 hover:text-[#fdb813] transition-colors"
          >
            <Phone className="w-4 h-4" />
            Hotline : {contactInfo.phone}
          </Link>
        </div>
      </div>
    </div>
  );
}
