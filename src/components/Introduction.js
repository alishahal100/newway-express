'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Introduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
                We are constantly evolving to reduce our environmental impact while helping clients achieve their green goals.
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              <strong>Newway Express</strong> is a leading global logistics and supply chain solutions provider, widely recognized as the best logistics company in the world. With a reputation for reliability, efficiency, and innovation, we offer end-to-end logistics services that empower businesses to operate seamlessly across borders and industries.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Founded in 2010, and headquartered in <strong>Riyadh KSA</strong>, we serve clients across several countries, supported by a dedicated team of logistics professionals, cutting-edge technology, and a wide global network.
            </motion.p>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* Company Image */}
              <Image
                src="/img1.jpg"
                alt="Newway Express Company"
                fill
                className="object-cover"
                priority
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 w-16 h-16 bg-blue-200 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-8 w-12 h-12 bg-orange-200 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
