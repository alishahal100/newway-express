'use client'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Container */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center 25%',
            minHeight: '100vh',
            minWidth: '100vw',
            maxWidth: '100vw',
            maxHeight: '100vh'
          }}
          // poster="/landing-poster.jpg"
        >
          <source src="/landing.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
        </video>
        
        {/* Responsive overlay - stronger on mobile for better text readability */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40 md:bg-black/30 lg:bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          {/* <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-lg">
            YOUR
          </h2> */}
          {/* <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto drop-shadow-lg px-1 sm:px-2">
            Simple. Reliable, efficient, and tailored to your business needs.
          </h3> */}
        </motion.div>

        {/* Main Heading - Improved mobile text wrapping */}
      <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] tracking-tight"
>
 
   <span className="text-orange-500">  Delivering Promise</span>
   <br/>
    <span className="text-semibold">  With Trust, On Time.</span> 
</motion.h1>




        {/* Paragraph */}
        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto drop-shadow-lg px-2 sm:px-4"
        >
          To streamline global logistics through innovative technology, dedicated service, and a passion for excellence.
        </motion.p> */}


      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-2 md:h-3 bg-white rounded-full mt-1 sm:mt-1 md:mt-2"
          />
        </motion.div>
      </motion.div> */}
    </section>
  )
}

export default Hero
