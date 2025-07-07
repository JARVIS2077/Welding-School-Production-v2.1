import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    providers: ["credentials"],
    session: {
      strategy: "jwt",
    },
  })
}
