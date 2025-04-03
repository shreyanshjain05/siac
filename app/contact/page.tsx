import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with the SIAC team for inquiries, collaborations, or more information about our research and services."
      />

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Get In Touch"
                subtitle="We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible."
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-rusty-red mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-rusty-red text-lg">Email Us</h3>
                    <p className="text-light-brown">info@siac.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-rusty-red mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-rusty-red text-lg">Call Us</h3>
                    <p className="text-light-brown">+91 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-rusty-red mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-rusty-red text-lg">Visit Us</h3>
                    <p className="text-light-brown">SIAC Building, University Campus, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-rusty-red mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-rusty-red text-lg">Working Hours</h3>
                    <p className="text-light-brown">Monday to Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-light-brown">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-rusty-red text-xl mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-rusty-red flex items-center justify-center text-white hover:bg-rusty-red/90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-rusty-red flex items-center justify-center text-white hover:bg-rusty-red/90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-rusty-red flex items-center justify-center text-white hover:bg-rusty-red/90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-rusty-red flex items-center justify-center text-white hover:bg-rusty-red/90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-warm-beige shadow-md">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-rusty-red font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-3 border border-light-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-rusty-red"
                          placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-rusty-red font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-3 border border-light-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-rusty-red"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-rusty-red font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full p-3 border border-light-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-rusty-red"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-rusty-red font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full p-3 border border-light-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-rusty-red"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <Button className="bg-rusty-red hover:bg-rusty-red/90 text-white w-full flex items-center justify-center">
                      <Send className="h-4 w-4 mr-2" />
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
        <div className="text-justify">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about SIAC"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-rusty-red font-semibold text-lg mb-3">How can I collaborate with SIAC?</h3>
              <p className="text-light-brown">
                We welcome collaborations from industry, academia, and government organizations. Please contact us
                through the form above or email us at info@siac.org to discuss potential collaboration opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-rusty-red font-semibold text-lg mb-3">Do you offer consultancy services?</h3>
              <p className="text-light-brown">
                Yes, we provide specialized consultancy services in AI-integrated civil engineering solutions. Our
                expert team can help with technical feasibility studies, AI implementation strategies, and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-rusty-red font-semibold text-lg mb-3">
                How can I access your research publications?
              </h3>
              <p className="text-light-brown">
                Our research publications are available on our website under the Insights section. You can also find
                them in relevant academic journals and conference proceedings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-rusty-red font-semibold text-lg mb-3">Do you offer training programs?</h3>
              <p className="text-light-brown">
                Yes, we offer specialized training programs and workshops in AI applications for civil engineering.
                Contact us for more information on upcoming training opportunities.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* Replace with actual map implementation */}
            <div className="w-full h-full flex items-center justify-center bg-warm-beige/20">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-rusty-red mx-auto mb-4" />
                <h3 className="text-rusty-red font-semibold text-xl mb-2">Our Location</h3>
                <p className="text-light-brown">SIAC Building, University Campus, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 px-4 bg-warm-beige">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-rusty-red mb-6">Need Quick Assistance?</h2>
          <p className="text-xl text-light-brown mb-8 max-w-2xl mx-auto">
            Our team is ready to answer your questions and provide the support you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-rusty-red hover:bg-rusty-red/90 text-white flex items-center justify-center">
              <Phone className="h-4 w-4 mr-2" />
              Call Us Now
            </Button>
            <Button
              variant="outline"
              className="border-rusty-red text-rusty-red hover:bg-rusty-red/10 flex items-center justify-center"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Live Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

