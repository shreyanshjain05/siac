'use client'
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/section-title"
import { 
  ArrowRight, 
  Cpu, 
  Leaf, 
  BarChart3, 
  GraduationCap, 
  ChevronRight,
  ArrowDown,
  ExternalLink,
  Clock,
  Globe
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { useEffect, useState } from "react"

// Custom hook for animations on scroll
const useScrollAnimation = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  return scrolled;
};

// Arrow Up icon component
interface ArrowUpProps extends React.SVGProps<SVGSVGElement> {}

function ArrowUp(props: ArrowUpProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}

// Reusable components
function ImpactCircle({ 
  icon, 
  title, 
  description, 
  stat, 
  statLabel 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  stat: string; 
  statLabel: string; 
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 transition-all hover:transform hover:translate-y-[-5px]">
      <div className="bg-rusty-red rounded-full p-5 mb-6 shadow-lg">
        {icon}
      </div>
      <div className="mb-3">
        <span className="block text-3xl font-bold text-rusty-red">{stat}</span>
        <span className="text-sm text-light-brown/80">{statLabel}</span>
      </div>
      <h3 className="text-xl font-semibold text-rusty-red mb-3">{title}</h3>
      <p className="text-light-brown">{description}</p>
    </div>
  )
}

function ResearchCard({ 
  title, 
  description, 
  image,
  tags
}: { 
  title: string; 
  description: string; 
  image: string; 
  tags: string[]; 
}) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardHeader className="bg-white border-b border-warm-beige/20">
        <CardTitle className="text-rusty-red">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-light-brown text-base">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-golden-brown/10 text-rusty-red px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Link
          href="/research"
          className="text-rusty-red font-medium flex items-center hover:underline transition-all group-hover:font-semibold"
        >
          Learn more
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}

function SDGCard({ 
  number, 
  title, 
  description, 
  color 
}: { 
  number: string; 
  title: string; 
  description: string; 
  color: string; 
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
      <div className={`${color} h-2`}></div>
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className={`${color} text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center shrink-0`}>
            {number}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
            <p className="text-light-brown">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatisticItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-white/80">{label}</div>
    </div>
  )
}

