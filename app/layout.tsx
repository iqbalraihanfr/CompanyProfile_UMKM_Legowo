import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { LanguageProvider } from "@/contexts/language-context" // pastikan path-nya sesuai

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechVision - Building the Future of Technology",
  description: "Innovative digital solutions that transform businesses",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
