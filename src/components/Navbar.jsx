import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            className="font-semibold text-lg tracking-tight inline-block"
            whileHover={{ rotate: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">YourName</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            {navItems.map((item) => (
              <motion.a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors" whileHover={{ y: -2 }}>
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100" whileHover={{ scale: 1.05 }}>
              <Github size={18} />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100" whileHover={{ scale: 1.05 }}>
              <Linkedin size={18} />
            </motion.a>
            <motion.a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800" whileHover={{ scale: 1.02 }}>
              <Mail size={16} /> Contact
            </motion.a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
