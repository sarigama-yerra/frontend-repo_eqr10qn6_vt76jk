import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-50 via-white to-violet-50 text-slate-900">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Your Name — All rights reserved.</footer>
    </div>
  )
}

export default App