export default function Home() {
  const scrolled = useScrollAnimation();
  
  // Common button styles
  const primaryButtonClasses = "bg-rusty-red hover:bg-rusty-red/90 text-white rounded-lg shadow-md hover:shadow-lg transition-all";
  const outlineButtonClasses = "border-rusty-red text-rusty-red hover:bg-rusty-red/10 rounded-lg";
  
  // Research data
  const researchAreas = [
    {
      title: "AI Applications in Civil Engineering",
      description: "Developing AI-driven solutions for structural health monitoring, predictive maintenance, and construction automation.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Machine Learning", "Computer Vision", "IoT"]
    },
    {
      title: "Sustainable & Smart Infrastructure",
      description: "Creating intelligent systems for green building design, smart water management, and disaster risk assessment.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Smart Cities", "Energy Efficiency", "Resilience"]
    },
    {
      title: "Technology Transfer & Commercialization",
      description: "Facilitating the journey from research to market-ready products through patenting, licensing, and industry collaboration.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Innovation", "Industry Partnerships", "Startups"]
    }
  ];
  
  // SDG data
  const sdgData = [
    {
      number: "9",
      title: "Industry, Innovation & Infrastructure",
      description: "Developing resilient infrastructure and fostering innovation in engineering and construction",
      color: "bg-blue-600"
    },
    {
      number: "11",
      title: "Sustainable Cities & Communities",
      description: "Creating inclusive, safe, resilient and sustainable urban environments",
      color: "bg-amber-600"
    },
    {
      number: "13",
      title: "Climate Action",
      description: "Driving research in renewable energy and climate-resilient infrastructure",
      color: "bg-green-600"
    }
  ];
  
  // Impact data
  const impactData = [
    {
      icon: <GraduationCap className="h-10 w-10 text-white" />,
      title: "Education",
      description: "Creating specialized jobs in AI-integrated engineering",
      stat: "200+",
      statLabel: "Students Trained"
    },
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      title: "Innovation",
      description: "Accelerating AI adoption in construction",
      stat: "15+",
      statLabel: "Patents Filed"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: "Resilience",
      description: "Improved infrastructure monitoring and maintenance",
      stat: "30%",
      statLabel: "Efficiency Gain"
    },
    {
      icon: <Leaf className="h-10 w-10 text-white" />,
      title: "Sustainability",
      description: "Enhanced sustainability in infrastructure development",
      stat: "40%",
      statLabel: "Carbon Reduction"
    }
  ];
  
  // Statistics data
  const statistics = [
    { number: "25+", label: "Research Projects" },
    { number: "12", label: "Industry Partners" },
    { number: "8", label: "Academic Collaborations" },
    { number: "₹45M+", label: "Research Funding" }
  ];
  
  return (
    <div className="flex flex-col">
      {/* Hero Section - Enhanced with animations and scroll indicator */}
      <section
        className="h-[85vh] flex items-center justify-center bg-gradient-to-br from-golden-brown/90 to-warm-beige/90 relative"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
  <span className="text-rusty-red">S</span>ustainable <span className="text-rusty-red">I</span>nfrastructure & <span className="text-rusty-red">A</span>I <span className="text-rusty-red">C</span>entre
</h1>

            <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
              Integrating cutting-edge AI into civil engineering for efficiency, sustainability, and resilience
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-rusty-red hover:bg-rusty-red/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                <Link href="/about">Discover SIAC</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-black hover:bg-white/20 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Banner */}
      <section className="py-10 bg-rusty-red text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-medium mb-2">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Revolutionizing civil engineering through AI integration to build a more sustainable, efficient, and resilient future.
            </p>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-section" className="py-24 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="About SIAC"
            subtitle="The Centre of Excellence in Civil Engineering with AI"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white font-medium">Our state-of-the-art research facility</p>
                </div>
              </div>
              <img 
                src="/green-city.png?height=600&width=800" 
                alt="SIAC Research Centre" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-px bg-rusty-red flex-grow max-w-12"></div>
                {/* <span className="text-rusty-red font-medium text-2xl">Our Vision</span> */}
              </div>

              
              <p className="text-lg text-light-brown leading-relaxed">
                The Centre of Excellence (CoE) in Civil Engineering with AI aims to integrate cutting-edge Artificial
                Intelligence solutions into civil engineering to enhance efficiency, sustainability, and resilience in
                infrastructure development.
              </p>
              
              <p className="text-lg text-light-brown leading-relaxed">
                Our mission is to revolutionize practices and drive economic growth through technology transfer and
                commercialization of AI-driven solutions for civil engineering challenges.
              </p>
              
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-golden-brown/10 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-rusty-red" />
                  </div>
                  <div>
                    <h3 className="font-medium text-rusty-red">Established</h3>
                    <p className="text-light-brown">2025</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-golden-brown/10 p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-rusty-red" />
                  </div>
                  <div>
                    <h3 className="font-medium text-rusty-red">Global Impact</h3>
                    <p className="text-light-brown">15+ Countries</p>
                  </div>
                </div>
              </div> */}
              
              <div className="pt-6">
                <Button asChild className={primaryButtonClasses}>
                  <Link href="/about" className="flex items-center">
                    Learn More About SIAC
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UN SDG Alignment Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-golden-brown/5 to-warm-beige/5">
        <div className="container mx-auto">
          <SectionTitle
            title="UN SDG Alignment"
            subtitle="Contributing to global sustainability goals"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {sdgData.map((sdg, index) => (
              <SDGCard 
                key={index}
                number={sdg.number}
                title={sdg.title}
                description={sdg.description}
                color={sdg.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Impact"
            subtitle="Transforming civil engineering through AI innovation"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {impactData.map((impact, index) => (
              <ImpactCircle
                key={index}
                icon={impact.icon}
                title={impact.title}
                description={impact.description}
                stat={impact.stat}
                statLabel={impact.statLabel}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" className={outlineButtonClasses + " group"}>
              <Link href="/impact" className="flex items-center">
                Explore Our Impact
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Research Focus Areas"
            subtitle="Exploring the intersection of AI and civil engineering"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {researchAreas.map((area, index) => (
              <ResearchCard
                key={index}
                title={area.title}
                description={area.description}
                image={area.image}
                tags={area.tags}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild className={primaryButtonClasses}>
              <Link href="/research" className="flex items-center">
                View All Research Areas
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-rusty-red text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <StatisticItem 
                key={index}
                number={stat.number} 
                label={stat.label} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-warm-beige to-golden-brown/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-golden-brown/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rusty-red/5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-rusty-red mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-light-brown mb-10 max-w-2xl mx-auto">
            Join us in revolutionizing civil engineering through AI innovation. Whether you're from industry, academia,
            or government, we have partnership opportunities for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-rusty-red hover:bg-rusty-red/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact" className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-rusty-red text-rusty-red hover:bg-rusty-red/10 px-8 py-6 text-lg rounded-lg"
            >
              <Link href="/partnerships" className="flex items-center">
                Explore Partnerships
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className={`fixed bottom-6 right-6 bg-rusty-red text-white p-3 rounded-full shadow-lg transition-all ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  )
}