"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
        x: [0, 5, 0],
      }}
      transition={{
        opacity: { duration: 0.5, ease: "easeOut" },
        scale: { duration: 0.5, ease: "easeOut" },
        y: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        x: {
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8"
    >
      {/* Градиентная рамка */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ee5cf3] to-[#7cd9e6] animate-pulse" />
      {/* Черный фон */}
      <div className="absolute inset-[3px] rounded-full bg-black" />
      {/* Белая обводка */}
      <div className="absolute inset-[2px] rounded-full border-2 border-white/20" />
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5f03551d4ea894f6abca8869f5ecbfa3-HsWrbzu5TOUNkIslXulrXrnkNeMdWf.gif"
        alt="Avatar"
        width={160}
        height={160}
        className="rounded-full relative z-10 object-cover"
        priority
        unoptimized // Важно для корректного воспроизведения GIF
      />
    </motion.div>
  )
}

