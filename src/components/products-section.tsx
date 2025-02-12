"use client";

import { JSX, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "Apple iMac Retina 5k",
    price: 700.0,
    rating: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HY64cC7QPf6X7PUPBt6vwE2mpMIldc.png",
    category: "Desktop",
  },
  {
    id: "2",
    title: "Intel Core i7 Gaming PC",
    price: 407.0,
    rating: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HY64cC7QPf6X7PUPBt6vwE2mpMIldc.png",
    category: "Desktop",
  },
  {
    id: "3",
    title: "Mackbook-pro-air-mini",
    price: 500.0,
    rating: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HY64cC7QPf6X7PUPBt6vwE2mpMIldc.png",
    category: "Laptop",
  },
  {
    id: "4",
    title: "iPhone X iPhone 8",
    price: 500.0,
    rating: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HY64cC7QPf6X7PUPBt6vwE2mpMIldc.png",
    category: "Mobile",
  },
];

const categories = ["All", "Desktop", "Laptop", "Mobile", "Screen Protector"];

export function ProductsSection(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter((product) =>
    activeCategory === "All" ? true : product.category === activeCategory
  );

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block">
            <h2 className="text-[#fdb813] text-xl font-medium">Our Products</h2>
            <div className="mt-1 flex items-center gap-2 justify-center">
              <div className="w-8 h-0.5 bg-[#fdb813]" />
              <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Recent Products
          </h3>
        </div>

        <Tabs
          defaultValue="All"
          className="w-full mb-8"
          onValueChange={setActiveCategory}
        >
          <TabsList className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-[#fdb813] data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {filteredProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2">
            <ChevronLeft className="w-6 h-6" />
          </CarouselPrevious>
          <CarouselNext className="right-0 translate-x-1/2">
            <ChevronRight className="w-6 h-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
