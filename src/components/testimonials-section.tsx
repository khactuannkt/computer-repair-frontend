"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: string
  content: string
  author: string
  position: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    author: "Micheal Smith",
    position: "Manager",
    avatar: "/placeholder.svg",
  },
  {
    id: "2",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    author: "Sarah Johnson",
    position: "Director",
    avatar: "/placeholder.svg",
  },
  {
    id: "3",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    author: "David Wilson",
    position: "CEO",
    avatar: "/placeholder.svg",
  },
]

export function TestimonialsSection(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Left Section */}
        <div className="relative bg-[#0a0f1c]/95 py-16 px-4 md:px-6 lg:px-12">
          <div className="max-w-2xl mx-auto lg:ml-auto lg:mr-0">
            <div className="space-y-4 mb-12">
              <div className="inline-block">
                <h2 className="text-[#fdb813] text-xl font-medium">Testimonials</h2>
                <div className="mt-1 flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-[#fdb813]" />
                  <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Happy Client Quote After Servicing
              </h3>
            </div>

            <div className="relative">
              {/* Navigation Buttons */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={previousTestimonial}
                  className="text-white hover:text-[#fdb813] transition-colors"
                >
                  <ChevronUp className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="text-white hover:text-[#fdb813] transition-colors"
                >
                  <ChevronDown className="h-8 w-8" />
                </Button>
              </div>

              {/* Testimonial Card */}
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="relative p-8">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-[#fdb813] opacity-50" />
                  <div className="space-y-6">
                    <p className="text-white/90 text-lg leading-relaxed">{testimonials[currentIndex].content}</p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                          alt={testimonials[currentIndex].author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonials[currentIndex].author}</h4>
                        <p className="text-[#fdb813]">{testimonials[currentIndex].position}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative h-full min-h-[400px] lg:min-h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BlN8JYtU4WDgCNnsrwcDlz7hqfw9a4.png"
            alt="Technician working on equipment"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

