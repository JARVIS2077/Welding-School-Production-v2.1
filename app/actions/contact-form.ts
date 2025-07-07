"use server"

import { z } from "zod"

// Define validation schema (removed reCAPTCHA)
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export type ContactFormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  data?: ContactFormData
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Parse and validate form data
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // Log the contact form submission (in production, this would send an email)
    console.log("Contact form submission:", validatedFields.data)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success state
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
      data: validatedFields.data,
    }
  } catch (error) {
    // Handle any errors that occur during submission
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "There was an error submitting your message. Please try again later.",
    }
  }
}
