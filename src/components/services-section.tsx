import { Wrench, Headphones, Clock } from "lucide-react";
import type React from "react"; // Added import for React
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { JSX } from "react";

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: ServiceCard[] = [
  {
    title: "On-Site Support",
    description:
      "It is a long established fact that a reader will be distracted",
    icon: Wrench,
  },
  {
    title: "Remote Support",
    description:
      "It is a long established fact that a reader will be distracted",
    icon: Headphones,
  },
  {
    title: "Fast Service",
    description:
      "It is a long established fact that a reader will be distracted",
    icon: Clock,
  },
  {
    title: "Fast Service",
    description:
      "It is a long established fact that a reader will be distracted",
    icon: Clock,
  },
];

export function ServicesSection(): JSX.Element {
  return (
    <section className="relative py-16 px-4 md:px-6">
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rz7fNy1hpCfcpqtQQ5SnuradyyZgV7.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div> */}

      <div className="container mx-auto relative">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block">
            <h2 className="text-[#fdb813] text-xl font-medium">
              Dịch Vụ Chăm Sóc Khách Hàng
            </h2>
            <div className="mt-1 flex items-center gap-2 justify-center">
              <div className="w-8 h-0.5 bg-[#fdb813]" />
              <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Đây là cách chúng tôi có thể giúp bạn
          </h3>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card
                  className={`border-0 ${
                    index === 1 ? "bg-[#fdb813]" : "bg-white"
                  }`}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="flex justify-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          index === 1 ? "bg-white" : "bg-[#fdb813]/10"
                        }`}
                      >
                        <service.icon
                          className={`w-8 h-8 ${
                            index === 1 ? "text-[#fdb813]" : "text-[#fdb813]"
                          }`}
                        />
                      </div>
                    </div>
                    <h4
                      className={`text-xl font-semibold ${
                        index === 1 ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h4>
                    <p
                      className={
                        index === 1 ? "text-white/90" : "text-gray-600"
                      }
                    >
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
