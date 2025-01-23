import "./globals.css"
import { Azeret_Mono as Geist_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import FileTree from "@/components/FileTree"
import StatusLine from "@/components/StatusLine"

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "rabbitHome",
  description: "Abhinav Patel's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/rabbit.png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn(geistMono.className, "bg-[#1c1c1cf0] text-[#e4e4e4] min-h-screen flex flex-col")}>        
        <div className="flex flex-1 overflow-hidden">
          <FileTree />
          <main className="flex-1 p-4 sm:p-6 pb-16 relative overflow-y-auto sm:ml-64">
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <img src="/bg.png" alt="Rabbit" className="object-cover w-full h-full opacity-20 blur-sm fixed" />
            </div>
            <div className="relative text-[#ffffffde] drop-shadow-md pb-36">{children}</div>
          </main>
        </div>
        <StatusLine />
      </body>
    </html>
  )
}
