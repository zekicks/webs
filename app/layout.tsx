import type React from "react"
import "@/app/globals.css"
import { Rubik_Mono_One } from "next/font/google"

const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rubikMonoOne.className}>{children}</body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
