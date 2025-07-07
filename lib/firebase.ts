// Mock Firebase configuration for development
// This provides a consistent interface without requiring actual Firebase setup

export const firebaseConfig = {
  apiKey: "mock-api-key",
  authDomain: "mock-project.firebaseapp.com",
  projectId: "mock-project",
  storageBucket: "mock-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
}

// Mock Firebase app
export const app = {
  name: "mock-app",
  options: firebaseConfig,
}

// Mock Firebase auth
export const auth = {
  currentUser: null,
  signInWithEmailAndPassword: async (email: string, password: string) => {
    console.log("Mock sign in:", email)
    return { user: { uid: "mock-uid", email } }
  },
  createUserWithEmailAndPassword: async (email: string, password: string) => {
    console.log("Mock sign up:", email)
    return { user: { uid: "mock-uid", email } }
  },
  signOut: async () => {
    console.log("Mock sign out")
  },
  sendPasswordResetEmail: async (email: string) => {
    console.log("Mock password reset:", email)
  },
}

// Mock Firestore
export const db = {
  collection: (name: string) => ({
    doc: (id: string) => ({
      get: async () => ({ exists: false, data: () => null }),
      set: async (data: any) => console.log("Mock set:", name, id, data),
      update: async (data: any) => console.log("Mock update:", name, id, data),
      delete: async () => console.log("Mock delete:", name, id),
    }),
    add: async (data: any) => console.log("Mock add:", name, data),
    where: () => ({
      get: async () => ({ docs: [] }),
    }),
  }),
}

export function getFirebaseStatus() {
  return {
    configured: true,
    app: true,
    auth: true,
    db: true,
  }
}
