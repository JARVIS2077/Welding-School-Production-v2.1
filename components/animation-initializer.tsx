"use client"

import { useEffect } from "react"
import { useAnimationStore } from "@/store/animation-store"

// ------------------------------
// NAMED + DEFAULT EXPORT
// ------------------------------
export function AnimationInitializer() {
  const { setAnimating, setCurrentAnimation } = useAnimationStore()

  useEffect(() => {
    // Initialize animations on component mount
    const initializeAnimations = () => {
      // Set up initial animation state
      setAnimating(false)
      setCurrentAnimation(null)

      // Add any initialization logic here
      console.log("Animation system initialized")
    }

    initializeAnimations()

    // Cleanup function
    return () => {
      setAnimating(false)
      setCurrentAnimation(null)
    }
  }, [setAnimating, setCurrentAnimation])

  // This component doesn't render anything visible
  return null
}

export default AnimationInitializer
