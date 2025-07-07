"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Award } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  rating: number
  testimonial: string
  course: string
  achievement: string
  graduationYear: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mukamuri",
    role: "Senior Welder",
    company: "Zimbabwe Iron & Steel",
    image: "/images/female-welder-equipment.jpeg",
    rating: 5,
    testimonial:
      "Mroncy School transformed my career completely. The hands-on training and expert guidance helped me land my dream job in just 3 months after graduation.",
    course: "SMAW Fundamentals",
    achievement: "AWS Certified Welder",
    graduationYear: "2023",
  },
  {
    id: "2",
    name: "James Chikwanha",
    role: "Welding Supervisor",
    company: "Construction Plus Ltd",
    image: "/images/male-welder.jpeg",
    rating: 5,
    testimonial:
      "The structural welding course was exceptional. I went from basic welding to supervising a team of 15 welders. The certification opened doors I never imagined.",
    course: "Structural Welding",
    achievement: "Team Supervisor",
    graduationYear: "2022",
  },
  {
    id: "3",
    name: "Grace Mutindi",
    role: "Freelance Welder",
    company: "Self-Employed",
    image: "/images/female-welder-sparks.jpeg",
    rating: 5,
    testimonial:
      "Starting my own welding business seemed impossible until I joined Mroncy. The business training alongside technical skills gave me the confidence to go independent.",
    course: "TIG Welding Mastery",
    achievement: "Business Owner",
    graduationYear: "2023",
  },
  {
    id: "4",
    name: "Peter Moyo",
    role: "Pipeline Welder",
    company: "National Oil Company",
    image: "/images/instructors.jpeg",
    rating: 5,
    testimonial:
      "The precision and safety standards taught at Mroncy are unmatched. I now work on critical pipeline projects with complete confidence in my skills.",
    course: "Pipeline Welding",
    achievement: "Certified Pipeline Welder",
    graduationYear: "2022",
  },
  {
    id: "5",
    name: "Mary Sibanda",
    role: "Welding Instructor",
    company: "Technical College",
    image: "/images/female-welder-workshop.jpeg",
    rating: 5,
    testimonial:
      "From student to instructor - Mroncy gave me the foundation to not just excel in welding but to teach others. The comprehensive curriculum is world-class.",
    course: "Advanced Welding Program",
    achievement: "Certified Instructor",
    graduationYear: "2021",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Graduates Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who transformed their careers with our welding programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-welding-orange/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-welding-orange/20">
                    <Image
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 bg-welding-orange text-white p-3 rounded-full">
                    <Quote className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < currentTestimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-welding-orange font-medium">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{currentTestimonial.course}</Badge>
                      <Badge variant="outline" className="border-green-200 text-green-700">
                        <Award className="h-3 w-3 mr-1" />
                        {currentTestimonial.achievement}
                      </Badge>
                      <Badge variant="outline">Class of {currentTestimonial.graduationYear}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-welding-orange scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-welding-orange mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-welding-orange mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-welding-orange mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
