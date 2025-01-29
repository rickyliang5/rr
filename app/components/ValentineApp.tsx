"use client"

import { useState, useEffect } from "react"
import IPhoneFrame from "./iPhoneFrame"
import LockScreen from "./LockScreen"
import ImageCarousel from "./ImageCarousel"
import ValentineMessage from "./ValentineMessage"
import HeartConfetti from "./HeartConfetti"
import BackgroundMusic from "./BackgroundMusic"

export default function ValentineApp() {
  const [showLockScreen, setShowLockScreen] = useState(true)
  const [showCarousel, setShowCarousel] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [showMusic, setShowMusic] = useState(false)

  const handleUnlock = () => {
    setShowLockScreen(false)
    setShowCarousel(true)
    setShowMusic(true)
  }

  useEffect(() => {
    if (showCarousel) {
      const timer = setTimeout(() => {
        setShowCarousel(false)
        setShowMessage(true)
      }, 21000) // 7 images * 3 seconds each

      return () => clearTimeout(timer)
    }
  }, [showCarousel])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-valentine-pink">
      <IPhoneFrame>
        {showLockScreen && <LockScreen onUnlock={handleUnlock} />}
        {showCarousel && <ImageCarousel />}
        {showMessage && <ValentineMessage />}
      </IPhoneFrame>
      {showMessage && <HeartConfetti />}
      {showMusic && <BackgroundMusic />}
    </main>
  )
}

