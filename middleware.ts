import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAuthenticatedCookie = request.cookies.get("fb-authed")?.value === "true"

  const isAdminRoute = pathname.startsWith("/admin")
  const isDashboardRoute = pathname.startsWith("/dashboard")
  const isAuthRoute = pathname.startsWith("/auth")

  // Add security headers
  const response = NextResponse.next()

  // Security headers
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // CSP header
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';",
  )

  // Skip middleware for API routes and static files
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/images/") ||
    pathname.includes(".")
  ) {
    return response
  }

  // If trying to access auth pages while authenticated, redirect to dashboard
  if (isAuthRoute && isAuthenticatedCookie && pathname !== "/auth/logout") {
    // Assuming /auth/logout might be a page that clears things
    // Check if it's the admin login page and if the user is potentially an admin
    // This part is tricky without knowing admin status from cookie alone.
    // A simpler approach: always redirect from /auth/login to a default dashboard.
    // Client-side logic in dashboard will then route to admin dashboard if applicable.
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // If trying to access protected admin routes without auth cookie, redirect to admin login
  if (isAdminRoute && !isAuthenticatedCookie && pathname !== "/admin/login") {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  // If trying to access protected dashboard routes without auth cookie, redirect to login
  if (isDashboardRoute && !isAuthenticatedCookie) {
    return NextResponse.redirect(new URL("/auth/login?callbackUrl=" + pathname, request.url))
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
