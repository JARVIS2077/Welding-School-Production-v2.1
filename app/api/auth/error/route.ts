import { NextResponse } from "next/server"

// Error descriptions mapping
const errorDescriptions: Record<string, string> = {
  configuration: "The authentication service is not properly configured. Please contact the administrator.",
  accessdenied: "You don't have permission to access this resource.",
  verification: "Your verification link has expired or is invalid.",
  signin: "We couldn't sign you in with the provided credentials.",
  default: "An unexpected authentication error occurred. Please try again later.",
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const error = searchParams.get("error") || "default"

    const description = errorDescriptions[error] || errorDescriptions.default

    return NextResponse.json(
      {
        error,
        description,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Auth error API error:", error)
    return NextResponse.json(
      {
        error: "unknown",
        description: "An unexpected error occurred while processing the error details.",
      },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
