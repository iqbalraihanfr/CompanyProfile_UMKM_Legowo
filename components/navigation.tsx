"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { t, setLanguage, language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#contact", label: t.nav.contact },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("#home")} className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center duration-200 overflow-hidden">
              <img
                src="/logonavBaru.png"
                alt="Logo Zyfini"
                className="w-13 h-13 object-contain"
              />
            </div>
            <span className={`text-heading-xl font-semibold ${scrolled ? "text-black" : "text-white"}`}>
              {t.nav.brand}
            </span>

          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`hover:underline underline-offset-4 text-body-md font-medium transition-colors duration-200 hover:text-accent-primary rounded-md px-3 py-2 ${scrolled ? "text-black" : "text-white"} focus:outline-none`}
              >
                {item.label}
              </button>
            ))}

          </div>


          {/* Language Selector */}
          <div className="hidden md:block">
            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="flex items-center gap-2 px-3 py-2 text-body-md font-medium text-text-secondary hover:text-accent-primary rounded-md transition duration-200"
            >
              <span className="text-lg">🌐</span>
              <span>{language === "id" ? "EN" : "ID"}</span>
            </button>

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
                  className="text-body-md font-medium transition-colors duration-200 hover:text-accent-primary focus-ring rounded-md px-3 py-2 text-white text-left"

                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-accent-primary hover:bg-accent-hover text-white font-medium px-6 py-2.5 rounded-lg transition-colors duration-200 focus-ring w-full mt-4"
              >
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
