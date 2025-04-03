import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/section-title"
import { ArrowRight, Cpu, Leaf, BarChart3, GraduationCap, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-golden-brown to-warm-beige"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rusty-red mb-6 leading-tight">
              Sustainable Infrastructure & AI Research Centre
            </h1>
            <p className="text-xl md:text-2xl text-light-brown mb-10 max-w-3xl mx-auto leading-relaxed">
              Integrating AI into civil engineering for efficiency, sustainability, and resilience
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-rusty-red hover:bg-rusty-red/90 text-white px-8 py-6 text-lg rounded-full">
                <Link href="/about">Discover SIAC</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-rusty-red text-rusty-red hover:bg-rusty-red/10 px-8 py-6 text-lg rounded-full"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="text-justify">
          <div className="mt-16 bg-warm-beige/90 p-6 rounded-lg max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-light-brown">
              The CoE aligns with UN SDGs: SDG 9 (Industry, Innovation, and Infrastructure), SDG 11 (Sustainable Cities
              and Communities), and SDG 13 (Climate Action), driving technological innovation, research, consultancy,
              and industry collaboration.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="About SIAC"
            subtitle="The Centre of Excellence in Civil Engineering with AI"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <img src="/green-city.png?height=600&width=800" alt="SIAC Research Centre" className="w-full h-auto" />
            </div>
            <div className="text-justify">
            <div className="space-y-6">
              <p className="text-lg text-light-brown leading-relaxed">
                The Centre of Excellence (CoE) in Civil Engineering with AI aims to integrate cutting-edge Artificial
                Intelligence solutions into civil engineering to enhance efficiency, sustainability, and resilience in
                infrastructure development.
              </p>
              <p className="text-lg text-light-brown leading-relaxed">
                Our mission is to revolutionize practices and drive economic growth through technology transfer and
                commercialization of AI-driven solutions for civil engineering challenges.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-muted-gold hover:bg-muted-gold/90 text-white group">
                  <Link href="/about" className="flex items-center">
                    Learn More About SIAC
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Impact"
            subtitle="Transforming civil engineering through AI innovation"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <ImpactCircle
              icon={<Leaf className="h-10 w-10 text-white" />}
              title="Sustainability"
              description="Enhanced sustainability in infrastructure development"
            />
            <ImpactCircle
              icon={<Cpu className="h-10 w-10 text-white" />}
              title="Innovation"
              description="Accelerating AI adoption in construction"
            />
            <ImpactCircle
              icon={<GraduationCap className="h-10 w-10 text-white" />}
              title="Education"
              description="Creating specialized jobs in AI-integrated engineering"
            />
            <ImpactCircle
              icon={<BarChart3 className="h-10 w-10 text-white" />}
              title="Resilience"
              description="Improved infrastructure monitoring and maintenance"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
              <Link href="/impact" className="flex items-center">
                Explore Our Impact
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Research Focus Areas"
            subtitle="Exploring the intersection of AI and civil engineering"
            align="center"
          />

          <div className="text-justify">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResearchCard
              title="AI Applications in Civil Engineering"
              description="Developing AI-driven solutions for structural health monitoring, predictive maintenance, and construction automation."
              image="/placeholder.svg?height=300&width=400"
            />
            <ResearchCard
              title="Sustainable & Smart Infrastructure"
              description="Creating intelligent systems for green building design, smart water management, and disaster risk assessment."
              image="/placeholder.svg?height=300&width=400"
            />
            <ResearchCard
              title="Technology Transfer & Commercialization"
              description="Facilitating the journey from research to market-ready products through patenting, licensing, and industry collaboration."
              image="/placeholder.svg?height=300&width=400"
            />
          </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-muted-gold hover:bg-muted-gold/90 text-white">
              <Link href="/research">View All Research Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-warm-beige">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-rusty-red mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-light-brown mb-10 max-w-2xl mx-auto">
            Join us in revolutionizing civil engineering through AI innovation. Whether you're from industry, academia,
            or government, we have partnership opportunities for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-rusty-red hover:bg-rusty-red/90 text-white px-8 py-6 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-rusty-red text-rusty-red hover:bg-rusty-red/10 px-8 py-6 text-lg"
            >
              <Link href="/partnerships">Explore Partnerships</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ImpactCircle({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="bg-rusty-red rounded-full p-4 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-rusty-red mb-2">{title}</h3>
      <p className="text-light-brown">{description}</p>
    </div>
  )
}

function ResearchCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <Card className="overflow-hidden border-warm-beige hover:shadow-lg transition-all group">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="bg-warm-beige/10">
        <CardTitle className="text-rusty-red">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-light-brown text-base">{description}</CardDescription>
        <div className="mt-4">
          <Link
            href="/research"
            className="text-rusty-red font-medium flex items-center hover:underline transition-all"
          >
            Learn more
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

