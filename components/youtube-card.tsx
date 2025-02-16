import { Youtube } from "lucide-react"
import { Card } from "./card"

export function YouTubeCard() {
  return (
    <Card
      href="https://www.youtube.com/@_goddamn"
      className="bg-gradient-to-br from-[#ee5cf3] to-[#7cd9e6] border border-pink-400 hover:shadow-pink-500/50"
      gradientClassName="youtube-gradient"
    >
      <div className="flex items-start gap-4">
        <Youtube className="w-8 h-8 text-white" />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-white mb-2">
            гаддэм 🚬 <span className="text-pink-200">YouTube</span>
          </h2>
          <p className="text-pink-100 mb-4">Игровые обзоры, айти приколы и мое личное мнение о разных вещах в мире.</p>
          <div className="flex items-center gap-2 text-pink-200 mb-2">
            <div className="w-2 h-2 bg-pink-200 rounded-full" />
            <span>Игровые обзоры</span>
          </div>
          <div className="flex items-center gap-2 text-blue-200 mb-2">
            <div className="w-2 h-2 bg-blue-200 rounded-full" />
            <span>Айти приколы</span>
          </div>
          <div className="flex items-center gap-2 text-purple-200">
            <div className="w-2 h-2 bg-purple-200 rounded-full" />
            <span>Личное мнение</span>
          </div>
          <div className="mt-4 text-white font-medium">Подпишись на канал →</div>
        </div>
      </div>
    </Card>
  )
}

