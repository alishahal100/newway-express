'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How quickly can you deliver shipments domestically?',
      answer:
        'Most domestic shipments are delivered within 24–72 hours depending on the distance and service type. We also provide express same-day and next-day delivery options in select regions.',
    },
    {
      question: 'Do you handle temperature-sensitive or perishable goods?',
      answer:
        'Yes, we offer specialized refrigerated and temperature-controlled transport for perishable goods such as food, medicine, and chemicals. Our vehicles are equipped with real-time temperature monitoring systems.',
    },
    {
      question: 'Can I integrate your tracking system with my business software?',
      answer:
        'Absolutely. Our digital tracking platform offers API integrations that allow seamless connectivity with ERP, e-commerce, and warehouse management systems for streamlined operations.',
    },
    {
      question: 'What happens if my shipment gets delayed?',
      answer:
        'We proactively notify clients about any delays and provide real-time status updates. Our team also works to quickly resolve the issue and minimize disruption while offering alternative solutions if needed.',
    },
    {
      question: 'Do you provide international shipping services?',
      answer:
        'Yes, we handle both imports and exports across major global trade lanes. Our services include customs clearance, documentation, freight forwarding, and last-mile delivery at destination countries.',
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
            Frequently Asked Questions
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
