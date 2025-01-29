'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TypingMessage from './TypingMessage'
import { Heart } from 'lucide-react'

export default function ValentineMessage() {
  const [showHearts, setShowHearts] = useState(false)

  const message = `Happy five years babe! Thank you for being the best and cutest girlfriend in the world. I hope we last forever and have some kids and a happy family. Happy boy, I love you so much! ❤️`

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 p-6 overflow-y-auto">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <TypingMessage message={message} onComplete={() => setShowHearts(true)} />
      </motion.div>
      {showHearts && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "100%", x: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{
                y: "-100%",
                opacity: [0, 1, 0],
                transition: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4 + Math.random() * 2,
                  delay: Math.random() * 2,
                },
              }}
            >
              <Heart className="text-rose-500 w-6 h-6" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}