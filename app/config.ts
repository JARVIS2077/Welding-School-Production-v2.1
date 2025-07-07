// Application configuration
export const config = {
  site: {
    name: "Mroncy School of Welding",
    description: "Professional Welding Training in Zimbabwe",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mroncywelding.com",
    author: "Daniel Muronzi",
  },
  contact: {
    email: "mroncyweldingschoolzw@gmail.com",
    phone: "+263 77 123 4567",
    address: "Harare, Zimbabwe",
  },
  social: {
    facebook: "https://facebook.com/mroncywelding",
    instagram: "https://instagram.com/mroncywelding",
    linkedin: "https://linkedin.com/company/mroncywelding",
    youtube: "https://youtube.com/@mroncywelding",
  },
  features: {
    enableBlog: true,
    enableGallery: true,
    enableTestimonials: true,
    enableCourseBooking: true,
    enablePayments: true,
  },
  payment: {
    currency: "USD",
    supportedMethods: [
      "ECOCASH",
      "INNBUCKS",
      "ONEMONEY",
      "ZIMSWITCH",
      "VISA",
      "MASTERCARD",
      "PAYPAL",
      "OMARI",
      "BANK_TRANSFER",
      "CASH",
    ],
  },
}
