'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingMessageProps {
  message: string
  onComplete: () => void
}

export default function TypingMessage({ message, onComplete }: TypingMessageProps) {
  const [displayedMessage, setDisplayedMessage] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setDisplayedMessage((prev) => {
        if (index < message.length) {
          index++
          return message.slice(0, index)
        }
        clearInterval(timer)
        onComplete()
        return prev
      })
    }, 50) // Adjust typing speed here

    return () => clearInterval(timer)
  }, [message, onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="font-script text-2xl text-rose-700 leading-relaxed"
    >
      {displayedMessage}
    </motion.div>
  )
}
