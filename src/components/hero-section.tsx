import { HeroContent } from "@/types";
import React from "react";
import { JSX } from "react";

export function HeroSection(): JSX.Element {
  const heroContent: HeroContent = {
    title: "Sửa Chữa Laptop, MacBook, Surface",
    slogan: "Đến với Chúng tôi, vấn đề của bạn sẽ được giải quyết",
    description:
      "Kỹ thuật viên sửa chữa của chúng tôi có nhiều kinh nghiệm sửa chữa các loại Laptop, Macbook, Surface và chẩn đoán đoán bệnh một cách nhanh chóng và chính xác.",
    backgroundImage: "",
  };
  return (
    <div
      className="relative min-h-[600px] flex items-center px-4 md:px-6"
      style={{
        backgroundImage: `url("${heroContent.backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl text-white space-y-6">
          <span className="text-[#fdb813] text-xl">{heroContent.title}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {heroContent.slogan}
          </h1>
          <p className="text-lg text-gray-200">{heroContent.description}</p>
          <button
            className="bg-[#fdb813] text-white px-8 py-3 rounded hover:bg-[#fdb813]/90 transition-colors"
            type="button"
          >
            Xem Dịch Vụ
          </button>
        </div>
      </div>
    </div>
  );
}
