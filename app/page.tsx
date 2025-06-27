"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion"
import { ChevronDown, Braces, BrainCircuit, Network } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedParticles from "@/components/animated-particles"
import AnimatedLogo from "@/components/animated-logo"
import CTA from "@/components/cta"
import TeamMember from "@/components/team-member"
import Image from "next/image"

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0])

  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const teamRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const missionInView = useInView(missionRef, { once: true })
  const teamInView = useInView(teamRef, { once: true })

  const controls = useAnimation()

  useEffect(() => {
    if (heroInView) {
      controls.start("visible")
    }
  }, [heroInView, controls])

  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 grid-pattern -z-10 opacity-70" />
      {/* <AnimatedParticles /> */}

      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 flex flex-col items-center"
        >
          <div className="w-40 h-40 md:w-60 md:h-60 relative mb-8">
            <AnimatedLogo />
          </div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-gradient">TuringLayer</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-center text-gray-300 max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Pushing the boundaries of artificial intelligence innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#mission" className="flex items-center justify-center">
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                <ChevronDown className="h-10 w-10 text-white opacity-70" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="absolute inset-0 -z-10" style={{ y: y1, opacity }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-5"
              initial={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                x: [null, Math.random() * 10 - 5 + "%"],
                y: [null, Math.random() * 10 - 5 + "%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: Math.random() * 10 + 10,
              }}
            />
          ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="mission" ref={missionRef} className="py-20 md:py-32 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Mission</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="bg-white/5 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Decentralized AI Innovation</h3>
              <p className="text-gray-300">
              Building powerful AI applications by leveraging decentralized intelligence networks like Bittensor — making AI more accessible, resilient, and censorship-resistant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="bg-white/5 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Braces className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable AI Infrastructure</h3>
              <p className="text-gray-300">
              Creating modular systems and plug-and-play AI primitives that accelerate product development across communication, finance, and personal agents.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="bg-white/5 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Open, Responsible, Unstoppable</h3>
              <p className="text-gray-300">
              We believe the future of AI should be transparent, collaborative, and user-owned. Our mission is to build it — one product at a time.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      {/* <section className="py-20 md:py-32 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Products</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Explore our innovative AI solutions designed to transform industries and enhance human capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image src="/futuristic-ai-mobile-app.png" alt="Mobile AI Applications" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold">Mobile AI Applications</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Intelligent applications that bring the power of AI to your mobile devices.
              </p>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
              >
                Explore Products
              </motion.a>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image src="/futuristic-blockchain-quantum.png" alt="Web3 Technologies" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold">Web3 Technologies</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Pioneering the future of decentralized technologies through groundbreaking research.
              </p>
              <motion.a
                href="/web3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
              >
                Explore Web3
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section> */}

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-20 md:py-32 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={teamInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Behind the Vision</h2>

          <div className="w-full flex justify-center">
  <div className="max-w-xs w-full">
    <TeamMember
      name="Tarun Soni"
      role="CEO"
      bio="I'm Tarun Soni — a solo founder passionate about decentralized AI, privacy, and crypto. I build at the edge of web3 and machine learning, exploring disruptive ideas that challenge centralization."
      image="/me.png"
      index={1}
      isInView={teamInView}
    />
  </div>
</div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <CTA />

      <Footer />
    </main>
  )
}
