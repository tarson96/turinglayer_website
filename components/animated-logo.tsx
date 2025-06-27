"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AnimatedLogo() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // Logo animation logic would be here if needed
  }, [])

  return (
    <motion.div
      className="relative w-full h-full"
      animate={{
        filter: [
          "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
          "drop-shadow(0 0 16px rgba(255, 255, 255, 0.5))",
          "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
        ],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <Image src="/images/new-logo.png" alt="Turing Layer Logo" fill className="object-contain" priority />

      <motion.div
        className="absolute inset-0 bg-white rounded-md"
        initial={{ opacity: 0.05 }}
        animate={{
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 4,
          ease: "easeInOut",
        }}
        style={{ mixBlendMode: "overlay" }}
      />
    </motion.div>
  )
}
