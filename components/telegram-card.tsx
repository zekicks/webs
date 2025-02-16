import { Send } from "lucide-react"
import { Card } from "./card"

export function TelegramCard() {
  return (
    <Card
      href="https://t.me/zekicks"
      className="bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400 hover:shadow-blue-500/50"
      gradientClassName="telegram-gradient"
    >
      <div className="flex items-start gap-4">
        <Send className="w-8 h-8 text-white" />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Моя личка <span className="text-blue-200">t.me/zekicks</span>
          </h2>
          <p className="text-blue-100 mb-4">
            Свяжитесь со мной напрямую через Telegram для быстрого и удобного общения.
          </p>
          <div className="flex items-center gap-2 text-blue-200">
            <div className="w-2 h-2 bg-blue-200 rounded-full" />
            <span>Доступен для сообщений</span>
          </div>
          <div className="mt-4 text-white font-medium">Нажмите, чтобы открыть чат →</div>
        </div>
      </div>
    </Card>
  )
}

