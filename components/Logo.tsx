"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { GitGraphIcon as Git, Carrot } from "lucide-react";

export default function Logo() {
  return (
    <Link href={"/"} className="relative font-extrabold text-2xl flex items-center gap-3">
      {/* Git Icon Animation */}
      <motion.div
        initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
        className="text-[rgb(var(--keyword))] drop-shadow-lg"
      >
        <Git size={28} />
      </motion.div>

      {/* RabbitHome Text Animation */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
        className="flex items-center space-x-1"
      >
        <motion.span
          whileHover={{ scale: 1.1, rotate: -3 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gradient-to-r from-[rgb(var(--keyword))] to-[rgb(var(--variable))] bg-clip-text text-transparent drop-shadow-lg"
        >
          rabbit
        </motion.span>

        <motion.span
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gradient-to-r from-[rgb(var(--function))] to-[rgb(var(--string))] bg-clip-text text-transparent drop-shadow-lg"
        >
          Home
        </motion.span>
      </motion.div>

      {/* Carrot Icon Animation */}
      <motion.div
        initial={{ rotate: 45, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
        className="text-[rgb(var(--function))] drop-shadow-lg"
      >
        <Carrot size={28} />
      </motion.div>
    </Link>
  );
}
