"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function Clients() {
  const clients = [
    {
      name: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      testimonial:
        'Newway Express has transformed our supply chain operations. Their reliability and attention to detail have helped us reduce costs by 25% while improving delivery times.',
      logo: 'GM',
      rating: 5,
    },
    {
      name: 'Tech Solutions Inc.',
      industry: 'Technology',
      testimonial:
        'The team at Newway Express understands the urgency of tech shipments. Their real-time tracking and proactive communication give us peace of mind.',
      logo: 'TS',
      rating: 5,
    },
    {
      name: 'Retail Chain International',
      industry: 'Retail',
      testimonial:
        "We've been working with Newway Express for over 5 years. Their consistent service quality and global reach make them our trusted logistics partner.",
      logo: 'RC',
      rating: 5,
    },
    {
      name: 'Pharmaceutical Corp.',
      industry: 'Healthcare',
      testimonial:
        'Newway Express handles our sensitive pharmaceutical shipments with the utmost care. Their temperature-controlled solutions and compliance expertise are outstanding.',
      logo: 'PC',
      rating: 5,
    },
    {
      name: 'Automotive Parts Ltd.',
      industry: 'Automotive',
      testimonial:
        'Just-in-time delivery is crucial for our business. Newway Express has never let us down, ensuring our production lines keep running smoothly.',
      logo: 'AP',
      rating: 5,
    },
    {
      name: 'E-commerce Solutions',
      industry: 'E-commerce',
      testimonial:
        'Their last-mile delivery service has significantly improved our customer satisfaction scores. Fast, reliable, and professional service every time.',
      logo: 'ES',
      rating: 5,
    },
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'On-Time Delivery' },
    { number: '24/7', label: 'Customer Support' },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-blue-600">Clients</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Trusted by businesses worldwide for reliable logistics solutions
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from the businesses that trust us with their logistics needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {client.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                    <p className="text-gray-500">{client.industry}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(client.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  {client.testimonial}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From manufacturing to healthcare, we provide logistics solutions across diverse industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Manufacturing',
              'Technology',
              'Healthcare',
              'Retail',
              'Automotive',
              'E-commerce',
              'Food & Beverage',
              'Fashion',
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Join Our Growing Client Base
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the Newway Express difference and see why businesses worldwide choose us for their logistics needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
