"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Blocks, Coins, FileCode, Lock, Cpu } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedParticles from "@/components/animated-particles"

export default function Web3Page() {
  const headerRef = useRef(null)
  const projectsRef = useRef(null)
  const partnersRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true })
  const projectsInView = useInView(projectsRef, { once: true })
  const partnersInView = useInView(partnersRef, { once: true })

  const web3Projects = [
    {
      id: 1,
      name: "Quantum Ledger",
      description:
        "A next-generation blockchain platform that utilizes quantum-resistant cryptography to ensure long-term security against emerging quantum computing threats.",
      technologies: ["Quantum Cryptography", "Distributed Ledger", "Smart Contracts", "Zero-Knowledge Proofs"],
      image: "/placeholder.svg?height=600&width=800&query=futuristic blockchain visualization with quantum elements",
      icon: <Blocks className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "Neural Consensus",
      description:
        "An innovative consensus mechanism that leverages neural networks to achieve higher throughput and lower latency than traditional proof-of-work or proof-of-stake systems.",
      technologies: ["Neural Networks", "Consensus Algorithms", "Distributed Systems", "Game Theory"],
      image: "/placeholder.svg?height=600&width=800&query=neural network nodes connecting in a blockchain pattern",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Decentralized Identity Framework",
      description:
        "A comprehensive framework for self-sovereign identity management on the blockchain, enabling users to control their personal data while maintaining privacy and security.",
      technologies: [
        "Decentralized Identifiers",
        "Verifiable Credentials",
        "Privacy-Preserving Computation",
        "Biometric Authentication",
      ],
      image: "/placeholder.svg?height=600&width=800&query=digital identity verification system with blockchain",
      icon: <Lock className="w-6 h-6" />,
    },
  ]

  const partners = [
    {
      name: "Oblivus",
      logo: "/oblivus.png",
      description: "Compute provider for AI workloads.",
    },
    {
      name: "TensorDock",
      logo: "/td.png",
      description: "Compute provider for AI workloads.",
    },
    {
      name: "Bittensor",
      logo: "/bittensor.png",
      description: "Leveraging decentralized AI to create a secure and transparent AI powered products.",
    },
    {
      name: "Hugging Face",
      logo: "/hf.png",
      description: "Open-source AI collaboration and model distribution hub.",
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
            <span className="text-gradient">Web3 Innovations</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of decentralized technologies through groundbreaking research and innovative
            applications.
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

      {/* Web3 Vision Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Our Web3 Vision</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We believe that Web3 presents a fundamental shift in how we interact with
              the things that matter most to us. Whether it's financial transactions, identity management, or
              communication, Web3 offers a more secure, transparent, and decentralized way to interact with the
              stuff we use everyday on our phones or computers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We leverage decentralization ( projects built on blockchain ) to offer premium products with privacy,
              security, and at competetive prices then centralised products which we use everyday.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      {/* <section ref={projectsRef} className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Web3 Projects
          </motion.h2>

          <div className="space-y-32">
            {web3Projects.map((project, index) => (
              <Web3ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={projectsInView}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Technologies Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Core Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechCard
              icon={<Blocks className="w-8 h-8" />}
              title="Blockchain"
              description="Advanced distributed ledger technologies that form the backbone of our decentralized systems."
              delay={0.1}
            />
            <TechCard
              icon={<Coins className="w-8 h-8" />}
              title="Bittensor"
              description="Innovative economic models that align incentives and create sustainable ecosystems."
              delay={0.3}
            />
            <TechCard
              icon={<FileCode className="w-8 h-8" />}
              title="Smart Contracts"
              description="Secure, efficient, and verifiable code that automates complex multi-party agreements."
              delay={0.5}
            />
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Partners & Collaborators</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} index={index} isInView={partnersInView} />
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Join the Decentralized Future</h2>
          <p className="text-lg text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            Interested in collaborating on Web3 projects or implementing our technologies? Get in touch with our team to
            explore partnership opportunities.
          </p>

          <div className="flex justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-black font-medium rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <span>Contact Our Web3 Team</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

interface Web3ProjectCardProps {
  project: {
    id: number
    name: string
    description: string
    technologies: string[]
    image: string
    icon: React.ReactNode
  }
  index: number
  isInView: boolean
  reverse?: boolean
}

function Web3ProjectCard({ project, index, isInView, reverse = false }: Web3ProjectCardProps) {
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
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
          </div>

          <motion.div
            className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full p-3 border border-white/20"
            whileHover={{ scale: 1.1 }}
          >
            {project.icon}
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.name}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>

        <h4 className="text-lg font-semibold mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
              {tech}
            </span>
          ))}
        </div>

        <motion.button
          className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          View Project Details
        </motion.button>
      </div>
    </motion.div>
  )
}

interface TechCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function TechCard({ icon, title, description, delay }: TechCardProps) {
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

interface PartnerCardProps {
  partner: {
    name: string
    logo: string
    description: string
  }
  index: number
  isInView: boolean
}

function PartnerCard({ partner, index, isInView }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all flex items-center gap-6"
    >
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
        <p className="text-gray-300 text-sm">{partner.description}</p>
      </div>
    </motion.div>
  )
}
