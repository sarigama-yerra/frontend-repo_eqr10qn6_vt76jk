import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium tracking-wider text-slate-500 uppercase">{eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">{title}</h2>
          <div className="mt-8 text-slate-700 leading-relaxed">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
