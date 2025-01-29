"use client"

import { motion } from "framer-motion"

export default function ValentineMessage() {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-red-500 mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        Will you be my Valentine?
      </motion.h1>
      <motion.div
        className="text-6xl"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        ❤️
      </motion.div>
    </motion.div>
  )
}

