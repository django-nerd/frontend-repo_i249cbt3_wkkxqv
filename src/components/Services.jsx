import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Services() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  const services = new Array(10).fill(0).map((_, i) => ({ id: i + 1 }))

  return (
    <section ref={targetRef} className="relative bg-black text-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8"
        >
          The Armory
        </motion.h2>
      </div>
      <div className="relative h-[60vh] md:h-[70vh]">
        <motion.div style={{ x }} className="absolute left-0 top-0 h-full flex gap-8 will-change-transform">
          {services.map((s) => (
            <Card key={s.id} index={s.id} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Card({ index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="w-[70vw] md:w-[40vw] lg:w-[28vw] h-full shrink-0 border border-white/10 bg-white/5 p-6 flex flex-col justify-end"
    >
      <div className="text-sm text-white/50">Card 0{index}</div>
      <h3 className="text-2xl font-bold mt-1">Service Title</h3>
      <p className="text-white/70 mt-2">Pre-designed service cards will slot here with custom visuals.</p>
    </motion.div>
  )
}
