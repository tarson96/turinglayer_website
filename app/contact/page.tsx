"use client";
import React from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedParticles from "@/components/animated-particles";
import { motion } from "framer-motion";

export default function ContactPage() {

  return (
    <main className="relative overflow-hidden min-h-screen">
      <div className="fixed inset-0 grid-pattern -z-10 opacity-30" />
      <AnimatedParticles />
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            <span className="text-gradient">Contact Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
            Ready to explore decentralized AI? Let's connect.
          </p>
          
          {/* Email Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl p-12 max-w-md mx-auto"
          >
            <motion.a
              href="mailto:hello@turinglayer.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="block text-2xl md:text-3xl font-bold text-white hover:text-gray-200 transition-colors cursor-pointer"
            >
              hello@turinglayer.com
            </motion.a>
            <p className="text-gray-400 mt-4 text-sm">
              Click to open your email app
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 mt-8 max-w-lg mx-auto"
          >
            We usually reply within 24 hours. Whether it's about collaborations, questions, or just to say hi, we'd love to hear from you.
          </motion.p>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
