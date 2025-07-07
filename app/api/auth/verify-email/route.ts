import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")

    if (!token) {
      return NextResponse.json({ error: "Missing verification token" }, { status: 400 })
    }

    // Mock email verification
    console.log("Email verification token:", token)

    return NextResponse.json({
      success: true,
      message: "Email verified successfully",
    })
  } catch (error) {
    console.error("Email verification error:", error)
    return NextResponse.json(
      { message: "An error occurred during email verification", success: false },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ message: "Verification token is required", success: false }, { status: 400 })
    }

    // Mock email verification
    console.log("Email verification token:", token)

    return NextResponse.json({ message: "Email verified successfully", success: true }, { status: 200 })
  } catch (error) {
    console.error("Email verification error:", error)
    return NextResponse.json(
      { message: "An error occurred during email verification", success: false },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
