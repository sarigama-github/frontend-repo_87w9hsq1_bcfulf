import { useState } from 'react'
import { Menu, X, Server, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Server className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-lg sm:text-xl font-semibold tracking-tight">Systey</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Customers</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-slate-300 hover:text-white px-3 py-2 rounded-lg">Sign in</a>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.9)] transition-shadow">
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/5">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4">
              <div className="grid gap-2">
                <a onClick={() => setOpen(false)} href="#features" className="block rounded-lg px-2 py-2 text-slate-200 hover:bg-white/5">Features</a>
                <a onClick={() => setOpen(false)} href="#pricing" className="block rounded-lg px-2 py-2 text-slate-200 hover:bg-white/5">Pricing</a>
                <a onClick={() => setOpen(false)} href="#testimonials" className="block rounded-lg px-2 py-2 text-slate-200 hover:bg-white/5">Customers</a>
                <a onClick={() => setOpen(false)} href="#contact" className="block rounded-lg px-2 py-2 text-slate-200 hover:bg-white/5">Contact</a>
                <a onClick={() => setOpen(false)} href="#pricing" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-white">Get started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
