import {
  Lightbulb,
  Wrench,
  Cog,
  Award,
  HeadphonesIcon,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type React from "react"; // Added import for React
import { JSX } from "react";

interface FeatureBox {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: "dark" | "light";
}

const features: FeatureBox[] = [
  {
    title: "Skilled Personal",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: Lightbulb,
    variant: "dark",
  },
  {
    title: "Experience",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: Wrench,
    variant: "light",
  },
  {
    title: "Quality",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: Cog,
    variant: "light",
  },
  {
    title: "Genuine Part",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: Award,
    variant: "dark",
  },
];

export function WhyChooseUs(): JSX.Element {
  return (
    <section className="relative py-24 px-4 md:px-6">
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EcAGAotX0OM5LMArtt3ln41KnY7PIg.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div> */}

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[#fdb813] text-xl font-medium">
                Tại sao chọn Chúng tôi
              </h2>
              <div className="mt-1 flex items-center gap-2">
                <div className="w-8 h-0.5 bg-[#fdb813]" />
                <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              When You Need Us, We Are Here.
            </h3>

            <p className="text-gray-300 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <HeadphonesIcon className="w-8 h-8 text-[#fdb813] mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  After Sales Support
                </h4>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <ThumbsUp className="w-8 h-8 text-[#fdb813] mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Client Satisfaction
                </h4>
              </div>
            </div>

            <Button className="bg-[#fdb813] hover:bg-[#fdb813]/90 text-white px-8 py-6 rounded-md text-lg">
              Get A Quote
            </Button>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  feature.variant === "dark"
                    ? "bg-[#1e3a8a] text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <feature.icon
                  className={`w-8 h-8 mb-4 ${
                    feature.variant === "dark" ? "text-white" : "text-[#fdb813]"
                  }`}
                />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p
                  className={
                    feature.variant === "dark"
                      ? "text-gray-200"
                      : "text-gray-600"
                  }
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
