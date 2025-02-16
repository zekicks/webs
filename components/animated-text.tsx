"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedText() {
  const [text, setText] = useState("GDMN")

  useEffect(() => {
    const interval = setInterval(() => {
      setText((current) => (current === "GDMN" ? "ZEKICKS" : "GDMN"))
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-8xl tracking-tighter"
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}

