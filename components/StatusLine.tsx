"use client"
import { motion } from "framer-motion"
import { Code, GitBranch, Clock } from "lucide-react"

export default function StatusLine() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-[rgb(var(--gutter))] text-[rgb(var(--variable))] border-t border-[rgb(var(--foreground))]/15 py-2 px-4 flex justify-between items-center text-sm z-50"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-4">
        <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
          <Code size={14} />
          <span>rabbitHome</span>
        </motion.div>
        <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
          <GitBranch size={14} />
          <span>main</span>
        </motion.div>
      </div>
      <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
        <Clock size={14} />
        <span>{new Date().toLocaleTimeString()}</span>
      </motion.div>
    </motion.div>
  )
}
