"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContainerScrollAnimation } from "@/components/ui/container-scroll-animation"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { ColorfulText } from "@/components/ui/colorful-text"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Timeline } from "@/components/ui/timeline"
import { ImageGallery } from "@/components/ui/image-gallery"
import { MasonryGallery } from "@/components/ui/masonry-gallery"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container"
import type React from "react"

export default function HomePage() {
  const flipWords = ["Future", "Innovation", "Excellence", "Success"]

  // Portfolio state
  const [activeFilter, setActiveFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry")

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Timeline data for About section
  const timelineData = [
    {
      title: "Our Mission",
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center border border-accent-primary/20">
              <span className="text-accent-primary font-bold text-lg">M</span>
            </div>
            <div>
              <h4 className="text-heading-lg font-semibold text-text-primary mb-3">Empowering Business Growth</h4>
              <p className="text-body-md text-text-secondary leading-relaxed mb-4">
                To empower businesses with innovative technology solutions that drive growth and efficiency. We believe
                technology should be an enabler, not a barrier to success.
              </p>
              <ul className="space-y-2">
                {[
                  "Drive digital transformation",
                  "Increase operational efficiency",
                  "Enable scalable growth",
                  "Foster innovation culture",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-body-sm text-text-secondary">
                    <span className="w-2 h-2 bg-accent-primary rounded-full mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Our Values",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                letter: "I",
                title: "Innovation",
                description: "Continuous learning and staying ahead of technology trends",
              },
              {
                letter: "C",
                title: "Client Success",
                description: "Your success is our priority and measure of achievement",
              },
              {
                letter: "E",
                title: "Excellence",
                description: "Quality and attention to detail in everything we do",
              },
              {
                letter: "T",
                title: "Integrity",
                description: "Transparency and open communication in all relationships",
              },
            ].map((value, idx) => (
              <div key={idx} className="p-6 bg-background-secondary rounded-xl border border-border-primary">
                <div className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center mb-3 border border-accent-primary/20">
                  <span className="text-accent-primary font-bold">{value.letter}</span>
                </div>
                <h5 className="text-heading-md font-semibold text-text-primary mb-2">{value.title}</h5>
                <p className="text-body-sm text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Our Vision",
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center border border-accent-primary/20">
              <span className="text-accent-primary font-bold text-lg">V</span>
            </div>
            <div>
              <h4 className="text-heading-lg font-semibold text-text-primary mb-3">Shaping the Digital Future</h4>
              <p className="text-body-md text-text-secondary leading-relaxed mb-6">
                To be the leading technology partner for businesses worldwide, shaping the digital future through
                innovative solutions and exceptional service delivery.
              </p>
              <div className="bg-accent-primary/5 rounded-xl p-6 border border-accent-primary/20">
                <h5 className="text-heading-md font-semibold text-text-primary mb-3">2030 Goals</h5>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-heading-xl font-semibold text-accent-primary">1000+</div>
                    <div className="text-body-sm text-text-secondary">Global Clients</div>
                  </div>
                  <div>
                    <div className="text-heading-xl font-semibold text-accent-primary">50+</div>
                    <div className="text-body-sm text-text-secondary">Countries</div>
                  </div>
                  <div>
                    <div className="text-heading-xl font-semibold text-accent-primary">100+</div>
                    <div className="text-body-sm text-text-secondary">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Our Team",
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center border border-accent-primary/20">
              <span className="text-accent-primary font-bold text-lg">T</span>
            </div>
            <div>
              <h4 className="text-heading-lg font-semibold text-text-primary mb-3">
                Diverse & Passionate Professionals
              </h4>
              <p className="text-body-md text-text-secondary leading-relaxed mb-6">
                A diverse group of passionate professionals dedicated to delivering exceptional results. Our team
                combines technical expertise with creative problem-solving to tackle complex challenges.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-background-secondary rounded-lg border border-border-primary">
                  <h5 className="text-heading-md font-semibold text-text-primary mb-2">Technical Excellence</h5>
                  <p className="text-body-sm text-text-secondary">Expert developers, architects, and engineers</p>
                </div>
                <div className="p-4 bg-background-secondary rounded-lg border border-border-primary">
                  <h5 className="text-heading-md font-semibold text-text-primary mb-2">Creative Innovation</h5>
                  <p className="text-body-sm text-text-secondary">
                    Designers and strategists who think outside the box
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  // Portfolio data
  const portfolioImages = [
    {
      id: "1",
      src: "/placeholder.svg?height=400&width=600",
      title: "E-Commerce Platform",
      category: "Web Development",
      height: 300,
      description: "Modern e-commerce platform with advanced analytics and user management",
    },
    {
      id: "2",
      src: "/placeholder.svg?height=500&width=600",
      title: "FinTech Mobile App",
      category: "Mobile Development",
      height: 400,
      description: "Secure financial mobile application with biometric authentication",
    },
    {
      id: "3",
      src: "/placeholder.svg?height=350&width=600",
      title: "AI Analytics Dashboard",
      category: "AI/ML",
      height: 280,
      description: "Machine learning dashboard for predictive analytics and data visualization",
    },
    {
      id: "4",
      src: "/placeholder.svg?height=450&width=600",
      title: "Cloud Infrastructure",
      category: "Cloud Solutions",
      height: 360,
      description: "Scalable cloud architecture for enterprise-level applications",
    },
    {
      id: "5",
      src: "/placeholder.svg?height=380&width=600",
      title: "Design System",
      category: "UI/UX Design",
      height: 320,
      description: "Comprehensive design system with reusable components and guidelines",
    },
    {
      id: "6",
      src: "/placeholder.svg?height=340&width=600",
      title: "Healthcare Platform",
      category: "Web Development",
      height: 340,
      description: "Patient management system with telemedicine capabilities",
    },
    {
      id: "7",
      src: "/placeholder.svg?height=290&width=600",
      title: "Logistics Tracker",
      category: "Mobile Development",
      height: 290,
      description: "Real-time logistics tracking application with GPS integration",
    },
    {
      id: "8",
      src: "/placeholder.svg?height=380&width=600",
      title: "Data Visualization",
      category: "AI/ML",
      height: 380,
      description: "Interactive data visualization platform for business intelligence",
    },
    {
      id: "9",
      src: "/placeholder.svg?height=260&width=600",
      title: "Microservices Setup",
      category: "Cloud Solutions",
      height: 260,
      description: "Containerized microservices architecture with auto-scaling",
    },
    {
      id: "10",
      src: "/placeholder.svg?height=350&width=600",
      title: "Brand Identity",
      category: "UI/UX Design",
      height: 350,
      description: "Complete brand identity design with logo and visual guidelines",
    },
    {
      id: "11",
      src: "/placeholder.svg?height=310&width=600",
      title: "Social Platform",
      category: "Web Development",
      height: 310,
      description: "Social networking platform with real-time messaging and content sharing",
    },
    {
      id: "12",
      src: "/placeholder.svg?height=370&width=600",
      title: "IoT Dashboard",
      category: "AI/ML",
      height: 370,
      description: "IoT device monitoring and control dashboard with predictive maintenance",
    },
  ]

  const categories = ["all", "Web Development", "Mobile Development", "AI/ML", "Cloud Solutions", "UI/UX Design"]
  const filteredImages =
    activeFilter === "all" ? portfolioImages : portfolioImages.filter((img) => img.category === activeFilter)

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section id="home" className="pt-20">
        <ContainerScrollAnimation>
          <div className="px-6 py-20 lg:py-32">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-background-tertiary rounded-full text-body-sm mb-8 border border-border-primary">
                <span className="text-accent-primary font-medium">Introducing TechVision 2024</span>
              </div>

              <h1 className="text-display-xl lg:text-[5rem] font-semibold mb-6 text-text-primary leading-tight">
                Building the{" "}
                <ContainerTextFlip words={flipWords} className="text-display-xl lg:text-[5rem] font-semibold" /> of{" "}
                <ColorfulText text="Technology" className="text-display-xl lg:text-[5rem] font-semibold" />
              </h1>

              <div className="mb-12 max-w-3xl mx-auto">
                <TextGenerateEffect
                  words="We create innovative digital solutions that transform businesses and empower teams to achieve extraordinary results in the modern world."
                  className="text-body-lg leading-relaxed"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-accent-primary hover:bg-accent-hover text-white font-medium text-body-lg px-8 py-4 rounded-lg transition-all duration-200 focus-ring inline-flex items-center justify-center"
                >
                  Explore Our Work
                </button>
                <button
                  onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                  className="border border-border-secondary hover:bg-background-tertiary text-text-primary font-medium text-body-lg px-8 py-4 rounded-lg transition-all duration-200 focus-ring bg-transparent"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </ContainerScrollAnimation>

        {/* Stats Section */}
        <ScrollReveal direction="up" className="px-6 py-16 bg-background-secondary">
          <StaggerContainer className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <StaggerItem
                key={index}
                className="text-center p-6 rounded-xl bg-background-tertiary border border-border-primary hover:border-accent-primary/30 transition-colors duration-200"
              >
                <div className="text-display-sm font-semibold text-accent-primary mb-2">{stat.number}</div>
                <div className="text-body-sm text-text-secondary font-medium">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Features Section */}
        <ScrollReveal direction="up" delay={0.2} className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-display-md font-semibold mb-6 text-text-primary">Why Choose TechVision?</h2>
              <p className="text-body-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                We combine cutting-edge technology with creative solutions to deliver exceptional results for our
                clients.
              </p>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "We stay ahead of technology trends to provide you with the most advanced solutions.",
                },
                {
                  title: "Client-Focused",
                  description: "Your success is our priority. We work closely with you to achieve your goals.",
                },
                {
                  title: "Proven Results",
                  description: "Our track record speaks for itself with 500+ successful projects delivered.",
                },
              ].map((item, index) => (
                <StaggerItem
                  key={index}
                  className="p-8 rounded-xl bg-background-secondary border border-border-primary hover:border-accent-primary/30 transition-all duration-200 group"
                >
                  <h3 className="text-heading-xl font-semibold mb-4 text-accent-primary group-hover:text-accent-hover transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-text-secondary leading-relaxed">{item.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-display-lg font-semibold mb-6 text-text-primary">About TechVision</h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Founded in 2019, TechVision has been at the forefront of digital innovation, helping businesses transform
              their operations through cutting-edge technology solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <Timeline data={timelineData} />
          </ScrollReveal>

          {/* Company Story */}
          <ScrollReveal direction="up" delay={0.4} className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-display-sm font-semibold mb-8 text-text-primary">Our Story</h3>
              <div className="space-y-6 text-body-md text-text-secondary leading-relaxed">
                <p>
                  TechVision was born from a simple idea: technology should empower businesses, not complicate them. Our
                  founders, with decades of combined experience in software development and business strategy,
                  recognized the gap between cutting-edge technology and practical business applications.
                </p>
                <p>
                  Since our inception, we've grown from a small startup to a trusted technology partner for companies
                  ranging from innovative startups to established enterprises. Our commitment to excellence and client
                  satisfaction has been the driving force behind our success.
                </p>
              </div>
            </div>
            <div className="bg-background-primary rounded-xl p-8 border border-border-primary">
              <h4 className="text-heading-xl font-semibold mb-6 text-text-primary">Company Milestones</h4>
              <div className="space-y-4">
                {[
                  { year: "2019", event: "TechVision founded in San Francisco" },
                  { year: "2020", event: "First 50 projects completed" },
                  { year: "2021", event: "Expanded to serve international clients" },
                  { year: "2022", event: "Reached 200+ successful projects" },
                  { year: "2023", event: "Launched AI/ML division" },
                  { year: "2024", event: "500+ projects milestone achieved" },
                ].map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-16 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center border border-accent-primary/20">
                      <span className="text-body-sm font-semibold text-accent-primary">{milestone.year}</span>
                    </div>
                    <span className="text-body-sm text-text-secondary">{milestone.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-display-lg font-semibold mb-6 text-text-primary">Our Portfolio</h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful projects across various industries and technologies. Each project
              represents our commitment to excellence and innovation.
            </p>
          </ScrollReveal>

          {/* Filters and View Toggle */}
          <ScrollReveal
            direction="up"
            delay={0.2}
            className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
          >
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg text-body-sm font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-accent-primary text-white"
                      : "bg-background-secondary text-text-secondary hover:bg-background-tertiary hover:text-text-primary border border-border-primary"
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-body-sm text-text-secondary">View:</span>
              <div className="flex bg-background-secondary rounded-lg p-1 border border-border-primary">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1 rounded-md text-body-sm font-medium transition-colors duration-200 ${
                    viewMode === "grid" ? "bg-accent-primary text-white" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`px-3 py-1 rounded-md text-body-sm font-medium transition-colors duration-200 ${
                    viewMode === "masonry"
                      ? "bg-accent-primary text-white"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Masonry
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Gallery */}
          <ScrollReveal direction="up" delay={0.3} className="mb-16">
            {viewMode === "grid" ? (
              <ImageGallery images={filteredImages} />
            ) : (
              <MasonryGallery images={filteredImages} />
            )}
          </ScrollReveal>

          {/* Portfolio Stats */}
          <ScrollReveal direction="up" delay={0.4}>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 bg-background-secondary rounded-xl border border-border-primary">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "15+", label: "Industries Served" },
                { number: "99%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <StaggerItem key={index} className="text-center">
                  <div className="text-display-sm font-semibold text-accent-primary mb-2">{stat.number}</div>
                  <div className="text-body-sm text-text-secondary font-medium">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Portfolio CTA */}
          <ScrollReveal
            direction="up"
            delay={0.5}
            className="text-center bg-background-secondary rounded-xl p-8 lg:p-12 border border-border-primary"
          >
            <h3 className="text-display-sm font-semibold mb-6 text-text-primary">Want to See More?</h3>
            <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              This is just a glimpse of our work. Visit our complete portfolio to explore more projects, case studies,
              and detailed project breakdowns.
            </p>
            <Button
              className="bg-accent-primary hover:bg-accent-hover text-white font-medium text-body-lg px-8 py-4 rounded-lg transition-all duration-200 focus-ring"
              onClick={() => window.open("https://portfolio.techvision.com", "_blank")}
            >
              See Full Catalog
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-display-lg font-semibold mb-6 text-text-primary">Get In Touch</h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how
              we can help you achieve your goals.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left" delay={0.2}>
              <Card className="bg-background-primary border-border-primary">
                <CardContent className="p-8">
                  <h3 className="text-heading-xl font-semibold mb-8 text-text-primary">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-body-md font-medium text-text-primary mb-3">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background-tertiary border border-border-primary rounded-lg focus:outline-hidden focus:ring-2 focus:ring-accent-primary focus:border-transparent text-text-primary placeholder-text-secondary transition-colors duration-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-body-md font-medium text-text-primary mb-3">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background-tertiary border border-border-primary rounded-lg focus:outline-hidden focus:ring-2 focus:ring-accent-primary focus:border-transparent text-text-primary placeholder-text-secondary transition-colors duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-body-md font-medium text-text-primary mb-3">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background-tertiary border border-border-primary rounded-lg focus:outline-hidden focus:ring-2 focus:ring-accent-primary focus:border-transparent text-text-primary placeholder-text-secondary transition-colors duration-200"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-body-md font-medium text-text-primary mb-3">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background-tertiary border border-border-primary rounded-lg focus:outline-hidden focus:ring-2 focus:ring-accent-primary focus:border-transparent text-text-primary placeholder-text-secondary resize-none transition-colors duration-200"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent-primary hover:bg-accent-hover text-white font-medium text-body-lg py-4 rounded-lg transition-all duration-200 focus-ring"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal direction="right" delay={0.2} className="space-y-8">
              <div>
                <h3 className="text-heading-xl font-semibold mb-8 text-text-primary">Contact Information</h3>
                <StaggerContainer className="space-y-6">
                  {[
                    {
                      label: "Email",
                      value: "hello@techvision.com",
                      description: "Send us an email anytime",
                    },
                    {
                      label: "Phone",
                      value: "+1 (555) 123-4567",
                      description: "Mon-Fri from 8am to 5pm",
                    },
                    {
                      label: "Office",
                      value: "San Francisco, CA",
                      description: "123 Tech Street, Suite 100",
                    },
                  ].map((contact, index) => (
                    <StaggerItem
                      key={index}
                      className="p-6 bg-background-primary rounded-lg border border-border-primary"
                    >
                      <h4 className="text-heading-lg font-semibold text-text-primary">{contact.label}</h4>
                      <p className="text-body-md text-text-primary font-medium">{contact.value}</p>
                      <p className="text-body-sm text-text-secondary">{contact.description}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Office Hours */}
              <Card className="bg-background-primary border-border-primary">
                <CardContent className="p-6">
                  <h4 className="text-heading-lg font-semibold text-text-primary mb-4">Office Hours</h4>
                  <div className="space-y-3 text-body-md">
                    <div className="flex justify-between text-text-secondary">
                      <span>Monday - Friday</span>
                      <span className="text-text-primary font-medium">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Saturday</span>
                      <span className="text-text-primary font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Sunday</span>
                      <span className="text-text-primary font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="bg-accent-primary/5 border-accent-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-heading-lg font-semibold mb-3 text-text-primary">Quick Response</h4>
                  <p className="text-body-md text-text-secondary mb-4 leading-relaxed">
                    Need immediate assistance? We typically respond to all inquiries within 24 hours.
                  </p>
                  <p className="text-body-sm text-accent-primary font-medium">
                    For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ScrollReveal direction="up" className="border-t border-border-primary px-6 py-12 bg-background-primary">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-heading-lg font-semibold text-text-primary">TechVision</span>
          </div>
          <p className="text-body-md text-text-secondary mb-6">
            Building the future of technology, one project at a time.
          </p>
          <div className="text-body-sm text-text-secondary">© 2024 TechVision. All rights reserved.</div>
        </div>
      </ScrollReveal>
    </div>
  )
}
