import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { TopBar } from "@/components/top-bar"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { navigationItems, socialLinks, contactInfo } from "@/config/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Smartphone, Laptop, Tablet, Wifi, HardDrive, Cpu } from "lucide-react"

interface Service {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
}

const services: Service[] = [
  {
    title: "Smartphone Repair",
    description: "Expert repair services for all major smartphone brands.",
    icon: Smartphone,
    features: ["Screen replacement", "Battery replacement", "Water damage repair", "Software issues"],
  },
  {
    title: "Laptop Repair",
    description: "Comprehensive repair and upgrade services for laptops.",
    icon: Laptop,
    features: ["Hardware upgrades", "OS installation", "Data recovery", "Virus removal"],
  },
  {
    title: "Tablet Repair",
    description: "Specialized repair services for tablets of all brands.",
    icon: Tablet,
    features: ["Screen repair", "Battery replacement", "Charging port repair", "Software updates"],
  },
  {
    title: "Network Solutions",
    description: "Setup and troubleshooting for home and office networks.",
    icon: Wifi,
    features: ["Wi-Fi setup", "Network security", "Troubleshooting", "Performance optimization"],
  },
  {
    title: "Data Recovery",
    description: "Professional data recovery from various storage devices.",
    icon: HardDrive,
    features: ["Hard drive recovery", "SSD data recovery", "RAID recovery", "Deleted file recovery"],
  },
  {
    title: "Computer Upgrades",
    description: "Boost your computer's performance with our upgrade services.",
    icon: Cpu,
    features: ["RAM upgrades", "SSD installation", "GPU upgrades", "CPU upgrades"],
  },
]

const faqs = [
  {
    question: "How long does a typical repair take?",
    answer:
      "Most repairs are completed within 24-48 hours. However, more complex issues may take longer. We always provide an estimated completion time when you bring in your device.",
  },
  {
    question: "Do you offer a warranty on your repairs?",
    answer:
      "Yes, we offer a 90-day warranty on all our repairs. This covers both parts and labor. If you experience any issues related to the repair within this period, we'll fix it at no additional cost.",
  },
  {
    question: "Can you recover data from a water-damaged phone?",
    answer:
      "In many cases, yes. Our advanced data recovery techniques can often retrieve data from water-damaged devices. However, the success rate depends on the extent of the damage and how quickly the device is brought to us.",
  },
  {
    question: "Do I need an appointment for repair services?",
    answer:
      "While walk-ins are welcome, we recommend scheduling an appointment to ensure prompt service. You can easily book an appointment through our website or by calling our customer service line.",
  },
]

export default function ServicesPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <TopBar socialLinks={socialLinks} contactInfo={contactInfo} />
      <MainNav navigationItems={navigationItems} />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z318Ayp4lpTfZoYM9300sxjrehyfPm.png"
          alt="Services Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Our Services</h1>
            <div className="flex items-center gap-2 text-gray-300">
              <Link href="/" className="hover:text-[#fdb813] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#fdb813]">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-block">
              <h2 className="text-[#fdb813] text-xl font-medium">What We Offer</h2>
              <div className="mt-1 flex items-center gap-2 justify-center">
                <div className="w-8 h-0.5 bg-[#fdb813]" />
                <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">Comprehensive Repair and Tech Solutions</h3>
            <p className="text-gray-600">
              At CM-REPAIR, we offer a wide range of services to keep your devices running smoothly. From smartphones to
              laptops, and everything in between, our expert technicians are here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#fdb813]/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#fdb813]" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fdb813]" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-6">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gmPbIYVT69ToTbz52NwXP3XAtA6vVN.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Need Expert Tech Support?</h2>
            <p className="text-gray-300 text-lg">
              Our team of skilled technicians is ready to tackle any tech issue you're facing. Get in touch with us
              today for fast, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#fdb813] hover:bg-[#fdb813]/90 text-white">Schedule a Repair</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#0a0f1c]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-block">
              <h2 className="text-[#fdb813] text-xl font-medium">FAQ</h2>
              <div className="mt-1 flex items-center gap-2 justify-center">
                <div className="w-8 h-0.5 bg-[#fdb813]" />
                <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h3>
            <p className="text-gray-600">Find answers to common questions about our services and repair process.</p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
}

