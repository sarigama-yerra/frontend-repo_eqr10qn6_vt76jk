import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseGlow() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 })

  useEffect(() => {
    const handler = (e) => {
      x.set(e.clientX - 150)
      y.set(e.clientY - 150)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-10 h-[300px] w-[300px] rounded-full"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(600px circle at 50% 50%, rgba(99,102,241,0.18), transparent 40%)',
        filter: 'blur(10px)'
      }}
    />
  )
}
