import { PageHeader } from "@/components/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowRight, FileText, Users, Calendar, Download, ChevronRight, ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function ResearchPage() {
  return (
    <div className="bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-rusty-red/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-rusty-red mb-4">
                Research<span className="text-muted-gold">@</span>Focus
              </h1>
              <p className="text-lg md:text-xl text-light-brown max-w-lg">
                Exploring the intersection of AI and civil engineering to develop innovative solutions for sustainable infrastructure.
              </p>
              <div className="mt-8 flex gap-4">
                <Button className="bg-rusty-red hover:bg-rusty-red/90 text-white font-medium">
                  Our Research Papers
                </Button>
                {/* <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10 font-medium">
                  Join Our Team
                </Button> */}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-warm-beige">
                  <p className="text-3xl font-bold text-muted-gold">40+</p>
                  <p className="text-light-brown text-sm">Research Projects</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-warm-beige">
                  <p className="text-3xl font-bold text-muted-gold">125+</p>
                  <p className="text-light-brown text-sm">Publications</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-warm-beige">
                  <p className="text-3xl font-bold text-muted-gold">18</p>
                  <p className="text-light-brown text-sm">Researchers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-muted-gold/20 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-rusty-red/10 rounded-full"></div>
              <img 
                src="/placeholder.svg?height=600&width=600&text=AI Research" 
                alt="AI Research in Civil Engineering" 
                className="rounded-lg shadow-xl relative z-10" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Research Areas Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rusty-red">Our Focus Areas</h2>
            <p className="mt-2 text-lg text-light-brown">Driving innovation through interdisciplinary research</p>
            <div className="w-20 h-1 bg-muted-gold mx-auto mt-4"></div>
          </div>

          <Tabs defaultValue="ai-applications" className="w-full">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-3 max-w-3xl w-full p-1 bg-warm-beige/20 rounded-full">
                <TabsTrigger 
                  value="ai-applications" 
                  className="rounded-full py-2.5 data-[state=active]:bg-rusty-red data-[state=active]:text-white"
                >
                  AI Applications
                </TabsTrigger>
                <TabsTrigger 
                  value="sustainable" 
                  className="rounded-full py-2.5 data-[state=active]:bg-rusty-red data-[state=active]:text-white"
                >
                  Smart Infrastructure
                </TabsTrigger>
                <TabsTrigger 
                  value="technology" 
                  className="rounded-full py-2.5 data-[state=active]:bg-rusty-red data-[state=active]:text-white"
                >
                  Tech Transfer
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ai-applications" className="mt-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <Badge className="bg-rusty-red/10 text-rusty-red hover:bg-rusty-red/20 mb-4">AI Innovation</Badge>
                    <h3 className="text-2xl font-bold text-rusty-red mb-4">AI Applications in Civil Engineering</h3>
                    <p className="text-light-brown mb-6">
                      Our research in AI applications for civil engineering focuses on developing intelligent systems that
                      can enhance the design, construction, monitoring, and maintenance of infrastructure. By leveraging
                      machine learning, computer vision, and other AI technologies, we aim to improve efficiency, safety,
                      and sustainability in civil engineering practices.
                    </p>
                    <div className="space-y-3 mb-6">
                      {[
                        "AI-driven structural health monitoring",
                        "Smart predictive maintenance of infrastructure",
                        "AI-based geotechnical analysis",
                        "AI-powered construction automation & robotics",
                        "Sustainable urban planning using AI"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-muted-gold mr-3"></div>
                          <span className="text-light-brown">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white">Current Projects</Button>
                      <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
                        Research Papers
                      </Button>
                    </div>
                  </div>
                  <div className="bg-[url('/placeholder.svg?height=500&width=600&text=AI in Civil Engineering')] bg-cover bg-center flex items-end">
                    <div className="bg-gradient-to-t from-black/70 to-transparent p-6 w-full">
                      <h4 className="text-white text-xl font-semibold">Featured: AI in Bridge Monitoring</h4>
                      <p className="text-white/80 text-sm">Using computer vision to detect structural vulnerabilities</p>
                      <Button variant="link" className="text-white p-0 mt-2 flex items-center hover:text-muted-gold">
                        Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sustainable" className="mt-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <Badge className="bg-muted-gold/10 text-muted-gold hover:bg-muted-gold/20 mb-4">Sustainability</Badge>
                    <h3 className="text-2xl font-bold text-rusty-red mb-4">Smart Infrastructure & Sustainability</h3>
                    <p className="text-light-brown mb-6">
                      Our research in sustainable and smart infrastructure focuses on developing innovative solutions that
                      minimize environmental impact while maximizing efficiency and resilience. By integrating AI, IoT,
                      and other advanced technologies, we aim to create infrastructure systems that are adaptive,
                      responsive, and sustainable.
                    </p>
                    <div className="space-y-3 mb-6">
                      {[
                        "AI for green building design and energy optimization",
                        "Smart water management systems",
                        "AI-powered disaster risk assessment",
                        "Sustainable material selection with AI",
                        "Climate-resilient infrastructure design"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-muted-gold mr-3"></div>
                          <span className="text-light-brown">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white">Current Projects</Button>
                      <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
                        Research Papers
                      </Button>
                    </div>
                  </div>
                  <div className="bg-[url('/placeholder.svg?height=500&width=600&text=Smart Infrastructure')] bg-cover bg-center flex items-end">
                    <div className="bg-gradient-to-t from-black/70 to-transparent p-6 w-full">
                      <h4 className="text-white text-xl font-semibold">Featured: Smart Urban Planning</h4>
                      <p className="text-white/80 text-sm">AI-powered solutions for sustainable city development</p>
                      <Button variant="link" className="text-white p-0 mt-2 flex items-center hover:text-muted-gold">
                        Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <Badge className="bg-rusty-red/10 text-rusty-red hover:bg-rusty-red/20 mb-4">Innovation</Badge>
                    <h3 className="text-2xl font-bold text-rusty-red mb-4">Technology Transfer & Commercialization</h3>
                    <p className="text-light-brown mb-6">
                      Our research in technology transfer and commercialization focuses on bridging the gap between
                      academic research and industry application. We develop strategies and frameworks for effectively
                      translating innovative AI-driven civil engineering solutions into commercial products and services.
                    </p>
                    <div className="space-y-3 mb-6">
                      {[
                        "Patenting and licensing of innovative AI solutions",
                        "Industry collaboration for product development",
                        "Incubation support for AI in civil engineering startups",
                        "Market analysis and commercialization strategies"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-muted-gold mr-3"></div>
                          <span className="text-light-brown">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white">Current Projects</Button>
                      <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
                        Research Papers
                      </Button>
                    </div>
                  </div>
                  <div className="bg-[url('/placeholder.svg?height=500&width=600&text=Technology Transfer')] bg-cover bg-center flex items-end">
                    <div className="bg-gradient-to-t from-black/70 to-transparent p-6 w-full">
                      <h4 className="text-white text-xl font-semibold">Featured: AI Startups Program</h4>
                      <p className="text-white/80 text-sm">Supporting new ventures in civil engineering technology</p>
                      <Button variant="link" className="text-white p-0 mt-2 flex items-center hover:text-muted-gold">
                        Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gradient-to-r from-warm-beige/20 to-rusty-red/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-rusty-red">Featured Research Projects</h2>
              <p className="mt-2 text-lg text-light-brown">Innovative projects at the intersection of AI and civil engineering</p>
            </div>
            <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white mt-4 md:mt-0">
              View All Projects <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Driven Structural Health Monitoring",
                image: "/placeholder.svg?height=300&width=400&text=Project 1",
                researchers: "Dr. Rajesh Kumar, Dr. Sunita Patel",
                period: "2023-2025",
                description: "Real-time monitoring system for structural health using AI and IoT sensors to enable early detection and predictive maintenance."
              },
              {
                title: "Smart Water Resource Management",
                image: "/placeholder.svg?height=300&width=400&text=Project 2",
                researchers: "Dr. Amina Khan, Dr. Michael Chen",
                period: "2024-2026",
                description: "AI-powered system for optimizing water distribution networks and reducing wastage in urban environments."
              },
              {
                title: "Autonomous Construction Robotics",
                image: "/placeholder.svg?height=300&width=400&text=Project 3",
                researchers: "Dr. Sarah Johnson, Dr. David Lee",
                period: "2022-2025",
                description: "Development of AI-guided robots for construction tasks that improve safety and efficiency on construction sites."
              }
            ].map((project, i) => (
              <Card key={i} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <Badge className="bg-rusty-red/90 text-white border-none hover:bg-rusty-red">Featured</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-rusty-red text-xl group-hover:text-muted-gold transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-light-brown text-sm mt-1">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="mr-3 text-xs">{project.researchers}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-xs">{project.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-light-brown text-sm">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-rusty-red font-medium text-sm flex items-center hover:text-muted-gold transition-colors">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-rusty-red">Recent Publications</h2>
              <p className="mt-2 text-lg text-light-brown">Our latest research contributions to the field</p>
            </div>
            <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10 mt-4 md:mt-0">
              View All Publications
            </Button>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "AI-Driven Structural Health Monitoring: A Comprehensive Review",
                authors: "Kumar, R., Patel, S., Khan, A. (2024)",
                journal: "Journal of Sustainable Infrastructure, 12(3), 245-267",
                description: "This paper reviews the latest advancements in AI-based structural health monitoring systems and their applications in civil infrastructure, highlighting key challenges and future research directions.",
                citations: 24
              },
              {
                title: "Machine Learning Applications in Construction Safety Management",
                authors: "Johnson, S., Lee, D., Patel, S. (2023)",
                journal: "Construction Management and Economics, 41(2), 118-135",
                description: "This research examines how machine learning can be applied to improve safety management on construction sites through automated hazard detection and risk assessment.",
                citations: 17
              },
              {
                title: "Sustainable Urban Water Management using Deep Reinforcement Learning",
                authors: "Khan, A., Chen, M., Kumar, R. (2024)",
                journal: "Water Resources Research, 60(1), 78-93",
                description: "This study presents a novel deep reinforcement learning approach for optimizing water distribution networks in urban environments to reduce energy consumption and water loss.",
                citations: 9
              }
            ].map((publication, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow border-l-4 border-l-muted-gold">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <FileText className="h-10 w-10 text-rusty-red mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-rusty-red text-xl font-semibold">{publication.title}</h3>
                        <Badge className="bg-muted-gold/20 text-muted-gold border-none hover:bg-muted-gold/30">
                          {publication.citations} Citations
                        </Badge>
                      </div>
                      <p className="text-muted-gold text-sm mb-3">
                        {publication.authors}. {publication.journal}.
                      </p>
                      <p className="text-light-brown mb-4">
                        {publication.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-rusty-red border-rusty-red hover:bg-rusty-red/10 h-9"
                        >
                          <Download className="mr-1 h-4 w-4" /> Download PDF
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-light-brown hover:text-rusty-red hover:bg-transparent p-0 h-9"
                        >
                          <ExternalLink className="mr-1 h-4 w-4" /> View Publisher Site
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-rusty-red/10 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-rusty-red mb-3">Stay Updated with Our Research</h2>
          <p className="text-light-brown mb-6">Subscribe to our newsletter to receive updates on our latest research findings, upcoming events, and collaboration opportunities.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-md border border-warm-beige focus:outline-none focus:ring-2 focus:ring-muted-gold"
            />
            <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}