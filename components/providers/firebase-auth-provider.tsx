"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
}

interface FirebaseAuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const FirebaseAuthContext = createContext<FirebaseAuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(FirebaseAuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within a FirebaseAuthProvider")
  }
  return context
}

// Also export as useFirebaseAuth for backwards compatibility
export const useFirebaseAuth = useAuth

interface FirebaseAuthProviderProps {
  children: ReactNode
}

export function FirebaseAuthProvider({ children }: FirebaseAuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock Firebase auth state listener
    const checkAuthState = () => {
      try {
        const savedUser = localStorage.getItem("mock_user")
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error("Error checking auth state:", error)
      } finally {
        setLoading(false)
      }
    }

    checkAuthState()
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      // Mock Firebase sign in
      const mockUser: User = {
        uid: Date.now().toString(),
        email,
        displayName: email.split("@")[0],
        photoURL: null,
      }

      setUser(mockUser)
      localStorage.setItem("mock_user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Sign in error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string) => {
    setLoading(true)
    try {
      // Mock Firebase sign up
      const mockUser: User = {
        uid: Date.now().toString(),
        email,
        displayName: email.split("@")[0],
        photoURL: null,
      }

      setUser(mockUser)
      localStorage.setItem("mock_user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Sign up error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setLoading(true)
    try {
      setUser(null)
      localStorage.removeItem("mock_user")
    } catch (error) {
      console.error("Sign out error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    try {
      // Mock password reset
      console.log("Password reset email sent to:", email)
    } catch (error) {
      console.error("Password reset error:", error)
      throw error
    }
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
  }

  return <FirebaseAuthContext.Provider value={value}>{children}</FirebaseAuthContext.Provider>
}
