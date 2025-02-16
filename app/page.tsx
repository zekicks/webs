import { AnimatedText } from "@/components/animated-text"
import { TelegramCard } from "@/components/telegram-card"
import { YouTubeCard } from "@/components/youtube-card"
import { Avatar } from "@/components/avatar"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-12 p-4">
      <div>
        <Avatar />
        <AnimatedText />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <TelegramCard />
        <YouTubeCard />
      </div>
    </main>
  )
}

