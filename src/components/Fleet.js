'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Vehicles = () => {
  const vehicles = [
    {
      name: 'Freezer Truck',
      description: 'Temperature-controlled trucks designed for perishable and frozen goods.',
      image: '/freezer-truck.jpg' // put your image in public
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Transport Vehicles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A modern fleet designed to handle diverse logistics and delivery needs.
          </p>
        </motion.div>

        {/* Vehicles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative w-full h-40 mb-6">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {vehicle.name}
              </h3>
              <p className="text-gray-600">{vehicle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Vehicles
