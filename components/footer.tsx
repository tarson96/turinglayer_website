"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/70 backdrop-blur-md border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 w-full">
          <div className="flex-1 text-center md:text-left mb-6 md:mb-2">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8">
                <Image src="/images/new-logo.png" alt="Turing Layer" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl">TuringLayer</span>
            </Link>

            <p className="text-gray-400 max-w-xs ">
            AI. Decentralization. Web3.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <motion.a
                href="https://x.com/TuringLayerInd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-white/70 hover:text-white"
                aria-label="Twitter profile"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/turinglayer"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-white/70 hover:text-white"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              {/* <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-white/70 hover:text-white"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </motion.a> */}
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-1 w-full gap-8 md:gap-16 text-center md:text-left">
            <div className="flex-1">
              <h3 className="font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#mission" className="text-gray-400 hover:text-white">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-gray-400 hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 md:text-right mt-8 md:mt-0">
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:hello@turinglayer.com" className="text-gray-400 hover:text-white">hello@turinglayer.com</a>
                </li>
                {/* <li>
                  <a href="https://wa.me/xxxxx?text=Hi%2C%20I%20have%20a%20query." target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">WhatsApp Us</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {currentYear} TuringLayer Research™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
