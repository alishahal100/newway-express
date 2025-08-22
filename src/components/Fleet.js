'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Vehicles = () => {
  const vehicles = [
    {
      name: 'Freezer Truck',
      description: 'Temperature-controlled trucks designed for perishable and frozen goods.',
      image: '/freezer-truck.jpg'
    },
    {
      name: 'Trailer Truck',
      description: 'Heavy-duty trailer trucks for long-haul and bulk cargo transport.',
      image: '/trailer-truck.jpg'
    },
    {
      name: 'Moving Truck',
      description: 'Standard trucks for safe and reliable domestic and international moving.',
      image: '/moving-truck.jpg'
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-orange-600">Transport Vehicles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A modern fleet designed to handle diverse logistics and delivery needs.
          </p>
        </motion.div>

        {/* Vehicles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image with hover zoom */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Vehicles
