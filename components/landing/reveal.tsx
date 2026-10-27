"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  /**
   * @deprecated Content must stay visible when scripts or viewport observers
   * fail (notably iOS Safari). Kept for existing callers; entrance motion is
   * transform-only and never hides the subtree.
   */
  fade?: boolean
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const offset = reduceMotion ? 0 : 12
  const cappedDelay = Math.min(delay, 0.08)

  return (
    <motion.div
      className={className}
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -4% 0px" }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.32,
        delay: cappedDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
