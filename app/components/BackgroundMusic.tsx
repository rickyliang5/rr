"use client"

import { useEffect, useRef } from "react"

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5 // Set volume to 50%
      audioRef.current.play().catch((error) => console.log("Audio play failed:", error))
    }
  }, [])

  return <audio ref={audioRef} src="/love.mp3" loop />
}

