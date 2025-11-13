import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(mx, { stiffness: 80, damping: 20 })
  const ry = useSpring(my, { stiffness: 80, damping: 20 })
  const rotateX = useTransform(ry, [-200, 200], [8, -8])
  const rotateY = useTransform(rx, [-200, 200], [-8, 8])

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    mx.set(x)
    my.set(y)
  }

  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden" onMouseMove={onMouseMove}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh]">
        <motion.div style={{ perspective: 1200 }} className="max-w-2xl">
          <motion.div style={{ rotateX, rotateY }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Building playful, modern web experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-slate-700"
            >
              I blend code, design, and 3D to craft delightful, high-performance interfaces. Let’s turn ideas into interactive reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-medium border border-slate-200 hover:bg-slate-50">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
