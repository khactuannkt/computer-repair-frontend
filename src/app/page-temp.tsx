import Link from "next/link";
import {
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Share2,
  ShoppingBag,
  Twitter,
} from "lucide-react";
import { AboutSection } from "../components/about-section-temp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      {/* Top Bar */}
      <div className="bg-[#0a0f1c] text-white py-3 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <span className="text-sm">Theo dõi chúng tôi :</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#fdb813] transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="hover:text-[#fdb813] transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="hover:text-[#fdb813] transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <Link
              href="https://maps.app.goo.gl/rDudjsszuEuZHsM5A"
              className="flex items-center gap-2 hover:text-[#fdb813] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Địa chỉ: 995 CMT8, Phường 7, Quận Tân Bình, TP.HCM
            </Link>
            <Link
              href="mailto:info@Services.com"
              className="flex items-center gap-2 hover:text-[#fdb813] transition-colors"
            >
              laptopsun.vn@gmail.com
            </Link>
            <Link
              href="tel:+84857270270"
              className="flex items-center gap-2 hover:text-[#fdb813] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Hotline: 0857 270 270
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white py-4 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-[#fdb813]">LaptopSun</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium hover:text-[#fdb813] transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="font-medium hover:text-[#fdb813] transition-colors"
            >
              Về Chúng Tôi
            </Link>
            <Link
              href="/services"
              className="font-medium hover:text-[#fdb813] transition-colors"
            >
              Dịch vụ
            </Link>
            <Link
              href="/pages"
              className="font-medium hover:text-[#fdb813] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="font-medium hover:text-[#fdb813] transition-colors"
            >
              Liên Hệ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-[#fdb813] transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-[#fdb813] transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative min-h-[600px] flex items-center px-4 md:px-6"
        // style={{
        //   backgroundImage:
        //     'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z318Ayp4lpTfZoYM9300sxjrehyfPm.png")',
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl text-white space-y-6">
            <span className="text-[#fdb813] text-xl">
              Sửa Chữa Laptop, MacBook, Surface
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Chúng tôi đang tìm giải pháp cho vấn đề của bạn
            </h1>
            <p className="text-lg text-gray-200">
              Kỹ thuật viên sửa chữa của chúng tôi có nhiều kinh nghiệm sửa chữa
              các loại Laptop, Macbook, Surface và chẩn đoán đoán bệnh một cách
              nhanh chóng và chính xác.
            </p>
            <button className="bg-[#fdb813] text-white px-8 py-3 rounded hover:bg-[#fdb813]/90 transition-colors">
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />
    </div>
  );
}
