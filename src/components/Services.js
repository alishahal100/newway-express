'use client'
import { motion } from 'framer-motion'
import { FaTruckMoving, FaWarehouse, FaTruckLoading, FaChartLine } from 'react-icons/fa'
import { MdLocalShipping } from 'react-icons/md'
import { RiFileList3Fill } from 'react-icons/ri'

const Services = () => {
  const services = [
    {
      title: 'Freight Forwarding',
      description: 'Comprehensive freight forwarding services for air, sea, and land transportation.',
      icon: <FaTruckLoading className="w-8 h-8" />
    },
    {
      title: 'Warehousing & Delivery',
      description: 'Secure warehousing solutions with efficient delivery networks worldwide.',
      icon: <FaWarehouse className="w-8 h-8" />
    },
    {
      title: 'Customs Brokerage',
      description: 'Expert customs clearance and documentation services for international shipments.',
      icon: <RiFileList3Fill className="w-8 h-8" />
    },
    {
      title: 'Supply Chain Consulting',
      description: 'Strategic consulting to optimize your supply chain operations and reduce costs.',
      icon: <FaChartLine className="w-8 h-8" />
    },
    {
      title: 'Last-Mile Delivery',
      description: 'Fast and reliable last-mile delivery solutions for customer satisfaction.',
      icon: <MdLocalShipping className="w-8 h-8" />
    },
    {
      title: 'Transportation',
      description: 'Modern fleet of trucks and transportation vehicles ensuring safe and timely deliveries.',
      icon: <FaTruckMoving className="w-8 h-8" />
    }
  ]

  return (
    <section className="relative py-24 bg-blue-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Powering global logistics with modern solutions and customer-first approach.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white mb-6 shadow-md">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
