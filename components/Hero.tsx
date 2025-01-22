"use client"

import { useState, useEffect } from "react"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "Welcome to rabbitHome"

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center font-mono">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          {text}
          <span className="vim-cursor"></span>
        </h1>
        <p className="text-xl mb-8 text-[#F5E0DC]">A unique interactive Vim-inspired portfolio experience</p>
        <button className="bg-[#F5C2E7] text-[#1E1E2E] px-6 py-2 rounded-full hover:bg-[#89DAEB] transition-colors">
          :explore
        </button>
      </div>
      <div className="vim-command-line">:set theme=rabbitHome</div>
    </section>
  )
}

export default Hero

