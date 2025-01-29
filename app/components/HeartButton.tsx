"use client"

import { motion } from "framer-motion"

export default function HeartButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      className="w-40 h-40 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        ❤️ Click Here
      </motion.div>
    </motion.button>
  )
}

