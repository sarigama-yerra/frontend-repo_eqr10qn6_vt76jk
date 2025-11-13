import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection({ id, eyebrow, title, children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.1'] })

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  return (
    <section id={id} ref={ref} className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ y, rotate, opacity }} transition={{ type: 'spring', stiffness: 80, damping: 20 }}>
          <p className="text-sm font-medium tracking-wider text-slate-500 uppercase">{eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">{title}</h2>
          <div className="mt-8 text-slate-700 leading-relaxed">
            {children}
          </div>
        </motion.div>
        <motion.div
          aria-hidden
          className="absolute -z-10 -left-24 top-10 h-40 w-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.18), transparent 60%)'
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          aria-hidden
          className="absolute -z-10 right-0 bottom-0 h-52 w-52 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.16), transparent 60%)'
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
      </div>
    </section>
  )
}
