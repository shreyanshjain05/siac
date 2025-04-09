import type React from "react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Cpu, GraduationCap, BarChart3, Building2, Microscope, Lightbulb , BookOpen } from "lucide-react"

export default function ImpactPage() {
  return (
    <div>
      <PageHeader
        title="Our Impact"
        description="Transforming civil engineering through AI innovation and sustainable infrastructure development."
      />

      {/* Main Impact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle title="Key Impact Areas" subtitle="How SIAC is making a difference" align="center" />

          <div className="flex flex-wrap justify-center gap-8 mt-12">
          <ImpactCircle
              icon={<GraduationCap className="h-10 w-10 text-white" />}
              title="Education"
              description="Creating specialized jobs in AI-integrated engineering"
            />
            <ImpactCircle
              icon={<Cpu className="h-10 w-10 text-white" />}
              title="Innovation"
              description="Accelerating AI adoption in construction"
            />

            <ImpactCircle
              icon={<BarChart3 className="h-10 w-10 text-white" />}
              title="Resilience"
              description="Improved infrastructure monitoring and maintenance"
            />
            <ImpactCircle
              icon={<Leaf className="h-10 w-10 text-white" />}
              title="Sustainability"
              description="Enhanced sustainability in infrastructure development"
            />
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 bg-warm-beige/20">
        <div className="container mx-auto">
          <SectionTitle title="Impact in Numbers" subtitle="Measuring our contribution to the field" align="center" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <StatCard number="25+" label="Research Projects" icon={<MicroscopeIcon />} />
            <StatCard number="40+" label="Publications" icon={<BookOpenIcon />} />
            <StatCard number="15+" label="Industry Partners" icon={<Building />} />
            <StatCard number="30+" label="Technologies Developed" icon={<LightbulbIcon />} />          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Alignment with UN Sustainable Development Goals"
            subtitle="Contributing to global sustainability objectives"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <SDGCard
              number="9"
              title="Industry, Innovation, and Infrastructure"
              description="Building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation."
              color="bg-orange-600"
            />
            <SDGCard
              number="11"
              title="Sustainable Cities and Communities"
              description="Making cities and human settlements inclusive, safe, resilient, and sustainable through AI-driven solutions."
              color="bg-amber-600"
            />
            <SDGCard
              number="13"
              title="Climate Action"
              description="Taking urgent action to combat climate change and its impacts through sustainable infrastructure development."
              color="bg-green-600"
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Impact Case Studies"
            subtitle="Real-world examples of our research making a difference"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="border-warm-beige hover:shadow-lg transition-all">
              <div className="h-56 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Case Study 1"
                  alt="Smart Bridge Monitoring"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-rusty-red">Smart Bridge Monitoring System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-light-brown mb-4">
                  Our AI-powered bridge monitoring system has been implemented on 5 major bridges, reducing maintenance
                  costs by 40% and preventing potential structural failures through early detection of issues.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Location: Mumbai, India</span>
                  <span>Implementation: 2023</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-warm-beige hover:shadow-lg transition-all">
              <div className="h-56 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Case Study 2"
                  alt="Green Building Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-rusty-red">AI-Optimized Green Building Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-light-brown mb-4">
                  Our AI-based design optimization system has helped create energy-efficient building designs that
                  reduce energy consumption by 30% and carbon footprint by 25% compared to conventional designs.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Location: Bangalore, India</span>
                  <span>Implementation: 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle title="Testimonials" subtitle="What our partners say about our impact" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-warm-beige/10 p-6 rounded-lg border border-warm-beige">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-muted-gold flex items-center justify-center text-white font-bold mr-4">
                  AB
                </div>
                <div>
                  <h4 className="font-semibold text-rusty-red">Anil Bhardwaj</h4>
                  <p className="text-sm text-light-brown">CEO, InfraTech Solutions</p>
                </div>
              </div>
              <p className="text-light-brown italic">
                "SIAC's AI solutions have transformed how we approach infrastructure maintenance. Their smart monitoring
                system has saved us millions in preventive maintenance and extended the life of our assets."
              </p>
            </div>

            <div className="bg-warm-beige/10 p-6 rounded-lg border border-warm-beige">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-muted-gold flex items-center justify-center text-white font-bold mr-4">
                  PR
                </div>
                <div>
                  <h4 className="font-semibold text-rusty-red">Dr. Priya Rao</h4>
                  <p className="text-sm text-light-brown">Director, Urban Development Authority</p>
                </div>
              </div>
              <p className="text-light-brown italic">
                "The sustainable urban planning tools developed by SIAC have been instrumental in our smart city
                initiatives. Their AI-driven approach has helped us create more resilient and efficient urban spaces."
              </p>
            </div>

            <div className="bg-warm-beige/10 p-6 rounded-lg border border-warm-beige">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-muted-gold flex items-center justify-center text-white font-bold mr-4">
                  SK
                </div>
                <div>
                  <h4 className="font-semibold text-rusty-red">Suresh Kumar</h4>
                  <p className="text-sm text-light-brown">Head of Innovation, BuildTech Corp</p>
                </div>
              </div>
              <p className="text-light-brown italic">
                "Partnering with SIAC has accelerated our adoption of AI in construction processes. Their expertise and
                innovative solutions have given us a competitive edge in the market."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ImpactCircle({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center group max-w-xs">
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-rusty-red to-reddish-brown flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:scale-105">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-rusty-red mb-3">{title}</h3>
      <p className="text-light-brown text-lg">{description}</p>
    </div>
  )
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
      <div className="text-rusty-red mb-4 flex justify-center">{icon}</div>
      <h3 className="text-4xl font-bold text-rusty-red mb-2">{number}</h3>
      <p className="text-light-brown text-lg">{label}</p>
    </div>
  )
}

function SDGCard({
  number,
  title,
  description,
  color,
}: {
  number: string
  title: string
  description: string
  color: string
}) {
  return (
    <Card className="border-warm-beige hover:shadow-lg transition-all overflow-hidden">
      <div className={`h-16 ${color} flex items-center justify-center`}>
        <span className="text-white text-2xl font-bold">SDG {number}</span>
      </div>
      <CardHeader>
        <CardTitle className="text-rusty-red">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-light-brown">{description}</p>
      </CardContent>
    </Card>
  )
}

// Icons for the stat cards
function MicroscopeIcon() {
    return (
      <div className="h-12 w-12">
        <Microscope />
      </div>
    )
  }
  

  function BookOpenIcon() {
    return (
      <div className="h-12 w-12">
        <BookOpen />
      </div>
    )
  }

function Building() {
  return <Building2 className="h-12 w-12" />
}

function LightbulbIcon() {
    return (
      <div className="h-12 w-12">
        <Lightbulb />
      </div>
    )
  }
  
  function BuildingIcon() {
    return <Building2 className="h-12 w-12" />
  }

