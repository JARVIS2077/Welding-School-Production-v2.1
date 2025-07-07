"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
          <CardDescription>Join Mroncy School of Welding to start your journey.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-gray-600">
            Please use the "Sign In with Google" option on our login page to create your account.
          </p>
          <Button asChild className="w-full btn-primary">
            <Link href="/auth/login">Go to Sign In Page</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
