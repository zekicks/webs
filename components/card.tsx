"use client"

import { motion } from "framer-motion"
import VanillaTilt from "vanilla-tilt"
import { useEffect, useRef, type ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  href: string
  gradientClassName?: string
}

export function Card({ children, className = "", href, gradientClassName = "" }: CardProps) {
  const cardRef = useRef(null)

  useEffect(() => {
    const element = cardRef.current
    VanillaTilt.init(element, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    })
    return () => element.vanillaTilt.destroy()
  }, [])

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        ref={cardRef}
        className={`relative overflow-hidden backdrop-blur-sm rounded-2xl p-6 h-full shadow-lg transition-shadow duration-300 card-content ${className}`}
      >
        <div className={`absolute inset-0 animated-gradient ${gradientClassName}`}></div>
        <div className="relative z-10">{children}</div>
      </div>
    </motion.a>
  )
}

