import "./globals.css"
import { Azeret_Mono as Geist_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import FileTree from "@/components/FileTree"
import StatusLine from "@/components/StatusLine"

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "rabbitHome",
  description: "A Vim-inspired portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rabbit.png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn(geistMono.className, "bg-[#1c1c1c] text-[#d4d4d4] min-h-screen flex flex-col")}>
        <div className="flex flex-1 overflow-hidden">
          <FileTree />
          <main className="flex-1 p-4 sm:p-6 pb-16 relative overflow-y-auto sm:ml-64">
            <div className="fixed inset-0 -z-10">
              <img src="/rabbit.png" alt="Rabbit" className="object-cover w-full h-full opacity-20" />
            </div>
            <div className="relative">{children}</div>
          </main>
        </div>
        <StatusLine />
      </body>
    </html>
  )
}

