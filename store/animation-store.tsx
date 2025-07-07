"use client"

import { create } from "zustand"

interface AnimationState {
  isAnimating: boolean
  currentAnimation: string | null
  animationQueue: string[]
  setAnimating: (isAnimating: boolean) => void
  setCurrentAnimation: (animation: string | null) => void
  addToQueue: (animation: string) => void
  removeFromQueue: (animation: string) => void
  clearQueue: () => void
}

export const useAnimationStore = create<AnimationState>((set, get) => ({
  isAnimating: false,
  currentAnimation: null,
  animationQueue: [],

  setAnimating: (isAnimating: boolean) => set({ isAnimating }),

  setCurrentAnimation: (animation: string | null) => set({ currentAnimation: animation }),

  addToQueue: (animation: string) =>
    set((state) => ({
      animationQueue: [...state.animationQueue, animation],
    })),

  removeFromQueue: (animation: string) =>
    set((state) => ({
      animationQueue: state.animationQueue.filter((item) => item !== animation),
    })),

  clearQueue: () => set({ animationQueue: [] }),
}))
