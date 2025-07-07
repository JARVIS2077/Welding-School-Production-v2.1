// Simplified auth configuration without NextAuth
export const authOptions = {
  providers: [],
  session: { strategy: "jwt" as const },
  callbacks: {},
}

// Mock auth functions for compatibility
export function getServerSession() {
  return Promise.resolve(null)
}

export function signIn(provider: string, options?: any) {
  console.log("Mock sign in with:", provider, options)
  return Promise.resolve()
}

export function signOut() {
  console.log("Mock sign out")
  return Promise.resolve()
}
