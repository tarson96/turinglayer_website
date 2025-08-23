"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
  index: number
  isInView: boolean
  email?: string;
  linkedinLink?: string;
}

export default function TeamMember({ name, role, bio, image, index, isInView, email, linkedinLink}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all group"
    >
      <div className="mb-6 relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
      </div>

      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-gray-400 mb-4">{role}</p>
      <p className="text-gray-300">{bio}</p>

      <div className="mt-6 flex space-x-4">
        {email && (
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.1 }}
            className="text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label={`Email ${name}`}
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        )}
       
        {/* <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          className="text-white/70 hover:text-white"
          aria-label={`${name}'s GitHub profile`}
        >
          <Github className="w-5 h-5" />
        </motion.a> */}
      </div>
    </motion.div>
  )
}
