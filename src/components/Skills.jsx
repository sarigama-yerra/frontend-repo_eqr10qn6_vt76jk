import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Code2, Layers, Zap, Rocket } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { icon: Layers, title: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'Auth'] },
  { icon: Zap, title: 'UI/UX', items: ['Design Systems', 'Accessibility', 'Prototyping', 'Animations'] },
  { icon: Rocket, title: 'Other', items: ['3D (Spline)', 'CI/CD', 'Testing', 'Analytics'] },
]

function WobbleCard({ children, i }) {
  const m = useMotionValue(0)
  const s = useSpring(m, { stiffness: 120, damping: 10, mass: 0.4 })
  const rotate = useTransform(s, [-150, 150], [-3, 3])

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const dx = e.clientX - (rect.left + rect.width / 2)
        m.set(dx)
      }}
      onMouseLeave={() => m.set(0)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-6"
      style={{ rotate }}
    >
      {children}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-wider text-slate-500 uppercase">Capabilities</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Skills</h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <WobbleCard key={s.title} i={i}>
              <s.icon className="text-slate-700" />
              <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                {s.items.map(it => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  )
}
