"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  course: string
  experience: string
  schedule: string
  message: string
  newsletter: boolean
  whatsapp: boolean
}

const courses = [
  "SMAW (Stick Welding) Fundamentals",
  "TIG Welding Mastery",
  "MIG Welding Professional",
  "Structural Welding Certification",
  "Pipeline Welding",
  "Aluminum Welding Specialist",
  "Welding Business Program",
  "Custom Training Program",
]

const experienceLevels = ["Complete Beginner", "Some Experience", "Intermediate", "Advanced", "Professional"]

const schedulePreferences = [
  "Full-time (Weekdays)",
  "Part-time (Evenings)",
  "Weekend Classes",
  "Flexible Schedule",
  "Accelerated Program",
]

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    schedule: "",
    message: "",
    newsletter: false,
    whatsapp: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      toast({
        title: "Inquiry Submitted Successfully!",
        description: "We'll contact you within 24 hours to discuss your welding education goals.",
      })

      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
          experience: "",
          schedule: "",
          message: "",
          newsletter: false,
          whatsapp: false,
        })
      }, 3000)
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 shadow-lg">
              <CardContent className="p-12">
                <div className="mb-6">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Thank You for Your Inquiry!</h2>
                  <p className="text-muted-foreground">
                    We've received your information and will contact you within 24 hours to discuss your welding
                    education journey.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>Expect a call from +263785054159</span>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://wa.me/263785054159?text=Hi! I just submitted an inquiry form and wanted to follow up.",
                        "_blank",
                      )
                    }
                    className="bg-green-500 hover:bg-green-600"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat on WhatsApp Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Get Started Today
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Welding Career?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out our inquiry form and we'll help you choose the perfect welding program for your goals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Course Inquiry Form</CardTitle>
                <CardDescription>
                  Tell us about your welding education goals and we'll create a personalized learning plan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        placeholder="+263 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Course of Interest *</Label>
                    <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a welding course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level</Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) => handleInputChange("experience", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          {experienceLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="schedule">Preferred Schedule</Label>
                      <Select value={formData.schedule} onValueChange={(value) => handleInputChange("schedule", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preferred schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          {schedulePreferences.map((schedule) => (
                            <SelectItem key={schedule} value={schedule}>
                              {schedule}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Questions or Comments</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your goals, questions, or any specific requirements..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for welding tips and course updates
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="whatsapp"
                        checked={formData.whatsapp}
                        onCheckedChange={(checked) => handleInputChange("whatsapp", checked as boolean)}
                      />
                      <Label htmlFor="whatsapp" className="text-sm">
                        I prefer to be contacted via WhatsApp
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-welding-orange" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+263 785 054 159</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-welding-orange" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">info@mroncywelding.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-welding-orange" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">Harare, Zimbabwe</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-welding-orange" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri: 8AM-5PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Prefer WhatsApp?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Get instant responses to your questions</p>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://wa.me/263785054159?text=Hi! I'm interested in learning about your welding courses.",
                        "_blank",
                      )
                    }
                    className="w-full bg-green-500 hover:bg-green-600"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Response Promise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Personalized course recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free consultation call
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Flexible payment options
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
