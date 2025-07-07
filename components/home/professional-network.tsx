"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Users, TrendingUp, Award, Briefcase, Network, ArrowRight, CheckCircle, Star } from "lucide-react"

interface Partner {
  name: string
  logo: string
  type: "construction" | "manufacturing" | "energy" | "government"
  description: string
  opportunities: string[]
}

interface CareerPath {
  title: string
  level: string
  salary: string
  description: string
  requirements: string[]
  icon: React.ReactNode
}

const industryPartners: Partner[] = [
  {
    name: "Zimbabwe Iron & Steel Company",
    logo: "/images/ico2.svg",
    type: "manufacturing",
    description: "Leading steel manufacturer offering apprenticeships and full-time positions",
    opportunities: ["Apprenticeships", "Production Welding", "Quality Control", "Supervision"],
  },
  {
    name: "Construction Plus Ltd",
    logo: "/images/ico2.svg",
    type: "construction",
    description: "Major construction company with ongoing infrastructure projects",
    opportunities: ["Structural Welding", "Site Supervision", "Project Management", "Training Roles"],
  },
  {
    name: "National Oil Company",
    logo: "/images/ico2.svg",
    type: "energy",
    description: "Energy sector opportunities in pipeline and facility maintenance",
    opportunities: ["Pipeline Welding", "Maintenance", "Safety Inspection", "Technical Training"],
  },
  {
    name: "Ministry of Public Works",
    logo: "/images/ico2.svg",
    type: "government",
    description: "Government infrastructure projects and public sector opportunities",
    opportunities: ["Infrastructure Projects", "Public Works", "Training Programs", "Consulting"],
  },
]

const careerPaths: CareerPath[] = [
  {
    title: "Entry Level Welder",
    level: "Beginner",
    salary: "$400-600/month",
    description: "Start your career with basic welding operations and safety protocols",
    requirements: ["Basic Certification", "Safety Training", "3-6 months experience"],
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Skilled Welder",
    level: "Intermediate",
    salary: "$600-900/month",
    description: "Advanced welding techniques and specialized applications",
    requirements: ["Advanced Certification", "1-2 years experience", "Specialized Skills"],
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Welding Supervisor",
    level: "Advanced",
    salary: "$900-1200/month",
    description: "Lead teams and oversee welding operations and quality control",
    requirements: ["Leadership Training", "3-5 years experience", "Management Skills"],
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Welding Inspector",
    level: "Expert",
    salary: "$1000-1500/month",
    description: "Quality assurance and compliance with welding standards",
    requirements: ["Inspector Certification", "5+ years experience", "Technical Expertise"],
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Business Owner",
    level: "Entrepreneur",
    salary: "$1500+/month",
    description: "Start your own welding business or contracting company",
    requirements: ["Business Training", "Industry Experience", "Capital Investment"],
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Welding Instructor",
    level: "Expert",
    salary: "$800-1200/month",
    description: "Teach the next generation of welders at technical institutions",
    requirements: ["Teaching Certification", "Expert Skills", "Communication Skills"],
    icon: <Star className="h-6 w-6" />,
  },
]

export default function ProfessionalNetwork() {
  const [activeTab, setActiveTab] = useState("partners")
  const [selectedPartnerType, setSelectedPartnerType] = useState<string>("all")

  const filteredPartners =
    selectedPartnerType === "all"
      ? industryPartners
      : industryPartners.filter((partner) => partner.type === selectedPartnerType)

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">
            Professional Network
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Gateway to Success</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with industry leaders and explore diverse career opportunities through our extensive professional
            network
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="partners">Industry Partners</TabsTrigger>
            <TabsTrigger value="careers">Career Paths</TabsTrigger>
          </TabsList>

          <TabsContent value="partners" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedPartnerType === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPartnerType("all")}
              >
                All Industries
              </Button>
              <Button
                variant={selectedPartnerType === "construction" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPartnerType("construction")}
              >
                Construction
              </Button>
              <Button
                variant={selectedPartnerType === "manufacturing" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPartnerType("manufacturing")}
              >
                Manufacturing
              </Button>
              <Button
                variant={selectedPartnerType === "energy" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPartnerType("energy")}
              >
                Energy
              </Button>
              <Button
                variant={selectedPartnerType === "government" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPartnerType("government")}
              >
                Government
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredPartners.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{partner.description}</CardDescription>
                    <div>
                      <h4 className="font-semibold mb-2">Opportunities:</h4>
                      <ul className="space-y-1">
                        {partner.opportunities.map((opportunity, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center bg-blue-50 rounded-2xl p-8">
              <Network className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Join Our Alumni Network</h3>
              <p className="text-muted-foreground mb-4">
                Connect with 500+ graduates working across various industries
              </p>
              <Button variant="outline" className="border-blue-200 bg-transparent">
                <Users className="h-4 w-4 mr-2" />
                View Alumni Network
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="careers" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPaths.map((path, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{path.icon}</div>
                      <Badge variant="outline">{path.level}</Badge>
                    </div>
                    <CardTitle className="text-lg">{path.title}</CardTitle>
                    <div className="text-2xl font-bold text-blue-600">{path.salary}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{path.description}</CardDescription>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Requirements:</h4>
                      <ul className="space-y-1">
                        {path.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ready to Advance Your Career?</h3>
              <p className="text-muted-foreground mb-6">
                Our career counselors will help you plan your path from student to industry leader
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Schedule Career Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Career Guide
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
