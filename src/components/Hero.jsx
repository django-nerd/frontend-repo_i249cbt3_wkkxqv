import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onSignIn }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          GROWTHURE
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-3xl text-xl md:text-2xl text-white/80"
        >
          Frontrunner marketing for brands obsessed with winning.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <button
            onClick={onSignIn}
            className="group relative overflow-hidden border border-white/20 bg-white text-black px-8 py-3 text-lg font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span className="relative z-10">Client Sign-In</span>
            <span className="absolute inset-0 -z-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="absolute inset-0 -z-0 bg-white/10 group-hover:bg-transparent transition-colors" />
            <span className="absolute inset-0 -z-0" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="absolute bottom-6 text-white/60 text-sm"
        >
          Scroll — Our Philosophy
        </motion.div>
      </div>
    </section>
  )
}
