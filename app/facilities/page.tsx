import type React from "react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Handshake, Globe, Shield, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FacilitiesPage() {
  return (
    <div>
    <div className="text-justify">
      <PageHeader
        title="Our Facilities"
        description="SIAC offers comprehensive facilities to support research, innovation, and commercialization in AI-integrated civil engineering."
      />

      {/* Main Facilities Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="What We Offer"
            subtitle="Comprehensive support for research, innovation, and commercialization"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <FacilityCard
              icon={<Briefcase className="h-12 w-12 text-soft-gold" />}
              title="Commercialization"
              description="We help transform research innovations into market-ready products and services, providing support throughout the commercialization journey."
              features={[
                "Market analysis and validation",
                "Business model development",
                "Prototype to product transition",
                "Startup incubation support",
                "Funding and investment guidance",
              ]}
            />

            <FacilityCard
              icon={<Handshake className="h-12 w-12 text-soft-gold" />}
              title="Consultancy"
              description="Our expert team provides specialized consultancy services in AI-integrated civil engineering solutions for industry partners."
              features={[
                "Technical feasibility studies",
                "AI implementation strategies",
                "Infrastructure optimization",
                "Sustainability assessments",
                "Custom solution development",
              ]}
            />

            <FacilityCard
              icon={<Globe className="h-12 w-12 text-soft-gold" />}
              title="Technology Transfer"
              description="We facilitate the transfer of innovative technologies from research to industry, ensuring smooth adoption and implementation."
              features={[
                "Technology licensing",
                "Knowledge transfer programs",
                "Industry-specific adaptations",
                "Implementation support",
                "Training and capacity building",
              ]}
            />

            <FacilityCard
              icon={<Shield className="h-12 w-12 text-soft-gold" />}
              title="IP Support"
              description="Comprehensive intellectual property support to protect and leverage innovations developed at SIAC."
              features={[
                "Patent application assistance",
                "IP strategy development",
                "Licensing negotiations",
                "IP portfolio management",
                "Legal guidance and support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Research Infrastructure Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Research Infrastructure"
            subtitle="State-of-the-art facilities to support cutting-edge research"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=300&width=400&text=AI Lab"
                  alt="AI & Machine Learning Research Lab"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-rusty-red mb-2">AI & Machine Learning Research Lab</h3>
              <p className="text-light-brown">
                State-of-the-art computing resources for AI model development and testing, equipped with
                high-performance GPUs and specialized software.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=300&width=400&text=HPC"
                  alt="High-Performance Computing Facilities"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-rusty-red mb-2">High-Performance Computing Facilities</h3>
              <p className="text-light-brown">
                Advanced computing infrastructure for complex simulations and data processing, supporting large-scale
                research projects and analyses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=300&width=400&text=IoT Testbed"
                  alt="IoT-Enabled Smart Infrastructure Testbed"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-rusty-red mb-2">IoT-Enabled Smart Infrastructure Testbed</h3>
              <p className="text-light-brown">
                Real-world testing environment for IoT and AI-integrated infrastructure solutions, allowing for
                practical validation of research concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle title="Success Stories" subtitle="Real-world impact of our facilities and services" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-warm-beige hover:shadow-lg transition-all">
              <CardHeader className="bg-warm-beige/10">
                <CardTitle className="text-rusty-red">Smart Bridge Monitoring System</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-start mb-4">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Company"
                    alt="Company Logo"
                    className="w-16 h-16 mr-4 rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-rusty-red">BridgeTech Solutions</h4>
                    <p className="text-muted-gold">Technology Transfer & Commercialization</p>
                  </div>
                </div>
                <p className="text-light-brown mb-4">
                  SIAC helped BridgeTech Solutions develop and commercialize an AI-powered bridge monitoring system that
                  uses sensors and machine learning to detect structural issues in real-time, reducing maintenance costs
                  by 40% and preventing potential failures.
                </p>
                <Link href="#" className="text-rusty-red font-medium flex items-center hover:underline">
                  Read full case study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-warm-beige hover:shadow-lg transition-all">
              <CardHeader className="bg-warm-beige/10">
                <CardTitle className="text-rusty-red">Sustainable Construction AI Assistant</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-start mb-4">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Startup"
                    alt="Startup Logo"
                    className="w-16 h-16 mr-4 rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-rusty-red">EcoBuilt AI</h4>
                    <p className="text-muted-gold">IP Support & Incubation</p>
                  </div>
                </div>
                <p className="text-light-brown mb-4">
                  With SIAC's IP support and incubation services, EcoBuilt AI developed a patented AI assistant that
                  optimizes construction processes for sustainability, reducing material waste by 30% and energy
                  consumption by 25% during construction.
                </p>
                <Link href="#" className="text-rusty-red font-medium flex items-center hover:underline">
                  Read full case study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-16 px-4 bg-warm-beige">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-rusty-red mb-6">Partner With Us</h2>
            <p className="text-xl text-light-brown mb-8">
              Interested in collaborating with SIAC? We offer various partnership opportunities for industry, academia,
              and government organizations. Let's work together to drive innovation in civil engineering through AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-rusty-red hover:bg-rusty-red/90 text-white px-8 py-6 text-lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-rusty-red text-rusty-red hover:bg-rusty-red/10 px-8 py-6 text-lg"
              >
                <Link href="/about">Learn About Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

function FacilityCard({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}) {
  return (
    <Card className="border-warm-beige hover:shadow-lg transition-all">
      <CardHeader className="pb-3 border-b border-warm-beige/30">
        <div className="flex items-center space-x-4">
          <div className="bg-warm-beige/20 p-4 rounded-full">{icon}</div>
          <CardTitle className="text-rusty-red text-2xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-light-brown text-lg mb-6 leading-relaxed">{description}</p>
        <h4 className="font-semibold text-rusty-red text-lg mb-4">We Offer:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-muted-gold mr-2 flex-shrink-0" />
              <span className="text-light-brown">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

