"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FileHeart, ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Logo from "./Logo"

export default function FileTree() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleFileTree = () => setIsOpen(!isOpen)

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  }

  const menuItems = [
    { href: "/about", label: "about.tsx" },
    { href: "/projects", label: "projects.tsx" },
    { href: "/blog", label: "blog.tsx" },
    { href: "/contact", label: "contact.tsx" },
  ]

  return (
    <div>
      <AnimatePresence>
        {isMobile && (
          <motion.button
            onClick={toggleFileTree}
            className="fixed top-4 left-4 z-30 p-2 bg-[rgb(var(--gutter))] rounded-md shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.div
            className="file-tree w-64 h-screen bg-[rgb(var(--gutter))] border-r border-[rgb(var(--foreground))]/10 shadow-xl fixed top-0 left-0 z-20 overflow-y-auto pb-12"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="sticky top-0 bg-[rgb(var(--gutter))] z-10 p-4 border-b border-[rgb(var(--foreground))]/15">
              <Logo />
            </div>

            <nav className="mt-6">
              <motion.div
                className="file-tree-item flex items-center text-[rgb(var(--function))] font-bold tracking-widest uppercase px-4 py-2 cursor-pointer border-l-4 border-transparent hover:border-[rgb(var(--keyword))] transition-all duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <ChevronDown size={16} className="text-[rgb(var(--variable))] mr-2" />
                <span className="select-none">warren</span>
              </motion.div>

              <div className="pl-8 space-y-3 mt-2 border-l border-[rgb(var(--foreground))]/15">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="file-tree-item flex items-center gap-3 cursor-pointer group transition-all"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <FileHeart
                      size={18}
                      className="text-[rgb(var(--string))] group-hover:text-[rgb(var(--function))] transition-colors"
                    />
                    <Link
                      href={item.href}
                      className="text-[rgb(var(--variable))] group-hover:text-[rgb(var(--keyword))] transition duration-300 font-medium"
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            <motion.div
              className="fixed bottom-12 left-0 w-64 p-4 text-center bg-[rgb(var(--gutter))] border-t border-[rgb(var(--foreground))]/15"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm text-[rgb(var(--variable))]">© 2025 RabbitHome. Crafted with </p>
              <motion.svg
              className="mx-1 w-6 h-6 text-red-500 inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              initial={{ scale: 0 }}
              animate={{
                scale: 1, 
                rotate: 0, 
              }}
              transition={{
                duration: 0,
                repeat: 0,
              }}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
              <motion.path
                d="M12 13c-1.5 0-2.5-1.5-2.5-3s1-3 2.5-3c1.5 0 2.5 1.5 2.5 3s-1 3-2.5 3z"
                fill="currentColor"
                animate={{
                  y: [0, 0, 0],
                }}
                transition={{
                  duration: 0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

