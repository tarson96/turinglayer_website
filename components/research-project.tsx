"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

interface ResearchProjectProps {
  title: string
  description: string
  image: string
  icon: React.ReactNode
  index: number
  isInView: boolean
  reverse?: boolean
}

export default function ResearchProject({
  title,
  description,
  image,
  icon,
  index,
  isInView,
  reverse = false,
}: ResearchProjectProps) {
  return (
    <motion.div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      <div className="w-full md:w-1/2">
        <motion.div
          className="relative overflow-hidden rounded-xl group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
          </div>

          <motion.div
            className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full p-3 border border-white/20"
            whileHover={{ scale: 1.1 }}
          >
            {icon}
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>

        <motion.button
          className="mt-6 px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  )
}
