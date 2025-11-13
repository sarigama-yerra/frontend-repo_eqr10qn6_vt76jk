import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const sample = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A Spline-powered hero experience with buttery motion and accessibility-first code.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: 'https://example.com'
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Data-rich analytics UI with smooth transitions and responsive charts.',
    tags: ['React', 'Tailwind', 'SSR'],
    link: 'https://example.com'
  },
  {
    title: 'Design System',
    desc: 'Composable component library with tokens, dark mode, and docs site.',
    tags: ['Design Tokens', 'Radix', 'Docs'],
    link: 'https://example.com'
  }
]

function TiltCard({ children, i }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 100, damping: 12 })
  const sy = useSpring(my, { stiffness: 100, damping: 12 })
  const rotateX = useTransform(sy, [-120, 120], [10, -10])
  const rotateY = useTransform(sx, [-120, 120], [-10, 10])

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    mx.set(x)
    my.set(y)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-5 hover:shadow-xl transition-all"
      style={{ perspective: 1000 }}
    >
      <motion.div style={{ rotateX, rotateY }} className="will-change-transform">
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-sm font-medium tracking-wider text-slate-500 uppercase">Selected Work</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Projects</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-medium text-slate-900 hover:opacity-80">Get in touch</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sample.map((p, i) => (
            <TiltCard key={p.title} i={i}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:underline">{p.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
                </div>
                <ExternalLink size={18} className="text-slate-400 group-hover:text-slate-700" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
