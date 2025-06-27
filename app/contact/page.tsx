"use client";
import React, { useState } from "react";

// const WHATSAPP_NUMBER = "xxxxx"; // Replace with actual number, e.g., 919999999999
// const WHATSAPP_MESSAGE = "Hi, I have a query.";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedParticles from "@/components/animated-particles";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send. Please try again later.");
      }
    } catch (err) {
      setError("Failed to send. Please try again later.");
    }
    setSending(false);
  };

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
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="text-gradient">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reach out for collaborations, questions, or just to say hi. We usually reply within 24 hours.
          </p>
        </motion.div>
        <div className="w-full max-w-xl bg-black/70 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600"
                rows={5}
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-2 px-4 bg-white text-black font-semibold rounded shadow hover:bg-zinc-100 disabled:opacity-50 border border-white/20 transition-colors"
            >
              {sending ? "Sending..." : "Send"}
            </button>
            {sent && <p className="text-green-600 text-center">Your message has been sent!</p>}
            {error && <p className="text-red-600 text-center">{error}</p>}
          </form>
          {/* <div className="mt-8 flex flex-col items-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 flex items-center gap-2 text-lg font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12a11.85 11.85 0 001.64 6.09L0 24l6.27-1.64A11.84 11.84 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.07-1.39l-.36-.21-3.73.98.99-3.64-.24-.37A10.05 10.05 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.47c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.9 1.09-.17.18-.33.2-.61.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-.98.96-.98 2.34s1.01 2.71 1.15 2.9c.14.19 1.99 3.04 4.82 3.98.67.21 1.19.33 1.59.42.67.14 1.28.12 1.76.07.54-.06 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33z"/></svg>
              WhatsApp Us
            </a>
          </div> */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
