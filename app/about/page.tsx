import type React from "react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Lightbulb, Handshake, Building2, GraduationCap, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About SIAC"
        description="The Centre of Excellence in Civil Engineering with AI aims to integrate cutting-edge Artificial Intelligence solutions into civil engineering."
      />

{/* Vision Section */}
<section className="py-16 px-4">
  <div className="container mx-auto">
    <div className="flex justify-center mb-16">
      <div className="rounded-full w-64 h-64 md:w-80 md:h-80 relative overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        {/* Background Image */}
        <img 
          src="placeholder-logo.png" 
          alt="Vision background" 
          className="absolute w-full h-full object-cover"
        />
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-warm-beige bg-opacity-60"></div>
        
        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center">
            <h3 className="text-rusty-red font-bold text-2xl mb-4">Our Vision</h3>
            {/* <p className="text-light-brown text-lg leading-relaxed">
              To serve as a hub for innovation, research, and industry collaboration, transforming the landscape of
              civil engineering through AI and ensuring long-term sustainable development aligned with global SDG
              goals.
            </p> */}
          </div>
        </div>
      </div>
    </div>
    

    <div className="text-justify">
    <div className="max-w-4xl mx-auto">
      <p className="text-lg text-light-brown leading-relaxed mb-6">
        The Sustainable Infrastructure & AI Research Centre (SIAC) is dedicated to revolutionizing civil
        engineering practices through the integration of artificial intelligence. Our interdisciplinary approach
        brings together experts from civil engineering, computer science, and related fields to develop innovative
        solutions for sustainable infrastructure development.
      </p>
      <p className="text-lg text-light-brown leading-relaxed mb-6">
        Established in 2023, SIAC has quickly become a leading research center in the field, with partnerships
        across academia, industry, and government. Our work is guided by a commitment to sustainability,
        innovation, and excellence in research and education.
      </p>
      <p className="text-lg text-light-brown leading-relaxed">
        Through our research, consultancy services, and educational programs, we aim to address the most pressing
        challenges in civil engineering and infrastructure development, from climate resilience to resource
        efficiency and smart city planning.
      </p>
    </div>
    </div>
  </div>
</section>

      {/* Objectives Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="text-justify">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Objectives"
            subtitle="Driving innovation and excellence in AI-integrated civil engineering"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ObjectiveCard
              icon={<Microscope className="h-10 w-10 text-soft-gold" />}
              title="Research & Development"
              description="Develop AI-driven solutions for civil engineering challenges through cutting-edge research and innovation."
            />
            <ObjectiveCard
              icon={<Lightbulb className="h-10 w-10 text-soft-gold" />}
              title="Technology Transfer"
              description="Facilitate the commercialization of innovative civil engineering technologies for real-world application."
            />
            <ObjectiveCard
              icon={<Handshake className="h-10 w-10 text-soft-gold" />}
              title="Industry-Academia Collaboration"
              description="Strengthen partnerships with academia and industry leaders to bridge the gap between theory and practice."
            />
            <ObjectiveCard
              icon={<Building2 className="h-10 w-10 text-soft-gold" />}
              title="Consultancy & Services"
              description="Provide expert consultancy in AI-integrated civil engineering solutions to address complex challenges."
            />
            <ObjectiveCard
              icon={<GraduationCap className="h-10 w-10 text-soft-gold" />}
              title="Skill Development & Training"
              description="Offer specialized training programs and workshops to develop the next generation of civil engineers."
            />
            <ObjectiveCard
              icon={<Award className="h-10 w-10 text-soft-gold" />}
              title="Excellence & Innovation"
              description="Maintain the highest standards of excellence and innovation in all our research and activities."
            />
          </div>
        </div>
      </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
        <div className="text-justify">
          <SectionTitle title="Our Team" subtitle="Meet the experts driving innovation at SIAC" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. Rajesh Kumar"
              position="Director, SIAC"
              bio="Dr. Kumar has over 20 years of experience in civil engineering and AI integration, with a focus on structural health monitoring."
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Dr. Sunita Patel"
              position="Lead Researcher, AI"
              bio="Dr. Patel specializes in machine learning applications for civil engineering, with expertise in predictive maintenance systems."
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Dr. Amit Khan"
              position="Lead, Civil Engineering"
              bio="Dr. Khan is an expert in sustainable infrastructure design with a focus on integrating AI for optimizing resource efficiency."
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Prof. Meera Singh"
              position="Senior Researcher"
              bio="Prof. Singh specializes in geotechnical engineering and AI applications for soil analysis and foundation design."
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Dr. Vikram Reddy"
              position="Head of Technology Transfer"
              bio="Dr. Reddy leads our technology commercialization efforts, with expertise in IP management and industry partnerships."
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Dr. Priya Sharma"
              position="Lead, Smart Infrastructure"
              bio="Dr. Sharma focuses on IoT integration with civil infrastructure for real-time monitoring and smart city applications."
              image="/placeholder.svg?height=300&width=300"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-warm-beige/20">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Partners"
            subtitle="Collaborating with leading organizations to drive innovation"
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow h-32"
              >
                <img
                  src={`/placeholder.svg?height=80&width=80&text=Partner ${i}`}
                  alt={`Partner ${i}`}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ObjectiveCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-warm-beige/30 p-4 rounded-full inline-block mb-4">{icon}</div>
      <h4 className="text-rusty-red font-semibold text-xl mb-3">{title}</h4>
      <p className="text-light-brown leading-relaxed">{description}</p>
    </div>
  )
}

function TeamMember({ name, position, bio, image }: { name: string; position: string; bio: string; image: string }) {
  return (
    <Card className="overflow-hidden border-warm-beige hover:shadow-lg transition-all group">
      <div className="h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="bg-warm-beige/10">
        <CardTitle className="text-rusty-red">{name}</CardTitle>
        <p className="text-muted-gold font-medium">{position}</p>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-light-brown">{bio}</p>
      </CardContent>
    </Card>
  )
}

