"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion"
import { ChevronDown, BrainCircuit, Network } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedParticles from "@/components/animated-particles"
import AnimatedLogo from "@/components/animated-logo"
import TeamMember from "@/components/team-member"
import Image from "next/image"

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
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
            AI. Decentralization. Web3.
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

      {/* Decentralized AI Innovation Section */}
      <section id="mission" ref={missionRef} className="py-20 md:py-32 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white text-gradient">
              Decentralized AI Innovation
            </h2>
            {/* <p className="text-xl md:text-2xl font-bold text-white max-w-5xl mx-auto leading-relaxed">
              Imagine a world where AI isn't controlled by a few tech giants, but distributed across a global network of contributors
            </p> */}
          </motion.div>

          {/* Story Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={missionInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white opacity-20"
            />

            {/* Story Steps */}
            <div className="space-y-24 md:space-y-40">
              {/* Step 1: The Problem */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1">
                  <div className="relative">
                    <div className="relative bg-black/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20">
                      <h3 className="text-2xl md:text-4xl font-black mb-6 text-white">THE CENTRALIZATION CRISIS</h3>
                      <p className="text-lg md:text-xl text-gray-400  leading-relaxed font-small">
                        Today's AI landscape is dominated by a handful of corporations. OpenAI, Google, Meta  they control the models, the data, and ultimately, the future of artificial intelligence. This centralization creates bottlenecks, biases, and barriers that limit innovation and accessibility.
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={missionInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="order-1 md:order-2 relative"
                >
                  <div className="bg-white/10 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
                    <BrainCircuit className="w-16 h-16 text-white" />
                  </div>
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-white/5 rounded-full blur-3xl"
                  />
                </motion.div>
              </motion.div>

              {/* Step 2: The Solution */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={missionInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="relative"
                >
                  <div className="bg-white/10 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
                    <Network className="w-16 h-16 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-white/5 rounded-full blur-3xl"
                  />
                </motion.div>
                <div>
                  <div className="relative">
                    <div className="relative bg-black/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20">
                      <h3 className="text-2xl md:text-4xl font-black mb-6 text-white">ENTER DECENTRALIZED INTELLIGENCE</h3>
                      <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-small">
                        What if AI models could be trained and improved by thousands of contributors worldwide? Decentralized networks are pioneering this reality creating incentive driven ecosystems where anyone can contribute computational power, data, or expertise to build better AI systems collectively.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Our Mission */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="relative"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={missionInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="relative mx-auto mb-12"
                  >
                    <div className="bg-white/10 rounded-full w-40 h-40 flex items-center justify-center mx-auto">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <BrainCircuit className="w-20 h-20 text-white" />
                      </motion.div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-white/20 rounded-full blur-3xl"
                    />
                  </motion.div>
                  
                  <div className="relative">
                    <div className="relative bg-black/50 backdrop-blur-sm p-10 md:p-16 rounded-3xl border border-white/30">
                      <h3 className="text-3xl md:text-5xl font-black mb-8 text-white">
                        BUILDING THE FUTURE, TOGETHER
                      </h3>
                      <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-4xl mx-auto font-bold">
                        At TuringLayer, we're not just using decentralized AI  we're building the infrastructure and applications that make it accessible to everyone. From intelligent communication tools to financial agents, we're creating products that leverage the collective intelligence of global networks.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/20"
                        >
                          <div className="text-xl md:text-2xl font-black text-white mb-3">ACCESSIBLE</div>
                          <div className="text-sm md:text-base text-white font-bold">No more gatekeepers or expensive API calls</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/20"
                        >
                          <div className="text-xl md:text-2xl font-black text-white mb-3">RESILIENT</div>
                          <div className="text-sm md:text-base text-white font-bold">Distributed networks can't be shut down</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/20"
                        >
                          <div className="text-xl md:text-2xl font-black text-white mb-3">DEMOCRATIC</div>
                          <div className="text-sm md:text-base text-white font-bold">Everyone can contribute and benefit</div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/30 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                }}
                animate={{
                  x: [null, Math.random() * 20 - 10 + "%"],
                  y: [null, Math.random() * 20 - 10 + "%"],
                  opacity: [0.1, 0.6, 0.1],
                }}
                transition={{
                  duration: Math.random() * 8 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-20 md:py-32 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={teamInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gradient mb-16">Behind the Vision</h2>

          <div className="w-full flex justify-center">
  <div className="max-w-xs w-full">
    <TeamMember
      name="Tarun Soni"
      role="CEO"
      bio="I'm Tarun Soni  a solo founder passionate about decentralized AI, privacy, and crypto. I build at the edge of web3 and machine learning, exploring disruptive ideas that challenge centralization."
      image="/me.png"
      index={1}
      isInView={teamInView}
      email="tarun@turinglayer.com"
    />
  </div>
</div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Our Products & Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Explore our innovative AI solutions designed to transform industries and enhance human capabilities through decentralized intelligence.
          </p>

          <div className="flex justify-center">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all max-w-md"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image src="/p1.png" alt="Mobile AI Applications" fill className="object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CheapCuda</h3>
              <p className="text-gray-300 mb-4">
                Affordable GPU computing power, making AI training accessible to everyone.
              </p>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
              >
                Explore
              </motion.a>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              View All Products & Services
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
