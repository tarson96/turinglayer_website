"use client"

import { useEffect, useRef } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  vx: number
  vy: number
  alpha: number
}

export default function AnimatedParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = window.innerWidth
    const containerHeight = window.innerHeight

    let particles: Particle[] = []
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        size: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      })

      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.width = `${particles[i].size}px`
      particle.style.height = `${particles[i].size}px`
      particle.style.opacity = particles[i].alpha.toString()
      particle.style.left = `${particles[i].x}px`
      particle.style.top = `${particles[i].y}px`
      container.appendChild(particle)
    }

    // Animation loop
    const animateParticles = () => {
      const domParticles = container.querySelectorAll(".particle")

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off walls
        if (particle.x < 0 || particle.x > containerWidth) {
          particle.vx *= -1
        }

        if (particle.y < 0 || particle.y > containerHeight) {
          particle.vy *= -1
        }

        // Update DOM element
        if (domParticles[index]) {
          const domParticle = domParticles[index] as HTMLElement
          domParticle.style.left = `${particle.x}px`
          domParticle.style.top = `${particle.y}px`
        }
      })

      requestAnimationFrame(animateParticles)
    }

    const animationId = requestAnimationFrame(animateParticles)

    // Resize handler
    const handleResize = () => {
      // Clear existing particles
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }

      // Reinitialize with new dimensions
      particles = []
      const newParticleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < newParticleCount; i++) {
        particles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.5 + 0.1,
        })

        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.width = `${particles[i].size}px`
        particle.style.height = `${particles[i].size}px`
        particle.style.opacity = particles[i].alpha.toString()
        particle.style.left = `${particles[i].x}px`
        particle.style.top = `${particles[i].y}px`
        container.appendChild(particle)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)

      // Clean up particles
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return <div ref={containerRef} className="particles fixed inset-0 pointer-events-none z-0 opacity-40" />
}
