import Image from "next/image";
import { Heart, RefreshCw, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  image: string;
}

export function ProductCard({
  title,
  price,
  rating,
  image,
}: ProductCardProps): JSX.Element {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-4">
        <div className="relative h-48 mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-3">
          <h4 className="font-bold text-lg">{title}</h4>
          <div className="flex text-[#fdb813]">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < rating
                    ? "fill-current"
                    : "stroke-current fill-none opacity-40"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
          <p className="text-xl font-bold">${price.toFixed(2)}</p>
          <div className="flex items-center justify-between pt-2">
            <Button
              variant="default"
              className="bg-[#fdb813] hover:bg-[#fdb813]/90 text-white"
            >
              Add To Card
            </Button>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#fdb813]"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#fdb813]"
              >
                <RefreshCw className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#fdb813]"
              >
                <Eye className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
