"use client"

import type React from "react"

import { motion } from "framer-motion"
import { SendIcon } from "lucide-react"
import { useState } from "react"

export default function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you'd normally handle the form submission
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Join Our Research Community</h2>
        <p className="text-lg text-gray-300 text-center mb-10 max-w-2xl mx-auto">
          Stay updated with our latest research findings, publications, and events. Subscribe to our newsletter and be
          part of advancing AI research.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-black font-medium rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
              >
                <span>Subscribe</span>
                <SendIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-6 bg-white/10 rounded-md max-w-md mx-auto"
          >
            <h3 className="text-xl font-medium mb-2">Thank you for subscribing!</h3>
            <p className="text-gray-300">We'll keep you updated with our latest research and developments.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
