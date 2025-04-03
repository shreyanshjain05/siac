import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, Users, Calendar } from "lucide-react"
import Link from "next/link"

export default function ResearchPage() {
  return (
    <div>
    <div className="text-justify">
      <PageHeader
        title="Research@Focus"
        description="Exploring the intersection of AI and civil engineering to develop innovative solutions for sustainable infrastructure."
      />

      {/* Research Areas Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Research Focus Areas"
            subtitle="Driving innovation through interdisciplinary research"
          />

          <Tabs defaultValue="ai-applications" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-warm-beige">
              <TabsTrigger value="ai-applications">AI Applications in Civil Engineering</TabsTrigger>
              <TabsTrigger value="sustainable">Sustainable & Smart Infrastructure</TabsTrigger>
              <TabsTrigger value="technology">Technology Transfer & Commercialization</TabsTrigger>
            </TabsList>

            <TabsContent value="ai-applications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <div className="text-justify"> */}
                <div>
                  <h3 className="text-rusty-red text-2xl font-semibold mb-4">AI Applications in Civil Engineering</h3>
                  <p className="text-light-brown text-lg mb-6 leading-relaxed">
                    Our research in AI applications for civil engineering focuses on developing intelligent systems that
                    can enhance the design, construction, monitoring, and maintenance of infrastructure. By leveraging
                    machine learning, computer vision, and other AI technologies, we aim to improve efficiency, safety,
                    and sustainability in civil engineering practices.
                  </p>
                  <ul className="space-y-4 text-light-brown mb-6">
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">AI-driven structural health monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">Smart predictive maintenance of infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">AI-based geotechnical analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">AI-powered construction automation & robotics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">Sustainable urban planning using AI</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white">Current Projects</Button>
                    <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
                      Research Papers
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg?height=600&width=800&text=AI in Civil Engineering"
                    alt="AI Applications in Civil Engineering"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            {/* </div> */}
            </TabsContent>

            <TabsContent value="sustainable" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <div className="text-justify"> */}
                <div>
                  <h3 className="text-rusty-red text-2xl font-semibold mb-4">Sustainable & Smart Infrastructure</h3>
                  <p className="text-light-brown text-lg mb-6 leading-relaxed">
                    Our research in sustainable and smart infrastructure focuses on developing innovative solutions that
                    minimize environmental impact while maximizing efficiency and resilience. By integrating AI, IoT,
                    and other advanced technologies, we aim to create infrastructure systems that are adaptive,
                    responsive, and sustainable.
                  </p>
                  <ul className="space-y-4 text-light-brown mb-6">
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">AI for green building design and energy optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">Smart water management systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">AI-powered disaster risk assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">Sustainable material selection with AI-based recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">Climate-resilient infrastructure design</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white">Current Projects</Button>
                    <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
                      Research Papers
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg?height=600&width=800&text=Smart Infrastructure"
                    alt="Sustainable & Smart Infrastructure"
                    className="w-full h-auto"
                  />
                </div>
              {/* </div> */}
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-rusty-red text-2xl font-semibold mb-4">
                    Technology Transfer & Commercialization
                  </h3>
                  <p className="text-light-brown text-lg mb-6 leading-relaxed">
                    Our research in technology transfer and commercialization focuses on bridging the gap between
                    academic research and industry application. We develop strategies and frameworks for effectively
                    translating innovative AI-driven civil engineering solutions into commercial products and services
                    that can benefit society.
                  </p>
                  <ul className="space-y-4 text-light-brown mb-6">
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">
                        Patenting and licensing of innovative AI-driven civil engineering solutions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">Industry collaboration for product development and pilot projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">
                        Incubation support for startups focusing on AI in civil engineering
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rusty-red font-bold mr-2">•</span>
                      <span className="text-lg">Market analysis and commercialization strategies</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white">Current Projects</Button>
                    <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
                      Research Papers
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg?height=600&width=800&text=Technology Transfer"
                    alt="Technology Transfer & Commercialization"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Featured Research Projects"
            subtitle="Innovative projects at the intersection of AI and civil engineering"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-warm-beige hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=Project ${i}`}
                    alt={`Research Project ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-rusty-red">AI-Driven Structural Health Monitoring System</CardTitle>
                  <div className="flex items-center text-light-brown text-sm mt-2">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="mr-4">Dr. Rajesh Kumar, Dr. Sunita Patel</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2023-2025</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-light-brown mb-4">
                    This project develops an AI-powered system for real-time monitoring of structural health, enabling
                    early detection of potential issues and predictive maintenance.
                  </p>
                  <Link href="#" className="text-rusty-red font-medium flex items-center hover:underline">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white">View All Research Projects</Button>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle title="Recent Publications" subtitle="Our latest research contributions to the field" />

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-warm-beige hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <FileText className="h-10 w-10 text-rusty-red mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-rusty-red text-xl font-semibold mb-2">
                        AI-Driven Structural Health Monitoring: A Comprehensive Review
                      </h3>
                      <p className="text-muted-gold mb-2">
                        Kumar, R., Patel, S., Khan, A. (2024). Journal of Sustainable Infrastructure, 12(3), 245-267.
                      </p>
                      <p className="text-light-brown mb-4">
                        This paper reviews the latest advancements in AI-based structural health monitoring systems and
                        their applications in civil infrastructure, highlighting key challenges and future research
                        directions.
                      </p>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-rusty-red border-rusty-red hover:bg-rusty-red/10 mr-4"
                        >
                          Download PDF
                        </Button>
                        <span className="text-light-brown text-sm">Citations: 24</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
              View All Publications
            </Button>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

