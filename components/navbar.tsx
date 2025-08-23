"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${
          isScrolled ? "bg-black/70 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image src="/images/new-logo.png" alt="Turing Layer" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl">TuringLayer</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink href="/#mission">Mission</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <motion.div
                className="flex flex-col items-center justify-center space-y-8 flex-1"
                initial="initial"
                animate="animate"
                variants={{
                  initial: {},
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <MobileNavLink href="#mission" onClick={() => setIsMenuOpen(false)}>
                  Mission
                </MobileNavLink>
                <MobileNavLink href="/products" onClick={() => setIsMenuOpen(false)}>
                  Products
                </MobileNavLink>
                <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </MobileNavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-white/80 hover:text-white transition-colors py-2">
      {children}
    </a>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <motion.a
      href={href}
      className="text-white/80 hover:text-white transition-colors text-2xl font-medium"
      onClick={onClick}
      variants={{
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      }}
    >
      {children}
    </motion.a>
  )
}
