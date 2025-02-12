import type React from "react";
import Image from "next/image";
import { Smartphone, FileText, Monitor, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { JSX } from "react";

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

const services: ServiceCard[] = [
  {
    title: "Mobile Repair",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
    icon: Smartphone,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eG8A3lXQiCyQmy6S7TKWOlEGRSLTtq.png",
  },
  {
    title: "Data Recovery",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
    icon: FileText,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eG8A3lXQiCyQmy6S7TKWOlEGRSLTtq.png",
  },
  {
    title: "PC Computer Repair",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
    icon: Monitor,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eG8A3lXQiCyQmy6S7TKWOlEGRSLTtq.png",
  },
  {
    title: "Laptop Repair",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
    icon: Laptop,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eG8A3lXQiCyQmy6S7TKWOlEGRSLTtq.png",
  },
];

export function ExploreServices(): JSX.Element {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block">
            <h2 className="text-[#fdb813] text-xl font-medium">
              Dịch Vụ Sửa Chữa Của chúng Tôi
            </h2>
            <div className="mt-1 flex items-center gap-2 justify-center">
              <div className="w-8 h-0.5 bg-[#fdb813]" />
              <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Khám phá dịch vụ sửa chữa của Chúng Tôi
          </h3>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4"
              >
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <service.icon className="w-8 h-8 text-[#fdb813]" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-12 pb-6 px-6 text-center">
                    <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="text-[#fdb813] font-medium hover:text-[#fdb813]/80 transition-colors">
                      Xem thêm
                    </button>
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
