import Image from "next/image";
import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import {
  blogNavigation,
  homeNavigation,
  navigationItems,
} from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, MessageCircle, ArrowRight } from "lucide-react";
import { JSX } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Tips to Extend Your Smartphone's Battery Life",
    excerpt:
      "Discover simple yet effective ways to make your smartphone's battery last longer throughout the day.",
    date: "2023-05-15",
    author: "John Doe",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    category: "Smartphones",
    slug: "10-tips-extend-smartphone-battery-life",
  },
  {
    id: "2",
    title: "The Future of Computer Repair: AI and Machine Learning",
    excerpt:
      "Explore how artificial intelligence and machine learning are revolutionizing the computer repair industry.",
    date: "2023-05-10",
    author: "Jane Smith",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    category: "Technology Trends",
    slug: "future-computer-repair-ai-machine-learning",
  },
  {
    id: "3",
    title: "Common Laptop Issues and How to Fix Them",
    excerpt:
      "Learn how to troubleshoot and resolve the most frequent laptop problems without professional help.",
    date: "2023-05-05",
    author: "Mike Johnson",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    category: "Laptops",
    slug: "common-laptop-issues-and-fixes",
  },
  {
    id: "4",
    title: "The Importance of Regular Device Maintenance",
    excerpt:
      "Understand why regular maintenance of your electronic devices is crucial for their longevity and performance.",
    date: "2023-04-30",
    author: "Sarah Brown",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    category: "Maintenance",
    slug: "importance-regular-device-maintenance",
  },
  {
    id: "5",
    title: "5G Technology: What It Means for Mobile Devices",
    excerpt:
      "Dive into the world of 5G and its potential impact on mobile devices and connectivity.",
    date: "2023-04-25",
    author: "Chris Lee",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    category: "Technology Trends",
    slug: "5g-technology-impact-mobile-devices",
  },
  {
    id: "6",
    title: "Data Recovery: What to Do When Your Hard Drive Fails",
    excerpt:
      "Step-by-step guide on how to handle a hard drive failure and increase your chances of successful data recovery.",
    date: "2023-04-20",
    author: "Emily Chen",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    category: "Data Recovery",
    slug: "data-recovery-hard-drive-failure",
  },
];

export default function BlogPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <TopBar />
      <MainNav navigationItems={navigationItems} />

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png"
          alt="Blog & News Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Blog & News
            </h1>
            <div className="flex items-center gap-2 text-gray-300">
              <Link
                href={homeNavigation.href}
                className="hover:text-[#fdb813] transition-colors"
              >
                {homeNavigation.label}
              </Link>
              <span>/</span>
              <span className="text-[#fdb813]">{blogNavigation.label}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="border-0 shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 md:h-56 lg:h-64">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#fdb813] text-white px-3 py-1 text-sm font-semibold rounded">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>Bình luận</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group-hover:text-[#fdb813] transition-colors"
                  >
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t flex justify-between items-center">
                  {/* <span className="text-sm text-gray-500">
                    By {post.author}
                  </span> */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-[#fdb813] hover:text-[#fdb813]/80 transition-colors font-medium"
                  >
                    Xem thêm
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <Button className="bg-[#fdb813] hover:bg-[#fdb813]/90 text-white">
              Tải thêm
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
