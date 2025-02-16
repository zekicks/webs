"use client"

import { Star } from "lucide-react"
import VanillaTilt from "vanilla-tilt"
import { useEffect, useRef } from "react"

export function TiltCard() {
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
    <div ref={cardRef} className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 max-w-xl border border-white/10">
      <div className="flex items-start gap-2 card-content">
        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        <div className="flex-1">
          <h2 className="text-xl font-medium text-white/90">
            Портфолио <span className="text-white/60">v2 / ggsky.one</span>
          </h2>
          <div className="flex gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/80 rounded-full" />
              <span>Nuxt 3.15.3</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/80 rounded-full" />
              <span>Vue 3.5.13</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/80 rounded-full" />
              <span>Tailwind 4.0.0</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>Done, receiving updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/80 rounded-full" />
              <span>Production</span>
            </div>
          </div>
          <p className="mt-4 text-white/70">
            Мой сайт-портфолио! Планирую обновлять его в дальнейшем, многостраничный сайт, исходный код закрыт.
          </p>
        </div>
      </div>
    </div>
  )
}

