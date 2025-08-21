'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Main = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile: Text First, Desktop: Image First */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Shipping Port Image */}
              <Image
                src="/img2.jpg"
                alt="Shipping Port with Cargo Ship and Cranes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Mobile: Text Second, Desktop: Text Second */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight"
            >
              Delivering
              <br />
              Excellence, On
              <br />
              Time, Every Time
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              To streamline global logistics through innovative technology, dedicated service, and a passion for excellence.
            </motion.p>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-600"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Main
