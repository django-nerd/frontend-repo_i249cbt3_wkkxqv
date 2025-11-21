import React from 'react'
import { motion } from 'framer-motion'

export default function Philosophy() {
  const items = [
    { title: 'Frontrunner Mindset', body: 'We set pace, we don’t keep up. Velocity is strategy.' },
    { title: 'Purposeful Chaos', body: 'Energy without waste. Fast, precise, orchestrated.' },
    { title: 'Relentless Iteration', body: 'Ship, measure, sharpen. Repeat until dominant.' },
  ]

  return (
    <section className="relative bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          The Why
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 text-lg text-white/70 max-w-3xl"
        >
          Our methodology is built for unfair advantage. Precision research, aggressive creative, surgical deployment.
        </motion.p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border border-white/10 p-6 bg-white/5"
            >
              <div className="text-sm text-white/50">0{i + 1}</div>
              <h3 className="text-xl font-semibold mt-2">{it.title}</h3>
              <p className="text-white/70 mt-2">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
