import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Calendar, User, ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function InsightsPage() {
  return (
    <div>
    <div className="text-justify">
      <PageHeader
        title="Insights"
        description="Explore our latest publications, articles, and reports on AI in civil engineering and sustainable infrastructure."
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="publications" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-warm-beige">
              {/* <TabsTrigger value="publications">Publications</TabsTrigger> */}
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            {/* <TabsContent value="publications" className="mt-8">
              <SectionTitle
                title="Academic Publications"
                subtitle="Our contributions to advancing knowledge in AI and civil engineering"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden border-warm-beige hover:shadow-md transition-shadow">
                    <CardHeader className="bg-warm-beige/20 pb-3">
                      <CardTitle className="text-rusty-red text-xl flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 flex-shrink-0" />
                        AI-Driven Structural Health Monitoring: A Comprehensive Review
                      </CardTitle>
                      <CardDescription className="text-light-brown">
                        Journal of Sustainable Infrastructure, 2024
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-light-brown mb-4">
                        This paper reviews the latest advancements in AI-based structural health monitoring systems and
                        their applications in civil infrastructure, highlighting key challenges and future research
                        directions.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            Authors: Kumar, R., Patel, S.
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Published: March 2024
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-muted-foreground">Citations: 24</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-rusty-red border-rusty-red hover:bg-rusty-red/10"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
                  View All Publications
                </Button>
              </div>
            </TabsContent> */}

            <TabsContent value="articles" className="mt-8">
              <SectionTitle
                title="Articles & Blog Posts"
                subtitle="Insights and perspectives on the latest trends in AI and civil engineering"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden border-warm-beige hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=200&width=400&text=Article ${i}`}
                        alt={`Article ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-rusty-red text-lg">
                        The Future of AI in Construction: Transforming the Industry
                      </CardTitle>
                      <CardDescription className="text-light-brown flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        March 15, 2024
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <p className="text-light-brown line-clamp-3 mb-4">
                        Exploring how artificial intelligence is transforming the construction industry with smarter,
                        more efficient processes and innovative solutions for long-standing challenges.
                      </p>
                      <Link href="#" className="text-rusty-red font-medium flex items-center hover:underline">
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
                  View All Articles
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="mt-8">
              <SectionTitle
                title="Technical Reports"
                subtitle="Comprehensive analyses and findings from our research projects"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden border-warm-beige hover:shadow-md transition-shadow flex">
                    <div className="w-1/4 bg-gradient-to-br from-muted-gold to-warm-beige flex items-center justify-center p-4">
                      <FileText className="h-16 w-16 text-white" />
                    </div>
                    <div className="w-3/4">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-rusty-red text-lg">
                          Annual Research Report 2024: AI in Civil Engineering
                        </CardTitle>
                        <CardDescription className="text-light-brown flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Published: January 2024
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <p className="text-light-brown mb-4">
                          Comprehensive overview of research activities, achievements, and future directions at SIAC,
                          with a focus on AI applications in civil engineering.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-rusty-red border-rusty-red hover:bg-rusty-red/10"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-16 px-4 bg-warm-beige/20">
        <div className="container mx-auto">
          <SectionTitle title="Featured Insight" subtitle="Spotlight on our most impactful research" align="center" />

          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src="/placeholder.svg?height=400&width=300&text=Featured"
                  alt="Featured Research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold text-rusty-red mb-3">
                  Revolutionizing Infrastructure Monitoring with AI and IoT
                </h3>
                <p className="text-muted-gold mb-4">By Dr. Rajesh Kumar & Dr. Sunita Patel | April 2024</p>
                <p className="text-light-brown mb-6 leading-relaxed">
                  This groundbreaking research demonstrates how the integration of AI and IoT technologies can transform
                  infrastructure monitoring, enabling real-time assessment, predictive maintenance, and enhanced safety
                  measures for critical infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-rusty-red hover:bg-rusty-red/90 text-white">Read Full Article</Button>
                  <Button variant="outline" className="border-rusty-red text-rusty-red hover:bg-rusty-red/10">
                    <Download className="h-4 w-4 mr-1" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

