"use client"

import { useState, useEffect } from "react"
import { motion, PanInfo } from "framer-motion"
import Image from "next/image"

interface LockScreenProps {
  onUnlock: () => void
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isDragging, setIsDragging] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Initialize the audio object
    const audioObj = new Audio("./love.mp3")
    setAudio(audioObj)
  }, [])

  const handleDragEnd = (event: MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.y < -50) {
      onUnlock()
      if (audio) {
        audio.play() // Play the audio when swiped up
      }
    }
    setIsDragging(false)
  }

  return (
    <div className="relative w-full h-full">
      <Image src="/images/one.jpg" alt="Lockscreen Background" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-30">
        <div className="text-white text-4xl font-semibold mt-12 text-center">
          {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          className="w-full flex justify-center items-center mb-8"
        >
          <motion.div
            animate={isDragging ? { y: -20 } : { y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white bg-opacity-50 rounded-full p-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}