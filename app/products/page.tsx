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
      name: "NeuralSense",
      type: "Mobile Application",
      description:
        "An AI-powered personal assistant that learns from user behavior to provide increasingly personalized recommendations and automation.",
      features: [
        "Personalized AI assistant",
        "Cross-platform synchronization",
        "Voice and natural language processing",
        "Offline capabilities",
      ],
      image: "/futuristic-ai-mobile-app.png",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "QuantumFlow",
      type: "Web Platform",
      description:
        "A comprehensive data analysis platform that leverages quantum-inspired algorithms to process and visualize complex datasets.",
      features: [
        "Real-time data processing",
        "Interactive visualizations",
        "Quantum-inspired algorithms",
        "Collaborative workspaces",
      ],
      image: "/complex-data-dashboard.png",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "CogniSphere",
      type: "Enterprise Solution",
      description:
        "An enterprise-grade cognitive computing platform that integrates with existing systems to enhance decision-making processes.",
      features: [
        "Seamless system integration",
        "Advanced predictive analytics",
        "Customizable AI workflows",
        "Comprehensive security features",
      ],
      image: "/placeholder-q33nc.png",
      icon: <BarChart className="w-6 h-6" />,
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge AI solutions designed to transform industries and enhance human capabilities. Our products
            combine theoretical research with practical applications.
          </p>
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
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 md:py-32 px-4 relative">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            Schedule a demo with our team to see how our AI products can revolutionize your operations and drive growth.
          </p>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-black font-medium rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>

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
