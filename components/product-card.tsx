"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

interface ProductCardProps {
  product: {
    id: number
    name: string
    type: string
    description: string
    features: string[]
    image: string
    icon: React.ReactNode
  }
  index: number
  isInView: boolean
  reverse?: boolean
}

export default function ProductCard({ product, index, isInView, reverse = false }: ProductCardProps) {
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
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
          </div>

          <motion.div
            className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full p-3 border border-white/20"
            whileHover={{ scale: 1.1 }}
          >
            {product.icon}
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium px-3 py-1 bg-white/10 rounded-full text-white/70">{product.type}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">{product.description}</p>

        <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 text-white/70">•</span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <motion.button
          className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  )
}
