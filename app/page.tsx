"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContainerScrollAnimation } from "@/components/ui/container-scroll-animation"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { ColorfulText } from "@/components/ui/colorful-text"
import { ColorfulTextFlip } from "@/components/ui/colorful-text-flip"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Timeline } from "@/components/ui/timeline"
import { ImageGallery } from "@/components/ui/image-gallery"
import { MasonryGallery } from "@/components/ui/masonry-gallery"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

import type React from "react"

export default function HomePage() {
  const flipWords = ["Menumbuhkan Kreativitas Anak Sejak Dini",
    "Membangun Ruang Bermain Edukatif & Aman",
    "Mendukung Proses Belajar yang Menyenangkan",
    "Menciptakan Lingkungan Penuh Imajinasi",
    "Menjadi Mitra Pendidikan & Keluarga Anda"]

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

  const { t } = useLanguage()



  // Timeline data for About section
  const timelineData = [
    {
      title: t.companystory.title1,
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div>
              <h4 className="text-heading-lg font-semibold text-text-primary mb-3">{t.companystory.words3}</h4>
              <p className="text-body-md text-text-secondary leading-relaxed mb-4">
                {t.companystory.words4}
              </p>
              <ul className="space-y-2">
                {[
                  t.companystory.list1,
                  t.companystory.list2,
                  t.companystory.list3,
                  t.companystory.list4,
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
      title: t.companystory.title2,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                letter: "I",
                title: t.companystory.cardtitle1,
                description: t.companystory.wordtitle1,
              },
              {
                letter: "F",
                title: t.companystory.cardtitle2,
                description: t.companystory.wordtitle2,
              },
              {
                letter: "K",
                title: t.companystory.cardtitle3,
                description: t.companystory.wordtitle3,
              },
              {
                letter: "T",
                title: t.companystory.cardtitle4,
                description: t.companystory.wordtitle5,
              },
            ].map((value, idx) => (
              <div key={idx} className="p-6 bg-[#ffff] rounded-xl border border-border-primary">
                <div className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center mb-3 border border-accent-primary/20">
                  <span className="text-accent-primary font-bold">{value.letter}</span>
                </div>
                <h5 className="text-heading-md font-semibold text-[#001f3f] mb-2">{value.title}</h5>
                <p className="text-body-sm text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: t.companystory.title3,
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div>
              <h4 className="text-heading-lg font-semibold text-text-primary mb-3">{t.companystory.wordtitle5}</h4>
              <p className="text-body-md text-[#dedede] leading-relaxed mb-6">
                {t.companystory.wordtitle6}
              </p>
              <div className="bg-[#ffff] rounded-xl p-6">
                <h5 className="text-heading-md font-semibold text-[#b0b0b0] mb-3">{t.companystory.wordtitle5}</h5>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-heading-xl font-semibold text-accent-primary">50+</div>
                    <div className="text-body-sm text-text-secondary">{t.companystory.wordtitle13}</div>
                  </div>
                  <div>
                    <div className="text-heading-xl font-semibold text-accent-primary">50+</div>
                    <div className="text-body-sm text-text-secondary">{t.companystory.wordtitle14}</div>
                  </div>
                  <div>
                    <div className="text-heading-xl font-semibold text-accent-primary">100+</div>
                    <div className="text-body-sm text-text-secondary">{t.companystory.wordtitle15}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t.companystory.title4,
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div>
              <h4 className="text-heading-lg font-semibold text-text-primary mb-3">
                {t.companystory.wordtitle7}
              </h4>
              <p className="text-body-md text-[#dedede] leading-relaxed mb-6">
                {t.companystory.wordtitle8}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#ffff]">
                  <h5 className="text-heading-md font-semibold text-[#001f3f] mb-2">  {t.companystory.wordtitle9}</h5>
                  <p className="text-body-sm text-text-secondary">{t.companystory.wordtitle10}</p>
                </div>
                <div className="p-4 bg-[#ffff]">
                  <h5 className="text-heading-md font-semibold text-[#001f3f] mb-2"> {t.companystory.wordtitle11}</h5>
                  <p className="text-body-sm text-text-secondary">
                    {t.companystory.wordtitle12}


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
      src: "/produk12.JPG",
      title: "",
      category: "",
      height: 300,
      description: "Modern e-commerce platform with advanced analytics and user management",
    },
    {
      id: "2",
      src: "/produk9.JPG",
      title: "",
      category: "",
      height: 400,
      description: "Secure financial mobile application with biometric authentication",
    },
    {
      id: "3",
      src: "/produk8.JPG",
      title: "",
      category: "",
      height: 280,
      description: "Machine learning dashboard for predictive analytics and data visualization",
    },
    {
      id: "4",
      src: "/produk11.JPG",
      title: "",
      category: "",
      height: 360,
      description: "Scalable cloud architecture for enterprise-level applications",
    },
    {
      id: "5",
      src: "/produk7.JPG",
      title: "",
      category: "",
      height: 320,
      description: "Comprehensive design system with reusable components and guidelines",
    },
    {
      id: "6",
      src: "/produk6.JPG",
      title: "",
      category: "",
      height: 340,
      description: "Patient management system with telemedicine capabilities",
    },
    {
      id: "7",
      src: "/produk5.JPG",
      title: "",
      category: "",
      height: 290,
      description: "Real-time logistics tracking application with GPS integration",
    },
    {
      id: "8",
      src: "/produk4.JPG",
      title: "",
      category: "",
      height: 380,
      description: "Interactive data visualization platform for business intelligence",
    },
    {
      id: "9",
      src: "/produk3.JPG",
      title: "",
      category: "",
      height: 260,
      description: "Containerized microservices architecture with auto-scaling",
    },
    {
      id: "10",
      src: "/produk2.JPG",
      title: "",
      category: "",
      height: 350,
      description: "Complete brand identity design with logo and visual guidelines",
    },
    {
      id: "11",
      src: "/produk1.JPG",
      title: "",
      category: "",
      height: 310,
      description: "Social networking platform with real-time messaging and content sharing",
    },
    {
      id: "12",
      src: "/produk10.JPG",
      title: "",
      category: "",
      height: 370,
      description: "IoT device monitoring and control dashboard with predictive maintenance",
    },
  ]

  const categories = ["all", "Web Development", "Mobile Development", "AI/ML", "Cloud Solutions", "UI/UX Design"]
  const filteredImages =
    activeFilter === "all" ? portfolioImages : portfolioImages.filter((img) => img.category === activeFilter)

  return (
    <>
      <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/herro.jpg')",
        }}
      >
        {/* Overlay transparan navy */}
        <div className="absolute inset-0 bg-[#001f3f] opacity-75 z-0" />

        <ContainerScrollAnimation>
          <div className="mt-25 px-6 py-20 lg:py-15">
            <div className="max-w-4xl mx-auto text-center">

              <h1 className="text-display-xl lg:text-[4rem] font-semibold mb-6 leading-tight">
                {t.hero.title}{" "}
                <ColorfulTextFlip
                  words={t.hero.flipWords}
                  className="text-display-xl lg:text-[5rem] font-semibold"
                />{" "}
              </h1>



              <div className="mb-12 max-w-3xl mx-auto">
                <TextGenerateEffect
                  words={t.hero.words}
                  className="text-body-lg leading-relaxed"
                />
              </div>


              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-accent-primary hover:bg-accent-hover text-white font-medium text-body-lg px-8 py-4 rounded-lg transition-all duration-200 focus-ring inline-flex items-center justify-center"
                >
                  {t.hero.button1}
                </button>
                <button
                  onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                  className="border border-white bg-transparent text-[#ffff] hover:bg-[#ffff] hover:text-accent-primary font-medium text-body-lg px-8 py-4 rounded-lg transition-all duration-200 focus-ring"

                >
                  {t.hero.button2}
                </button>
              </div>
            </div>
          </div>
        </ContainerScrollAnimation>
      </section>

      {/* Stats Section */}
      <section className="bg-[#c2c4c8]">
        <ScrollReveal direction="up" className="px-6 py-16 bg-[#ffff] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          
            {[
              { number: "500+", label: t.statsec.label1 },
              { number: "100+", label: t.statsec.label2 },
              { number: "5+", label: t.statsec.label3 },
              { number: "24/7", label: t.statsec.label4 },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-[#001f3f] border border-border-primary hover:border-accent-primary/30 transition-colors duration-200"
              >
                <div className="text-display-sm font-semibold text-accent-primary mb-2">{stat.number}</div>
                <div className="text-body-sm text-[#ffff] font-medium">{stat.label}</div>
              </div>
            ))}
          
        </ScrollReveal>
      </section>
      {/* Features Section */}
      <section className="bg-[#ffff]">        <ScrollReveal direction="up" delay={0.2} className="bg-[#ffff] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-semibold mb-6 text-[#001f3f]">{t.featuressec.title}</h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t.featuressec.words}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t.featuressec.cardtitle1,
                description: t.featuressec.cardwords1,
              },
              {
                title: t.featuressec.cardtitle2,
                description: t.featuressec.cardwords2,
              },
              {
                title: t.featuressec.cardtitle3,
                description: t.featuressec.cardwords3,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-[#001f3f] border border-border-primary hover:border-accent-primary/30 transition-all duration-200 group"
              >
                <h3 className="text-heading-xl font-semibold mb-4 text-accent-primary group-hover:text-accent-hover transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-body-md text-[#ffff] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gradient-to-b from-[#001f3f] to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-display-lg font-semibold mb-6 text-text-primary">{t.aboutsec.title}</h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t.aboutsec.words}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <Timeline data={timelineData} />
          </ScrollReveal>

          {/* Company Story */}
          <ScrollReveal direction="up" delay={0.4} className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-display-sm font-semibold mb-8 text-[#001f3f]">{t.companystory.title0}</h3>
              <div className="space-y-6 text-body-md text-text-secondary leading-relaxed">
                <p>
                  {t.companystory.words1}
                </p>
                <p>
                  {t.companystory.words2}
                </p>
              </div>
            </div>
            <div className="rounded-xl p-8 flex items-center justify-center">
              <img src="/logow.png" alt="Zyfini Logo" className="h-90 w-auto" />
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio" className="bg-[#ffff] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-display-lg font-semibold mb-6 text-[#001f3f]">  {t.gallerysec.title}</h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t.gallerysec.words}
            </p>
          </ScrollReveal>

          {/* Gallery */}
          <ScrollReveal direction="up" delay={0.3} className="mb-16">
            {viewMode === "grid" ? (
              <ImageGallery images={filteredImages} />
            ) : (
              <MasonryGallery images={filteredImages} />
            )}
          </ScrollReveal>

          {/* Portfolio CTA */}
          <ScrollReveal
            direction="up"
            delay={0.5}
            className="text-center bg-[#001f3f] rounded-xl p-8 lg:p-12 border border-border-primary"
          >
            <h3 className="text-display-sm font-semibold mb-6 text-text-primary">{t.portocta.title}</h3>
            <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.portocta.words}
            </p>
            <Button
              className="bg-accent-primary hover:bg-accent-hover text-white font-medium text-body-lg px-8 py-4 rounded-lg transition-all duration-200 focus-ring"
              onClick={() => window.open("https://portfolio.techvision.com", "_blank")}
            >
              {t.portocta.button}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-[#001f3f] to-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-display-lg font-semibold mb-6 text-text-primary">{t.contact.title}</h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left" delay={0.2}>
              <Card className="bg-[#f1ecec] border-border-primary">
                <CardContent className="p-8">
                  <h3 className="text-heading-xl font-semibold mb-8 text-[#001f3f]"> {t.contact.formTitle}</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-body-md font-medium text-[#001f3f] mb-3">
                          {t.contact.name}
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
                        <label htmlFor="email" className="block text-body-md font-medium text-[#001f3f] mb-3">
                          {t.contact.email}
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
                      <label htmlFor="company" className="block text-body-md font-medium text-[#001f3f] mb-3">
                        {t.contact.company}
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
                      <label htmlFor="message" className="block text-body-md font-medium text-[#001f3f] mb-3">
                        {t.contact.message}
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
                      {t.contact.button}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal direction="right" delay={0.2} className="space-y-8">
              <div>
                <h3 className="text-heading-xl font-semibold mb-8 text-text-primary">{t.contact.infoTitle}</h3>
                <div className="space-y-6">
                  {[
                    {
                      label: t.contact.address,
                      value: "Jalan Peltu Wagiso, RT.02/RW.01, Kebaron, Tulangan, Sidoarjo, Tulangan, Jawa Timur, 61273",
                      description: "",
                    },
                    {
                      label: t.contact.email,
                      value: "rusianaa965@gmail.com",
                      description: "",
                    },
                    {
                      label: t.contact.contact,
                      value: "+62 8121 767 4477",
                      description: "",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="p-6 bg-[#f1ecec] rounded-lg border border-border-primary"
                    >
                      <h4 className="text-heading-lg font-semibold text-[#001f3f]">{contact.label}</h4>
                      <p className="text-body-md text-[#001f3f] font-medium">{contact.value}</p>
                      <p className="text-body-sm text-text-secondary">{contact.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <Card className="bg-[#f1ecec] border-border-primary">
                <CardContent className="p-6">
                  <h4 className="text-heading-lg font-semibold text-[#001f3f] mb-4">{t.contact.officeHours}</h4>
                  <div className="space-y-3 text-body-md">
                    <div className="flex justify-between text-text-secondary">
                      <span>{t.contact.days.monday}</span>
                      <span className="text-[#001f3f] font-medium">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>{t.contact.days.saturday}</span>
                      <span className="text-[#001f3f] font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>{t.contact.days.sunday}</span>
                      <span className="text-[#001f3f]  font-medium">{t.contact.days.closed}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="overflow-hidden h-[350px] border-accent-primary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.282431328586!2d112.62285067431763!3d-7.485680873816443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e026095e88e5%3A0xca152be7c293b8fb!2sJl.%20Peltu%20Wagiso%2C%20Kebaron%2C%20Kec.%20Tulangan%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061273!5e1!3m2!1sid!2sid!4v1753679255315!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card>


            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ScrollReveal direction="up" className="border-t border-border-primary px-6 py-12 bg-[#001f3f] ">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center group-hover:bg-accent-hover transition-colors duration-200 overflow-hidden">
              <img
                src="/logow.png" // ganti dengan path/logo sesuai projekmu
                alt="Logo Zyfini"
                className="w-13 h-13 object-contain"
              />
            </div>
            <span className="text-heading-lg font-semibold text-[#ffff]">{t.footer.title}</span>
          </div>
          <p className="text-body-md text-text-secondary mb-6">
            {t.footer.subtitle}
          </p>
          <div className="text-body-sm text-text-secondary">© 2025 Zyfini Edukasi. All rights reserved.</div>
        </div>
      </ScrollReveal>
    </div>
    </>
  )
}

