import Image from "next/image";
import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { blogNavigation, navigationItems } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  User,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { JSX } from "react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
}

interface CategorySidebar {
  name: string;
  category: string;
}

const blogPost: BlogPost = {
  id: "1",
  title: "10 Tips to Extend Your Smartphone's Battery Life",
  content: `
    <p>In today's digital age, smartphones have become an integral part of our lives. However, one common frustration many users face is the rapid depletion of battery life. Here are ten effective tips to help you extend your smartphone's battery life:</p>

    <h2>1. Adjust Screen Brightness</h2>
    <p>One of the biggest battery drains is your phone's display. Lowering the screen brightness or using auto-brightness can significantly extend battery life.</p>

    <h2>2. Turn Off Wi-Fi, Bluetooth, and GPS When Not in Use</h2>
    <p>These features constantly search for connections, draining your battery. Turn them off when you're not using them.</p>

    <h2>3. Use Wi-Fi Instead of Cellular Data When Possible</h2>
    <p>Wi-Fi uses less power than cellular data, so connect to Wi-Fi networks whenever available.</p>

    <h2>4. Limit Background App Refresh</h2>
    <p>Many apps refresh their content in the background, consuming battery life. Limit this feature to essential apps only.</p>

    <h2>5. Enable Power Saving Mode</h2>
    <p>Most smartphones have a built-in power saving mode that limits performance and connectivity to extend battery life.</p>

    <h2>6. Avoid Extreme Temperatures</h2>
    <p>Both very cold and very hot temperatures can damage your battery and reduce its lifespan. Keep your phone at room temperature when possible.</p>

    <h2>7. Update Your Apps and Operating System</h2>
    <p>Developers often release updates that improve app efficiency and reduce battery drain.</p>

    <h2>8. Reduce Push Notifications</h2>
    <p>Every notification wakes up your phone's display and uses battery. Limit notifications to essential apps only.</p>

    <h2>9. Use Dark Mode</h2>
    <p>If your phone has an OLED screen, using dark mode can save significant battery life.</p>

    <h2>10. Avoid Using Phone While Charging</h2>
    <p>Using your phone while it's charging can generate heat and stress the battery, potentially reducing its lifespan.</p>

    <p>By implementing these tips, you can significantly extend your smartphone's battery life, ensuring that your device lasts longer throughout the day.</p>
  `,
  date: "2023-05-15",
  author: "John Doe",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
  category: "Smartphones",
  slug: "10-tips-extend-smartphone-battery-life",
};

const categories: CategorySidebar[] = [
  {
    name: "Smartphones",
    category: "smartphones",
  },
  {
    name: "Laptops",
    category: "Laptops",
  },
  {
    name: "Technology Trends",
    category: "technology-trends",
  },
  {
    name: "Maintenance",
    category: "maintenance",
  },
  {
    name: "Data Recovery",
    category: "data-recovery",
  },
];
const relatedPosts: BlogPost[] = [
  {
    id: "2",
    title: "The Future of Computer Repair: AI and Machine Learning",
    content: "",
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
    content: "",
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
    content: "",
    date: "2023-04-30",
    author: "Sarah Brown",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnnVFErYNJ6Sjy7IA2s6Rx8TKavFzu.png",
    category: "Maintenance",
    slug: "importance-regular-device-maintenance",
  },
];

export default function BlogDetailPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <TopBar />
      <MainNav navigationItems={navigationItems} />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src={blogPost.image || "/placeholder.svg"}
          alt={blogPost.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-4xl px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blogPost.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </article>

              {/* Social Share */}
              <div className="mt-8 flex items-center gap-4">
                <span className="font-semibold text-gray-700">Share:</span>
                <Button variant="outline" size="icon">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Thể Loại</h2>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.category}>
                        <Link
                          href={`/${blogNavigation.href}?category=${category.category}`}
                          className="text-gray-600 hover:text-[#fdb813]"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Bài viết gần đây</h2>
                  <ul className="space-y-4">
                    {relatedPosts.map((post) => (
                      <li key={post.id}>
                        <Link
                          href={`/${blogNavigation.href}/${post.slug}`}
                          className="flex items-center gap-4 group"
                        >
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold group-hover:text-[#fdb813] transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Bài viết liên quan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card
                key={post.id}
                className="border-0 shadow-lg overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Link
                    href={`/${blogNavigation.href}/${post.slug}`}
                    className="block group-hover:text-[#fdb813] transition-colors"
                  >
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/${blogNavigation.href}/${post.slug}`}
                    className="flex items-center gap-2 text-[#fdb813] hover:text-[#fdb813]/80 transition-colors font-medium"
                  >
                    Xem thêm
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
