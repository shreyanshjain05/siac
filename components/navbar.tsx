"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/facilities" },
  { name: "Research", href: "/research" },
  { name: "Insights", href: "/insights" },
  // { name: "Impact", href: "/impact" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
<nav
  className={`w-full transition-all duration-300 mb-0 ${
    isScrolled ? "bg-gray-900 shadow-md py-1" : "bg-gray-900/90 py-2"
  }`}
>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl flex items-center">
          <span className="bg-rusty-red text-white px-2 py-1 rounded mr-2">S</span>
          <span>IAC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-white hover:text-rusty-red font-medium transition-colors",
                  isActive && "bg-rusty-red/10 text-rusty-red font-semibold",
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-reddish-brown hover:text-rusty-red hover:bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
      <div
        className={cn(
          "fixed right-0 top-[50px] w-full h-auto max-h-[80vh] bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden shadow-lg rounded-bl-lg",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-white hover:text-rusty-red font-medium transition-colors",
                      isActive && "bg-rusty-red/10 text-rusty-red font-semibold",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

