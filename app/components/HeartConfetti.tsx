"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function HeartConfetti() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  if (typeof window === "undefined") return null

  return (
    <Confetti
      width={windowDimensions.width}
      height={windowDimensions.height}
      confettiSource={{ x: 0, y: 0, w: windowDimensions.width, h: 0 }}
      numberOfPieces={100}
      recycle={false}
      colors={["#FF69B4", "#FF1493", "#C71585"]}
      drawShape={(ctx) => {
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, 10)
        ctx.lineTo(10, 10)
        ctx.lineTo(10, 0)
        ctx.lineTo(5, -5)
        ctx.closePath()
        ctx.fill()
      }}
    />
  )
}

