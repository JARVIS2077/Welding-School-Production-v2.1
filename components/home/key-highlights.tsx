"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Shield, Briefcase, Star, CheckCircle, TrendingUp } from "lucide-react"

interface Highlight {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  stats: string
  benefits: string[]
  color: string
}

const highlights: Highlight[] = [
  {
    id: "1",
    icon: <Award className="h-8 w-8" />,
    title: "Industry Certification",
    description: "Get certified with internationally recognized welding standards and qualifications.",
    stats: "95% Pass Rate",
    benefits: ["AWS Certification", "Industry Recognition", "Career Advancement", "Higher Salary Potential"],
    color: "text-yellow-600",
  },
  {
    id: "2",
    icon: <Users className="h-8 w-8" />,
    title: "Expert Instructors",
    description: "Learn from certified professionals with decades of real-world welding experience.",
    stats: "20+ Years Experience",
    benefits: ["Personalized Training", "Industry Insights", "Mentorship", "Professional Network"],
    color: "text-blue-600",
  },
  {
    id: "3",
    icon: <Shield className="h-8 w-8" />,
    title: "Safety First",
    description: "Comprehensive safety training ensuring you work confidently and securely.",
    stats: "Zero Accidents",
    benefits: ["Safety Protocols", "Equipment Training", "Risk Management", "OSHA Standards"],
    color: "text-green-600",
  },
  {
    id: "4",
    icon: <Briefcase className="h-8 w-8" />,
    title: "Job Placement",
    description: "Strong industry connections help our graduates find employment quickly.",
    stats: "85% Job Placement",
    benefits: ["Industry Partnerships", "Resume Building", "Interview Prep", "Career Guidance"],
    color: "text-purple-600",
  },
  {
    id: "5",
    icon: <Clock className="h-8 w-8" />,
    title: "Flexible Schedule",
    description: "Choose from full-time, part-time, or weekend classes to fit your lifestyle.",
    stats: "Multiple Schedules",
    benefits: ["Day Classes", "Evening Classes", "Weekend Options", "Accelerated Programs"],
    color: "text-orange-600",
  },
  {
    id: "6",
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Career Growth",
    description: "Build skills that lead to supervisory roles and business opportunities.",
    stats: "40% Salary Increase",
    benefits: ["Leadership Training", "Business Skills", "Advanced Techniques", "Entrepreneurship"],
    color: "text-red-600",
  },
]

export default function KeyHighlights() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Success is Our Priority</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Mroncy School of Welding the premier choice for aspiring welders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <Card
              key={highlight.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-welding-orange/20"
              onMouseEnter={() => setHoveredCard(highlight.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`mx-auto mb-4 p-3 rounded-full bg-gray-100 group-hover:bg-welding-orange/10 transition-colors ${highlight.color}`}
                >
                  {highlight.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-welding-orange transition-colors">
                  {highlight.title}
                </CardTitle>
                <CardDescription className="text-center">{highlight.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-welding-orange mb-1">{highlight.stats}</div>
                  <div className="text-sm text-muted-foreground">Success Metric</div>
                </div>

                <div
                  className={`space-y-2 transition-all duration-300 ${
                    hoveredCard === highlight.id ? "opacity-100 max-h-40" : "opacity-70 max-h-32"
                  } overflow-hidden`}
                >
                  <h4 className="text-sm font-semibold text-center mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {highlight.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-welding-orange/10 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-welding-orange" />
            <span className="font-semibold">Join 500+ successful graduates</span>
          </div>
        </div>
      </div>
    </section>
  )
}
