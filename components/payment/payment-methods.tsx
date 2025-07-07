"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Clock, CreditCard, Smartphone } from "lucide-react"
import { getPaymentMethodsByType, whatsappSupport, type PaymentMethod } from "@/lib/payment-methods"
import Image from "next/image"

function PaymentMethodCard({ method }: { method: PaymentMethod }) {
  const [showInstructions, setShowInstructions] = useState(false)

  const getWhatsAppHelp = () => {
    const message = whatsappSupport.getPaymentHelpMessage(method.name)
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappSupport.number}?text=${encodedMessage}`, "_blank")
  }

  const getTypeIcon = () => {
    switch (method.type) {
      case "mobile":
        return <Smartphone className="h-4 w-4" />
      case "card":
        return <CreditCard className="h-4 w-4" />
      default:
        return <CreditCard className="h-4 w-4" />
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-16">
              <Image
                src={method.logo || "/placeholder.svg"}
                alt={`${method.name} logo`}
                fill
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=48&width=64"
                }}
              />
            </div>
            <div>
              <CardTitle className="text-lg">{method.name}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {getTypeIcon()}
                  <span className="ml-1 capitalize">{method.type}</span>
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {method.processingTime}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{method.description}</p>

        {method.fees && (
          <div className="text-sm">
            <span className="font-medium">Fees: </span>
            <span className="text-muted-foreground">{method.fees}</span>
          </div>
        )}

        <div className="flex gap-2">
          <Dialog open={showInstructions} onOpenChange={setShowInstructions}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                View Instructions
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <div className="relative h-8 w-10">
                    <Image
                      src={method.logo || "/placeholder.svg"}
                      alt={`${method.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {method.name} Payment Instructions
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-medium mb-2">Processing Time:</p>
                  <p className="text-sm text-muted-foreground">{method.processingTime}</p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-3">Step-by-step instructions:</p>
                  <ol className="space-y-2">
                    {method.instructions.map((instruction, index) => (
                      <li key={index} className="text-sm flex gap-2">
                        <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button onClick={getWhatsAppHelp} className="flex-1" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Get Help
                  </Button>
                  <Button variant="outline" onClick={() => setShowInstructions(false)} size="sm">
                    Close
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button onClick={getWhatsAppHelp} size="sm" variant="outline">
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function PaymentMethods() {
  const mobilePayments = getPaymentMethodsByType("mobile")
  const cardPayments = getPaymentMethodsByType("card")
  const bankPayments = getPaymentMethodsByType("bank")
  const cashPayments = getPaymentMethodsByType("cash")

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Payment Methods</h2>
        <p className="text-muted-foreground">
          Choose your preferred payment method. Need help?
          <Button
            variant="link"
            className="p-0 ml-1 h-auto"
            onClick={() => {
              const encodedMessage = encodeURIComponent(whatsappSupport.message)
              window.open(`https://wa.me/${whatsappSupport.number}?text=${encodedMessage}`, "_blank")
            }}
          >
            Contact us on WhatsApp
          </Button>
        </p>
      </div>

      <Tabs defaultValue="mobile" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mobile" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            Mobile Money
          </TabsTrigger>
          <TabsTrigger value="cards" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Cards & Online
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mobile" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {mobilePayments.map((method) => (
              <PaymentMethodCard key={method.id} method={method} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cards" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {cardPayments.map((method) => (
              <PaymentMethodCard key={method.id} method={method} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          All payments are secure and processed through trusted payment providers. Your financial information is
          protected with bank-level security.
        </p>
      </div>
    </div>
  )
}
