"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, X, Send } from "lucide-react"

const WHATSAPP_NUMBER = "263785054159"

const quickMessages = [
  "Hi! I'm interested in welding courses.",
  "What are your course fees?",
  "When is the next intake?",
  "Can I visit your facility?",
  "Do you offer payment plans?",
]

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [customMessage, setCustomMessage] = useState("")

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
    setCustomMessage("")
  }

  const handleCustomMessage = () => {
    if (customMessage.trim()) {
      sendWhatsAppMessage(customMessage)
    }
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
            size="lg"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <Card className="w-80 shadow-2xl">
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Chat with Us</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-green-100">We typically reply within minutes</p>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="text-sm text-gray-600">Choose a quick message or write your own:</div>

              {/* Quick Messages */}
              <div className="space-y-2">
                {quickMessages.map((message, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start h-auto p-3 text-wrap bg-transparent"
                    onClick={() => sendWhatsAppMessage(message)}
                  >
                    {message}
                  </Button>
                ))}
              </div>

              {/* Custom Message */}
              <div className="space-y-2">
                <Textarea
                  placeholder="Type your message..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button
                  onClick={handleCustomMessage}
                  className="w-full bg-green-500 hover:bg-green-600"
                  disabled={!customMessage.trim()}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>

              <div className="text-xs text-gray-500 text-center">Powered by WhatsApp • +{WHATSAPP_NUMBER}</div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
