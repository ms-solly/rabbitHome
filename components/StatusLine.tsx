// import { FileText, GitGraphIcon as Git, GitBranchIcon as Branch } from "lucide-react"

// export default function StatusLine() {
//   return (
//     <div className="status-line fixed bottom-0 left-0 right-0 h-6 px-4 text-sm flex items-center justify-between">
//       <div className="flex items-center gap-4">
//         <span className="flex items-center gap-2">
//           <Git size={14} className="text-[rgb(var(--function))]" />
//           <span>main</span>
//         </span>
//         <span className="flex items-center gap-2">
//           <Branch size={14} className="text-[rgb(var(--string))]" />
//           <span>portfolio</span>
//         </span>
//       </div>
//       <div className="flex items-center gap-2">
//         <FileText size={14} />
//         <span>TypeScript</span>
//         <span className="text-[rgb(var(--comment))]">UTF-8</span>
//       </div>
//     </div>
//   )
// }

"use client"
import { motion } from "framer-motion"
import { Code, GitBranch, Clock } from "lucide-react"

export default function StatusLine() {
  return (
    <motion.div
      className="bg-[rgb(var(--gutter))] text-[rgb(var(--variable))] border-t border-[rgb(var(--foreground))]/15 py-2 px-4 flex justify-between items-center text-sm"
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

