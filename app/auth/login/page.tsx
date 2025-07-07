"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChromeIcon } from "lucide-react"
import FullPageLoader from "@/components/ui/full-page-loader"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError(null)

    try {
      // Mock Google sign-in
      console.log("Mock Google sign-in")

      // Simulate authentication delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to dashboard
      router.push(callbackUrl)
    } catch (error) {
      console.error("Sign-in error:", error)
      setError("Failed to sign in. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <FullPageLoader message="Signing you in..." />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950 p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to access your student dashboard.</p>
        </div>

        {error && <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">{error}</div>}

        <Button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          variant="default"
        >
          <ChromeIcon className="mr-2 h-5 w-5" />
          {loading ? "Signing in..." : "Sign in with Google"}
        </Button>

        <div className="text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Are you an administrator?{" "}
            <Link href="/admin/login" className="font-medium text-primary hover:underline">
              Admin Login
            </Link>
          </p>
        </div>
        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-primary hover:underline">
            &larr; Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
