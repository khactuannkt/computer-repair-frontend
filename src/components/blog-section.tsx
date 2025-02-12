import Image from "next/image";
import Link from "next/link";
import { Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Resources Exquisite Set Arranging Moonlight Him",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when",
    date: "03 Dec, 2021",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    slug: "resources-exquisite-set",
  },
  {
    id: "2",
    title: "Barton Did Feebly Change Man She Afford Square",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when",
    date: "25 Oct, 2021",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    slug: "barton-did-feebly-change",
  },
  {
    id: "3",
    title: "Village Did Removed Enjoye Explain Saw Calling Talking.",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when",
    date: "09 Sep, 2021",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    slug: "village-did-removed",
  },
];

export function BlogSection(): JSX.Element {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block">
            <h2 className="text-[#fdb813] text-xl font-medium">Blog & News</h2>
            <div className="mt-1 flex items-center gap-2 justify-center">
              <div className="w-8 h-0.5 bg-[#fdb813]" />
              <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Recent Blog & News
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="border-0 shadow-lg overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-white py-2 px-4 rounded-tr-lg flex items-center gap-2 text-[#fdb813]">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{post.date}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group-hover:text-[#fdb813] transition-colors"
                  >
                    <h4 className="text-xl font-bold leading-tight">
                      {post.title}
                    </h4>
                  </Link>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-[#fdb813] hover:text-[#fdb813]/80 transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/blog/${post.slug}#comments`}
                      className="flex items-center gap-2 text-gray-500 hover:text-[#fdb813] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Comment
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
