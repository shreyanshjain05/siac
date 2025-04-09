import React from "react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Lightbulb, Handshake, Building2, GraduationCap, Award, ExternalLink, Target, BarChart3, Globe2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-beige/30 to-transparent h-[500px] -z-10" />
        <PageHeader
          title="About SIAC"
          description="The Centre of Excellence in Civil Engineering with AI aims to integrate cutting-edge Artificial Intelligence solutions into civil engineering."
        />

        {/* Vision Section */}
{/* Vision Section */}
<section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-16">
              {/* <SectionTitle
                title="Our Vision"
                subtitle="Transforming civil engineering through AI innovation"
                align="center"
              /> */}
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 w-full">
                {/* Vision Circle */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-rusty-red rounded-full blur-md opacity-30"></div>
                    <div className="rounded-full w-64 h-64 md:w-80 md:h-80 relative overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-warm-beige to-soft-gold opacity-80"></div>
                      
                      {/* Text Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <div className="text-center">
                          <Target className="h-12 w-12 text-rusty-red mb-2" />
                          <h3 className="text-rusty-red font-bold text-3xl mb-4">Our Vision</h3>
                          <p className="text-light-brown text-lg leading-tight">
                            To transform infrastructure development through AI innovation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Vision Details */}
                <div className="lg:col-span-2">
                  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border border-warm-beige/20">
                    <div className="text-justify">
                      <p className="text-lg text-light-brown leading-relaxed mb-6">
                        The Sustainable Infrastructure & AI Research Centre (SIAC) is dedicated to revolutionizing civil
                        engineering practices through the integration of artificial intelligence. Our interdisciplinary approach
                        brings together experts from civil engineering, computer science, and related fields to develop innovative
                        solutions for sustainable infrastructure development.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        <ObjectiveCard 
                          icon={<BarChart3 className="h-8 w-8 text-amber-600" />}
                          title="Innovation Hub"
                          description="Serving as a catalyst for breakthrough research and development in AI-integrated civil engineering"
                        />
                        <ObjectiveCard 
                          icon={<Handshake className="h-8 w-8 text-amber-600" />}
                          title="Collaboration"
                          description="Fostering partnerships across academia, industry, and government to translate research into practice"
                        />
                        <ObjectiveCard 
                          icon={<Globe2 className="h-8 w-8 text-amber-600" />}
                          title="Global Impact"
                          description="Addressing critical infrastructure challenges aligned with sustainable development goals"
                        />
                      </div>
                      
                      <p className="text-lg text-light-brown leading-relaxed">
                        Through our research, consultancy services, and educational programs, we aim to address the most pressing
                        challenges in civil engineering and infrastructure development, from climate resilience to resource
                        efficiency and smart city planning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Objectives Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-warm-beige/10">
          <div className="container mx-auto">
            <SectionTitle
              title="Our Objectives"
              subtitle="Driving innovation and excellence in AI-integrated civil engineering"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ObjectiveCard
                icon={<Microscope className="h-10 w-10 text-amber-600" />}
                title="Research & Development"
                description="Develop AI-driven solutions for civil engineering challenges through cutting-edge research and innovation."
              />
              <ObjectiveCard
                icon={<Lightbulb className="h-10 w-10 text-amber-600" />}
                title="Technology Transfer"
                description="Facilitate the commercialization of innovative civil engineering technologies for real-world application."
              />
              <ObjectiveCard
                icon={<Handshake className="h-10 w-10 text-amber-600" />}
                title="Industry-Academia Collaboration"
                description="Strengthen partnerships with academia and industry leaders to bridge the gap between theory and practice."
              />
              <ObjectiveCard
                icon={<Building2 className="h-10 w-10 text-amber-600" />}
                title="Consultancy & Services"
                description="Provide expert consultancy in AI-integrated civil engineering solutions to address complex challenges."
              />
              <ObjectiveCard
                icon={<GraduationCap className="h-10 w-10 text-amber-600" />}
                title="Skill Development & Training"
                description="Offer specialized training programs and workshops to develop the next generation of civil engineers."
              />
              <ObjectiveCard
                icon={<Award className="h-10 w-10 text-amber-600" />}
                title="Excellence & Innovation"
                description="Maintain the highest standards of excellence and innovation in all our research and activities."
              />
            </div>
          </div>
        </section>

                {/* Partners Section */}
                <section className="py-20 px-4 bg-gradient-to-b from-warm-beige/20 to-warm-beige/5">
          <div className="container mx-auto">
            <SectionTitle
              title="Our Partners"
              subtitle="Collaborating with leading organizations to drive innovation"
              align="center"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <PartnerLogo key={i} number={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <SectionTitle title="Our Team" subtitle="Meet the experts driving innovation at SIAC" align="center" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
        </section>



        {/* Contact CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-rusty-red/90 to-amber-600/90 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Collaborating?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for new partners and collaborators to help us push the boundaries of AI in civil engineering.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-rusty-red px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get in Touch <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

function ObjectiveCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-warm-beige/10 h-full transform hover:-translate-y-1">
      <div className="bg-gradient-to-br from-warm-beige/40 to-soft-gold/20 p-4 rounded-full inline-flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-rusty-red font-semibold text-xl mb-3">{title}</h4>
      <p className="text-light-brown leading-relaxed">{description}</p>
    </div>
  )
}

function TeamMember({ name, position, bio, image }: { name: string; position: string; bio: string; image: string }) {
  return (
    <Card className="overflow-hidden border-warm-beige/20 hover:shadow-xl transition-all group h-full">
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="bg-gradient-to-r from-warm-beige/20 to-soft-gold/10 border-b border-warm-beige/10">
        <CardTitle className="text-rusty-red">{name}</CardTitle>
        <p className="text-amber-700 font-medium">{position}</p>
      </CardHeader>
      <CardContent className="pt-4 bg-white">
        <p className="text-light-brown">{bio}</p>
      </CardContent>
    </Card>
  )
}

function PartnerLogo({ number }: { number: number }) {
  return (
    <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 h-32 border border-warm-beige/10 group">
      <img
        src={`/placeholder.svg?height=80&width=80&text=Partner ${number}`}
        alt={`Partner ${number}`}
        className="max-w-full max-h-full transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  )
}
