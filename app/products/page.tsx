"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Smartphone, Globe, Zap, Shield, Users, BarChart } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedParticles from "@/components/animated-particles"

export default function ProductsPage() {
  const headerRef = useRef(null)
  const productsRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true })
  const productsInView = useInView(productsRef, { once: true })

  const products = [
    {
      id: 1,
      name: "CheapCuda",
      type: "GPU Compute Platform",
      description:
        "The most affordable GPU compute platform in India & Asia. Access high-end GPUs like A100 and RTX 3090 for AI training and machine learning at up to 60% lower cost than major cloud providers.",
      features: [
        "H200, H100, RTX 4090 and other high-performance GPUs",
        "Up to 60% cheaper than cloud providers",
        "Simple INR/USD payments",
        "Optimized for AI/ML workloads",
        "Mobile-friendly web interface",
        "Multiple payment options including UPI",
        "Instant GPU access and deployment",
        "Dedicated support"
      ],
      pricing: [
        "A100 (40GB): Starting from ₹50/hour",
        "RTX 3090: Starting from ₹25/hour", 
        "Bulk discounts available",
        "No setup fees or hidden costs"
      ],
      image: "/p1.png",
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  return (
    <main className="relative overflow-hidden min-h-screen">
      <div className="fixed inset-0 grid-pattern -z-10 opacity-30" />
      <AnimatedParticles />
      <Navbar />

      {/* Header Section */}
      <section ref={headerRef} className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-1">
            <span className="text-gradient">Our Products</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -z-10"
        >
          <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-32">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isInView={productsInView}
                reverse={index % 2 !== 0}
              />
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-xl text-gray-400">cooking... 🍳</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      {/* <section className="py-20 md:py-32 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Our Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="High Performance"
              description="Our products are optimized for speed and efficiency, ensuring smooth operation even with complex tasks."
              delay={0.1}
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Enterprise Security"
              description="Built with security at the core, our solutions protect your data with state-of-the-art encryption and privacy measures."
              delay={0.3}
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Collaborative"
              description="Designed for teams, our products facilitate seamless collaboration and knowledge sharing across organizations."
              delay={0.5}
            />
          </div>
        </motion.div>
      </section> */}


      <Footer />
    </main>
  )
}

interface ProductCardProps {
  product: {
    id: number
    name: string
    type: string
    description: string
    features: string[]
    pricing?: string[]
    image: string
    icon: React.ReactNode
  }
  index: number
  isInView: boolean
  reverse?: boolean
}

function ProductCard({ product, index, isInView, reverse = false }: ProductCardProps) {
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
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
          </div>

          
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

        <motion.a
          href="https://www.cheapcuda.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Visit CheapCuda →
        </motion.a>
      </div>
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all"
    >
      <div className="bg-white/5 rounded-full w-14 h-14 flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
