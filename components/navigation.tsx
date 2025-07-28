"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border-primary backdrop-blur-xs bg-background-primary/95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("#home")} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-accent-primary rounded-xl flex items-center justify-center group-hover:bg-accent-hover transition-colors duration-200">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-heading-lg font-semibold text-text-primary">TechVision</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-body-md font-medium transition-colors duration-200 hover:text-accent-primary focus-ring rounded-md px-3 py-2 text-text-secondary"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-accent-primary hover:bg-accent-hover text-white font-medium px-6 py-2.5 rounded-lg transition-colors duration-200 focus-ring"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-background-tertiary transition-colors duration-200 focus-ring"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-text-primary mb-1"></span>
            <span className="block w-6 h-0.5 bg-text-primary mb-1"></span>
            <span className="block w-6 h-0.5 bg-text-primary"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border-primary">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-body-md font-medium transition-colors duration-200 hover:text-accent-primary focus-ring rounded-md px-3 py-2 text-text-secondary text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-accent-primary hover:bg-accent-hover text-white font-medium px-6 py-2.5 rounded-lg transition-colors duration-200 focus-ring w-full mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
