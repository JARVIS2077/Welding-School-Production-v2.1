export interface PaymentMethod {
  id: string
  name: string
  type: "mobile" | "card" | "bank" | "cash"
  logo: string
  description: string
  instructions: string[]
  processingTime: string
  fees?: string
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "ecocash",
    name: "EcoCash",
    type: "mobile",
    logo: "/images/payment/ecocash-badge.svg",
    description: "Pay instantly with EcoCash mobile money",
    processingTime: "Instant",
    instructions: [
      "Dial *151# on your phone",
      "Select Send Money",
      "Enter Merchant Code: 123456",
      "Enter amount and confirm",
      "Keep transaction reference for our records",
    ],
  },
  {
    id: "onemoney",
    name: "OneMoney",
    type: "mobile",
    logo: "/images/payment/onemoney-badge.svg",
    description: "NetOne OneMoney mobile payments",
    processingTime: "Instant",
    instructions: [
      "Dial *111# on your NetOne line",
      "Select Send Money to Merchant",
      "Enter Merchant Number: 789012",
      "Enter amount and PIN",
      "Save confirmation SMS",
    ],
  },
  {
    id: "innbucks",
    name: "InnBucks",
    type: "mobile",
    logo: "/images/payment/innbucks-badge.svg",
    description: "Steward Bank InnBucks wallet",
    processingTime: "Instant",
    instructions: [
      "Open InnBucks app or dial *774#",
      "Select Pay Merchant",
      "Enter Merchant Code: 345678",
      "Enter amount and confirm with PIN",
      "Screenshot confirmation for records",
    ],
  },
  {
    id: "zimswitch",
    name: "ZimSwitch",
    type: "card",
    logo: "/images/payment/zimswitch-badge.svg",
    description: "Local debit/credit card payments",
    processingTime: "1-2 business days",
    instructions: [
      "Visit any ZimSwitch enabled ATM or bank",
      "Use your local debit/credit card",
      "Select bill payment option",
      "Enter our merchant details",
      "Keep receipt for verification",
    ],
  },
  {
    id: "visa",
    name: "Visa",
    type: "card",
    logo: "/images/payment/visa-badge.svg",
    description: "International Visa card payments",
    processingTime: "2-3 business days",
    instructions: [
      "Use our secure online payment portal",
      "Enter your Visa card details",
      "Confirm billing address",
      "Complete 3D Secure verification",
      "Receive email confirmation",
    ],
  },
  {
    id: "mastercard",
    name: "Mastercard",
    type: "card",
    logo: "/images/payment/mastercard-badge.svg",
    description: "International Mastercard payments",
    processingTime: "2-3 business days",
    instructions: [
      "Access our secure payment gateway",
      "Enter Mastercard information",
      "Verify with your bank",
      "Complete transaction",
      "Save payment confirmation",
    ],
  },
  {
    id: "paypal",
    name: "PayPal",
    type: "card",
    logo: "/images/payment/paypal-badge.svg",
    description: "Secure PayPal payments worldwide",
    processingTime: "1-2 business days",
    instructions: [
      "Click PayPal payment option",
      "Login to your PayPal account",
      "Select payment method",
      "Review and confirm payment",
      "Return to our site for confirmation",
    ],
  },
  {
    id: "omari",
    name: "Omari",
    type: "mobile",
    logo: "/images/payment/omari-badge.svg",
    description: "TeleCash Omari mobile wallet",
    processingTime: "Instant",
    instructions: [
      "Dial *572# from your Telecel line",
      "Select Pay Bills",
      "Enter Merchant ID: 901234",
      "Input payment amount",
      "Confirm with your PIN",
    ],
  },
]

export const getPaymentMethodsByType = (type: PaymentMethod["type"]) => {
  return paymentMethods.filter((method) => method.type === type)
}

export const getPaymentMethodById = (id: string) => {
  return paymentMethods.find((method) => method.id === id)
}

export const whatsappSupport = {
  number: "263785054159",
  message: "Hi! I need help with payment for welding courses.",
  getPaymentHelpMessage: (methodName: string) =>
    `Hi! I need help with ${methodName} payment for welding courses. Can you assist me?`,
}
