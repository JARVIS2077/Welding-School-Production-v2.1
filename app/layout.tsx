import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { FirebaseAuthProvider } from "@/components/providers/firebase-auth-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppChat } from "@/components/ui/whatsapp-chat"
import { Toaster } from "@/components/ui/toaster"
import { AnimationInitializer } from "@/components/animation-initializer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meronzi Welding Centre | Professional Welding Training in Zimbabwe",
  description:
    "Learn professional welding skills at Meronzi Welding Centre. Offering comprehensive welding courses, certification programs, and hands-on training in Zimbabwe.",
  keywords:
    "welding school, welding training, welding courses, welding certification, Zimbabwe, Meronzi, professional welding",
  authors: [{ name: "Daniel Muronzi" }],
  creator: "Daniel Muronzi",
  publisher: "Meronzi Welding Centre",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meronzi-welding.vercel.app",
    title: "Meronzi Welding Centre | Professional Welding Training",
    description: "Learn professional welding skills with hands-on training and certification programs.",
    siteName: "Meronzi Welding Centre",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meronzi Welding Centre | Professional Welding Training",
    description: "Learn professional welding skills with hands-on training and certification programs.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <FirebaseAuthProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <WhatsAppChat />
            <Toaster />
            <AnimationInitializer />
          </FirebaseAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
