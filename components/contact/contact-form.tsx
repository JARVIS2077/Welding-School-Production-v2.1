"use client"

import type React from "react"

import { useRef, useState } from "react"
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    if (!formRef.current) {
      console.error("Form element not found")
      return
    }

    try {
      const formData = new FormData(formRef.current)
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      }

      // Basic validation
      if (!data.name || !data.email || !data.subject || !data.message) {
        setErrorMessage("Please fill in all required fields.")
        return
      }

      // Simulate form submission
      console.log("Contact form submission:", data)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setShowSuccessMessage(true)
      formRef.current.reset()

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setErrorMessage("There was an error submitting your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
          <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
          <p className="text-green-800">Thank you for your message! We'll get back to you within 24 hours.</p>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
          <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
          <p className="text-red-800">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange border-gray-300 text-sm sm:text-base"
            placeholder="Your full name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange border-gray-300 text-sm sm:text-base"
            placeholder="Your email address"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange border-gray-300"
          placeholder="Your phone number"
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange border-gray-300"
          placeholder="Subject of your message"
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange border-gray-300"
          placeholder="Your message"
          disabled={isSubmitting}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full transition-all duration-300 transform hover:scale-105 py-2 sm:py-3 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 size={18} className="mr-2 animate-spin" />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}

export default ContactForm
