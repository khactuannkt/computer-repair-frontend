import Image from "next/image";
import { Heart, Share2, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  showActions?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Imon Hossain",
    position: "Repair Technician",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6rctLAdALYL3x39aOpUhzo0PW3kgXK.png",
    showActions: true,
  },
  {
    name: "Alex Frunklin",
    position: "Repair Technician",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6rctLAdALYL3x39aOpUhzo0PW3kgXK.png",
  },
  {
    name: "Henry Joseph",
    position: "Repair Technician",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6rctLAdALYL3x39aOpUhzo0PW3kgXK.png",
  },
  {
    name: "Aaron Finch",
    position: "Repair Technician",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6rctLAdALYL3x39aOpUhzo0PW3kgXK.png",
  },
];

export function TeamSection(): JSX.Element {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block">
            <h2 className="text-[#fdb813] text-xl font-medium">Our Team</h2>
            <div className="mt-1 flex items-center gap-2 justify-center">
              <div className="w-8 h-0.5 bg-[#fdb813]" />
              <div className="w-2 h-2 rounded-full bg-[#fdb813]" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Professional Expert Team
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg group">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[4/5]">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  {member.showActions && (
                    <div className="absolute left-4 top-4 flex flex-col gap-3">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-10 h-10 rounded-full bg-white hover:bg-[#fdb813] hover:text-white transition-colors"
                      >
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-10 h-10 rounded-full bg-white hover:bg-[#fdb813] hover:text-white transition-colors"
                      >
                        <Share2 className="w-5 h-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-10 h-10 rounded-full bg-white hover:bg-[#fdb813] hover:text-white transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-10 h-10 rounded-full bg-white hover:bg-[#fdb813] hover:text-white transition-colors"
                      >
                        <Search className="w-5 h-5" />
                      </Button>
                    </div>
                  )}
                </div>
                <div className="text-center p-6">
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <p className="text-[#fdb813]">{member.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
