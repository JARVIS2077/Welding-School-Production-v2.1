import { NextResponse } from "next/server"

export async function GET() {
  // Mock user profile
  return NextResponse.json({
    id: "1",
    name: "Test User",
    email: "test@example.com",
    role: "student",
  })
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    console.log("Profile update:", body)

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
  }
}
