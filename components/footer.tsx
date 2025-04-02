import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Insights", href: "/insights" },
  { name: "Facilities", href: "/facilities" },
  { name: "Impact", href: "/impact" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-desert-sand py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-rusty-red font-bold text-2xl flex items-center mb-4">
              <span className="bg-rusty-red text-white px-2 py-1 rounded mr-2">S</span>
              <span>IAC</span>
            </Link>
            <p className="text-light-brown">
              Sustainable Infrastructure & AI Research Centre - Integrating AI into civil engineering for efficiency,
              sustainability, and resilience.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-rusty-red hover:text-reddish-brown transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-rusty-red hover:text-reddish-brown transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-rusty-red hover:text-reddish-brown transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-rusty-red hover:text-reddish-brown transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-rusty-red font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-reddish-brown hover:text-rusty-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-rusty-red font-bold text-xl mb-4">Contact Us</h3>
            <address className="not-italic text-light-brown space-y-3">
              <p className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-rusty-red" />
                <span>info@siac.org</span>
              </p>
              <p className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-rusty-red" />
                <span>+91 123 456 7890</span>
              </p>
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-rusty-red" />
                <span>SIAC Building, University Campus, India</span>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-rusty-red font-bold text-xl mb-4">Newsletter</h3>
            <p className="text-light-brown mb-3">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded border border-light-brown/30 focus:outline-none focus:ring-2 focus:ring-rusty-red"
              />
              <button
                type="submit"
                className="bg-rusty-red hover:bg-rusty-red/90 text-white py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-light-brown/30 mt-8 pt-8 text-center">
          <p className="text-light-brown">© 2025 SIAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

