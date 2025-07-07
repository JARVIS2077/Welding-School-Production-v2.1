"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, TrendingUp, Award, Heart, ArrowRight } from "lucide-react"

interface DiversityStats {
  label: string
  percentage: number
  description: string
  icon: React.ReactNode
}

const diversityStats: DiversityStats[] = [
  {
    label: "Female Enrollment",
    percentage: 35,
    description: "Growing number of women joining welding",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Career Success Rate",
    percentage: 92,
    description: "Women graduates in welding careers",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    label: "Leadership Roles",
    percentage: 28,
    description: "Female graduates in supervisory positions",
    icon: <Award className="h-5 w-5" />,
  },
  {
    label: "Satisfaction Rate",
    percentage: 98,
    description: "Women recommend our programs",
    icon: <Heart className="h-5 w-5" />,
  },
]

const successStories = [
  {
    name: "Sarah M.",
    role: "Lead Welder",
    quote: "Breaking barriers in a male-dominated field has been empowering.",
    image: "/images/female-welder-equipment.jpeg",
  },
  {
    name: "Grace T.",
    role: "Business Owner",
    quote: "Started my own welding business after graduation.",
    image: "/images/female-welder-sparks.jpeg",
  },
  {
    name: "Mary K.",
    role: "Instructor",
    quote: "Now teaching the next generation of welders.",
    image: "/images/female-welder-workshop.jpeg",
  },
]

export default function GenderDiverseSection() {
  const [activeStory, setActiveStory] = useState(0)

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700">
            Diversity & Inclusion
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welding is for Everyone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to foster an inclusive environment where all genders thrive in welding careers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Breaking Barriers Together</h3>
              <p className="text-muted-foreground mb-6">
                The welding industry is evolving, and we're leading the change by creating opportunities for everyone.
                Our supportive environment ensures all students receive the training and confidence needed to excel in
                their welding careers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {diversityStats.map((stat, index) => (
                <Card key={index} className="border-2 hover:border-purple-200 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-purple-600">
                      {stat.icon}
                      <CardTitle className="text-sm">{stat.label}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-600">{stat.percentage}%</span>
                      </div>
                      <Progress value={stat.percentage} className="h-2" />
                      <p className="text-xs text-muted-foreground">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/female-welder-equipment.jpeg"
                    alt="Female welder with equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/female-welder-workshop.jpeg"
                    alt="Female welder in workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/female-welder-sparks.jpeg"
                    alt="Female welder working with sparks"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/instructors.jpeg"
                    alt="Diverse group of instructors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStory === index ? "ring-2 ring-purple-400 shadow-lg scale-105" : "hover:shadow-md"
                }`}
                onClick={() => setActiveStory(index)}
              >
                <CardHeader className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                  </div>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>{story.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-center italic text-sm">"{story.quote}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-purple-100">
            <h3 className="text-xl font-bold mb-4">Join Our Inclusive Community</h3>
            <p className="text-muted-foreground mb-6">
              Ready to start your welding journey in a supportive, diverse environment? We provide mentorship, flexible
              schedules, and career guidance for all students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Apply Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 bg-transparent">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
