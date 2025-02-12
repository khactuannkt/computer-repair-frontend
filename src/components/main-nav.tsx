import Link from "next/link";
import { Share2, ShoppingBag } from "lucide-react";
import type { BrandInfo, NavigationItem } from "@/types";
import { JSX } from "react";

interface MainNavProps {
  navigationItems: NavigationItem[];
}

export function MainNav({ navigationItems }: MainNavProps): JSX.Element {
  // TODO: Get brand info and navigation items from API
  const brandInfo: BrandInfo = {
    name: "LaptopSun",
    logo: "/logo.png",
  };

  return (
    <header className="bg-white py-4 px-4 md:px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-[#fdb813]">{brandInfo.name}</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium hover:text-[#fdb813] transition-colors"
            >
              <b>{item.label}</b>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:text-[#fdb813] transition-colors"
            type="button"
            aria-label="Share"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <button
            className="p-2 hover:text-[#fdb813] transition-colors"
            type="button"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
