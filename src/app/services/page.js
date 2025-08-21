"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import Contact from '@/components/Contact'

export default function Services() {
  const services = [
    {
      title: 'Freight Forwarding',
      description: 'Comprehensive freight forwarding services for air, sea, and land transportation.',
      longDescription: 'Our freight forwarding service handles the complex logistics of moving goods across international borders. We coordinate with carriers, handle documentation, and ensure your cargo reaches its destination safely and on time.',
      features: ['Air Freight', 'Sea Freight', 'Land Freight', 'Express Shipping', 'Bulk Cargo'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Warehousing & Delivery',
      description: 'Secure warehousing solutions with efficient delivery networks worldwide.',
      longDescription: 'Our warehousing and delivery services provide secure storage solutions and efficient distribution networks. We offer temperature-controlled storage, inventory management, and last-mile delivery solutions.',
      features: ['Secure Storage', 'Inventory Management', 'Temperature Control', '24/7 Security', 'Fast Delivery'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Customs Brokerage',
      description: 'Expert customs clearance and documentation services for international shipments.',
      longDescription: 'Our customs brokerage service ensures smooth clearance of your goods through customs. We handle all documentation, compliance requirements, and work with customs officials to expedite your shipments.',
      features: ['Documentation', 'Compliance', 'Customs Clearance', 'Duty Calculation', 'Regulatory Support'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Supply Chain Consulting',
      description: 'Strategic consulting to optimize your supply chain operations and reduce costs.',
      longDescription: 'Our supply chain consulting team works with you to analyze, optimize, and streamline your logistics operations. We identify inefficiencies and implement solutions that reduce costs and improve performance.',
      features: ['Process Optimization', 'Cost Reduction', 'Technology Integration', 'Performance Analysis', 'Strategic Planning'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Last-Mile Delivery',
      description: 'Fast and reliable last-mile delivery solutions for customer satisfaction.',
      longDescription: 'Our last-mile delivery service ensures your products reach customers quickly and efficiently. We use advanced routing technology and local delivery networks to provide fast, reliable delivery.',
      features: ['Same-Day Delivery', 'Real-Time Tracking', 'Local Networks', 'Flexible Scheduling', 'Customer Notifications'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
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
            Our <span className="text-blue-600">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive logistics solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Service Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.longDescription}
                  </p>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 text-gray-600"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Service Image/Icon Box */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        {service.icon}
                      </div>
                      <p className="text-gray-600 font-medium">{service.title}</p>
                      <p className="text-sm text-gray-500">Service Icon</p>
                    </div>
                  </div>
                </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact us today to discuss your logistics needs and get a customized solution for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get A Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
            <Contact/>
      <Footer />
    </main>
  )
}
