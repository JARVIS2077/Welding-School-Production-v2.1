"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Users, Target, Heart, Lightbulb, ArrowRight, CheckCircle, Star } from "lucide-react"

interface Achievement {
  number: string
  label: string
  description: string
}

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

const achievements: Achievement[] = [
  {
    number: "500+",
    label: "Graduates",
    description: "Skilled welders trained and certified",
  },
  {
    number: "15+",
    label: "Years Experience",
    description: "Decades of welding education excellence",
  },
  {
    number: "95%",
    label: "Job Placement",
    description: "Graduates employed within 6 months",
  },
  {
    number: "98%",
    label: "Satisfaction Rate",
    description: "Students recommend our programs",
  },
]

const coreValues: Value[] = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Excellence",
    description: "We maintain the highest standards in welding education and training",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community",
    description: "Building a supportive network of welders and industry professionals",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Innovation",
    description: "Embracing new technologies and modern welding techniques",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Integrity",
    description: "Honest, transparent, and ethical in all our interactions",
  },
]

export default function AboutTeaser() {
  const [activeTab, setActiveTab] = useState("story")

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            About Mroncy School
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Forging Futures Through Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the story behind Zimbabwe's premier welding education institution and our commitment to your
            success
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="story">Our Story</TabsTrigger>
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">From Passion to Purpose</h3>
                    <p className="text-muted-foreground mb-4">
                      Founded by Daniel Muronzi, a master welder with over two decades of experience, Mroncy School of
                      Welding was born from a simple belief: everyone deserves access to quality welding education that
                      opens doors to meaningful careers.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      What started as informal training sessions in a small workshop has grown into Zimbabwe's most
                      respected welding institution, known for producing skilled professionals who excel in industries
                      across the country.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-lg border">
                        <div className="text-2xl font-bold text-welding-orange mb-1">{achievement.number}</div>
                        <div className="font-semibold text-sm mb-1">{achievement.label}</div>
                        <div className="text-xs text-muted-foreground">{achievement.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/images/daniel/daniel-muronzi-profile-casual.jpg"
                          alt="Daniel Muronzi - Founder"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                          src="/images/workshop/welding-table.jpg"
                          alt="Welding workshop"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                          src="/images/daniel/daniel-muronzi-at-work-structure.jpg"
                          alt="Daniel at work"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/images/workshop/welding-machine-verson-1.jpg"
                          alt="Modern welding equipment"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-welding-orange text-white p-4 rounded-full">
                    <Star className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mission" className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <div className="mb-8">
                  <Lightbulb className="h-16 w-16 text-welding-orange mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide world-class welding education that empowers individuals with the skills, knowledge, and
                    confidence needed to build successful careers in the welding industry, while contributing to
                    Zimbabwe's economic growth and industrial development.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="text-center">
                    <CardHeader>
                      <Award className="h-8 w-8 text-welding-orange mx-auto mb-2" />
                      <CardTitle className="text-lg">Quality Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Delivering comprehensive training programs that meet international standards
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Users className="h-8 w-8 text-welding-orange mx-auto mb-2" />
                      <CardTitle className="text-lg">Student Success</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Supporting every student's journey from beginner to certified professional
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Target className="h-8 w-8 text-welding-orange mx-auto mb-2" />
                      <CardTitle className="text-lg">Industry Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Contributing skilled professionals to Zimbabwe's growing industrial sector
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-welding-orange/10 rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-4">Our Commitment</h4>
                  <ul className="space-y-3 text-left max-w-2xl mx-auto">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Provide hands-on training with modern equipment and techniques</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Maintain small class sizes for personalized attention</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Connect graduates with employment opportunities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Foster a diverse and inclusive learning environment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="values" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-welding-orange/10 rounded-lg text-welding-orange">{value.icon}</div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center bg-gradient-to-r from-welding-orange/10 to-blue-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4">Living Our Values Daily</h4>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  These values guide every decision we make, from curriculum development to student support. They're not
                  just words on a wall – they're the foundation of everything we do.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/about">
                    <Button size="lg">
                      Learn More About Us
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Meet Our Team
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
