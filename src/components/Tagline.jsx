"use client"
import  React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react"



const CompanyTagline = ({ brand, tagline, path }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.5, 1, 0.5],
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative overflow-hidden"
    >
      {/* Background with animated gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
        animate={{
          background: [
            "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #581c87 100%)",
            "linear-gradient(135deg, #1e3a8a 0%, #581c87 50%, #0f172a 100%)",
            "linear-gradient(135deg, #581c87 0%, #0f172a 50%, #1e3a8a 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />

        {/* Sparkle effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={sparkleVariants}
            animate="animate"
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400/60" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand section */}
          {brand && (
            <motion.div variants={itemVariants} className="mb-6">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Brand</span>
              </motion.div>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-yellow-400 mt-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {brand}
              </motion.h2>
            </motion.div>
          )}

          {/* Tagline section */}
          {tagline && (
            <motion.div variants={itemVariants} className="mb-8">
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {tagline}
              </motion.p>

              {/* Decorative line */}
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          )}

          {/* CTA Button */}
          {path && (
            <motion.div variants={itemVariants}>
              <motion.a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Visit Website
                  <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full scale-0"
                  whileTap={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom glow effect */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
    </motion.div>
  )
}

export default CompanyTagline
