"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <section className="pt-32 pb-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Heading */}
          <motion.h1
            className="text-5xl font-extrabold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Have a question or want to collaborate? Fill out the form below and we ll get back to you soon.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              {/* Submit Button */}
            <button
  type="submit"
  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold shadow-md transition-colors duration-300"
>
  Send message
</button>

            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
