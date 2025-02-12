import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { navigationItems } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  Users,
  Clock,
  Target,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { JSX } from "react";

interface Achievement {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Value {
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Years Experience",
    value: "20+",
    icon: Clock,
  },
  {
    title: "Expert Technicians",
    value: "50+",
    icon: Users,
  },
  {
    title: "Awards Won",
    value: "100+",
    icon: Trophy,
  },
  {
    title: "Projects Done",
    value: "1000+",
    icon: Target,
  },
];

const values: Value[] = [
  {
    title: "Customer First",
    description:
      "We prioritize our customers' needs and satisfaction above all else.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every repair and service we provide.",
  },
  {
    title: "Innovation",
    description:
      "We stay updated with the latest technology and repair techniques.",
  },
  {
    title: "Integrity",
    description: "We conduct our business with honesty and transparency.",
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <TopBar />
      <MainNav navigationItems={navigationItems} />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z318Ayp4lpTfZoYM9300sxjrehyfPm.png"
          alt="About Us Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About Us
            </h1>
            <div className="flex items-center gap-2 text-gray-300">
              <Link href="/" className="hover:text-[#fdb813] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#fdb813]">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-31SKj5FtTKwf4d9gOkGtlxhVLszREP.png"
                    alt="Our workshop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-31SKj5FtTKwf4d9gOkGtlxhVLszREP.png"
                    alt="Our team at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -z-10 w-72 h-72 bg-gray-100 rounded-full -bottom-12 -left-12" />
              <div className="absolute -z-10 w-48 h-48 border-2 border-[#fdb813] rounded-full top-12 -right-8" />
            </div>
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-[#fdb813] text-xl font-medium">
                  Welcome to CM-REPAIR
                </h2>
                <div className="mt-1 flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-[#fdb813]" />
                  <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                We Are The Leading Mobile And Computer Repair Center
              </h3>
              <p className="text-gray-600">
                Founded in 2003, CM-REPAIR has been at the forefront of mobile
                and computer repair services. Our commitment to excellence and
                customer satisfaction has made us the trusted choice for all
                electronic repair needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#fdb813] mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Expert Technicians</h4>
                    <p className="text-gray-600 text-sm">
                      Our team consists of certified professionals with years of
                      experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#fdb813] mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Quick Service</h4>
                    <p className="text-gray-600 text-sm">
                      We understand the importance of time and deliver quick
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#fdb813] hover:bg-[#fdb813]/90 text-white">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0a0f1c]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-0 bg-white/5 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#fdb813]/10 flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-[#fdb813]" />
                  </div>
                  <h3 className="text-4xl font-bold text-white">
                    {achievement.value}
                  </h3>
                  <p className="text-gray-400">{achievement.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-block">
              <h2 className="text-[#fdb813] text-xl font-medium">
                Our Core Values
              </h2>
              <div className="mt-1 flex items-center gap-2 justify-center">
                <div className="w-8 h-0.5 bg-[#fdb813]" />
                <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              The Principles That Guide Our Work
            </h3>
            <p className="text-gray-600">
              Our values define who we are and how we serve our customers. They
              are the foundation of our commitment to excellence in mobile and
              computer repair services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#fdb813]/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#fdb813]" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-6">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gmPbIYVT69ToTbz52NwXP3XAtA6vVN.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <h2 className="text-[#fdb813] text-xl font-medium">
                Our Mission
              </h2>
              <div className="mt-1 flex items-center gap-2 justify-center">
                <div className="w-8 h-0.5 bg-[#fdb813]" />
                <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Empowering Technology Through Expert Care
            </h3>
            <p className="text-gray-300 text-lg">
              Our mission is to provide the highest quality repair services
              while ensuring customer satisfaction through professional
              excellence and integrity. We strive to be the most trusted name in
              mobile and computer repairs.
            </p>
            <Button className="bg-[#fdb813] hover:bg-[#fdb813]/90 text-white">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
