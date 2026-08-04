"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  /**
   * When false, only slides (no opacity). Use around glass/mock visuals —
   * iOS Safari flashes underlays while an opacity-composited subtree rasterizes.
   */
  fade?: boolean
}

export function Reveal({ children, delay = 0, className, fade = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={fade ? { opacity: 0, y: 24 } : { y: 24 }}
      whileInView={fade ? { opacity: 1, y: 0 } : { y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
