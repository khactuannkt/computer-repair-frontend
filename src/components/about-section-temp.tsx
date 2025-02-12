import Image from "next/image"
import { Button } from "@/components/ui/button"
import { JSX } from "react"

export function AboutSection(): JSX.Element {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-31SKj5FtTKwf4d9gOkGtlxhVLszREP.png"
                  alt="Electronics repair technician working with wires"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mt-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-31SKj5FtTKwf4d9gOkGtlxhVLszREP.png"
                  alt="Mobile device repair in progress"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 w-72 h-72 bg-gray-100 rounded-full -bottom-12 -left-12" />
            <div className="absolute -z-10 w-48 h-48 border-2 border-[#fdb813] rounded-full top-12 -right-8" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-[#fdb813] text-xl font-medium">About Us</h2>
              <div className="mt-1 flex items-center gap-2">
                <div className="w-8 h-0.5 bg-[#fdb813]" />
                <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Successfully Providing the Best Computer and Mobile Services from 20 years
            </h3>

            <div className="space-y-4 text-gray-600">
              <p>Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out.</p>
              <p>
                Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy
                promotion engrosse. Want eyes by neat so just must. Past draw tall up face show rent oh mr.
              </p>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg" alt="CEO portrait" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Jonson Adalson</h4>
                  <p className="text-gray-600 text-sm">CEO, of CM-repair Company</p>
                </div>
              </div>
              <Image src="/placeholder.svg" alt="CEO signature" width={120} height={60} className="opacity-80" />
            </div>

            <Button className="bg-[#fdb813] hover:bg-[#fdb813]/90 text-white px-8 py-6 rounded">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
