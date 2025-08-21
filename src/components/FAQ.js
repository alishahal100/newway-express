'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Do you offer real-time shipment tracking?',
      answer:
        'Yes, we provide real-time tracking for all shipments through our digital platform. Clients receive live updates and notifications at each major checkpoint, ensuring full visibility throughout the delivery process.',
    },
    {
      question: 'What measures do you take to ensure cargo security?',
      answer:
        'We follow strict security protocols including GPS-monitored vehicles, sealed containers, and background-checked drivers. For high-value cargo, we also offer additional security escorts and tamper-proof locks.',
    },
    {
      question: 'Are you licensed and insured for both domestic and international shipments?',
      answer:
        'Absolutely. We are fully licensed and insured to handle both domestic and cross-border shipments. We also comply with international regulations such as IATA and customs requirements to ensure smooth clearance.',
    },
    {
      question: 'Will I have a dedicated account manager or point of contact?',
      answer:
        'Yes, every client is assigned a dedicated account manager who acts as your single point of contact. They oversee your shipments, handle coordination, and provide timely support to ensure a seamless experience.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions.
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden border-0"
            >
              {/* Button */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 border-0 focus:outline-none"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-0"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
