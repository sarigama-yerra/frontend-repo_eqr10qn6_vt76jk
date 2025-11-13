import { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function BouncyButton({ children }) {
  const m = useMotionValue(0)
  const s = useSpring(m, { stiffness: 200, damping: 8 })
  const scale = useTransform(s, [-100, 0, 100], [0.98, 1, 0.98])
  return (
    <motion.button
      type="submit"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const dx = e.clientX - (rect.left + rect.width / 2)
        m.set(dx)
      }}
      onMouseLeave={() => m.set(0)}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800"
      style={{ scale }}
    >
      {children}
    </motion.button>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! I’ll get back to you soon.')
  }

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-wider text-slate-500 uppercase">Say Hello</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Contact</h2>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows="4" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <BouncyButton>Send Message</BouncyButton>
            <p className="text-sm text-slate-600">{status}</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
