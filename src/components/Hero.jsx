import { useEffect, useMemo, useState, Suspense, lazy } from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

// Lazy-load Spline so it doesn’t block first paint
const LazySpline = lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)
  const [showSpline, setShowSpline] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setShouldReduceMotion(mq.matches)
    handler()
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])

  useEffect(() => {
    // Defer Spline mount slightly to avoid jank and layout shifts
    const id = setTimeout(() => setShowSpline(true), 200)
    return () => clearTimeout(id)
  }, [])

  const featureItems = useMemo(() => [
    'Global edge network',
    '1‑click autoscaling',
    'Built‑in DDoS shield',
    'Transparent pricing'
  ], [])

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24">
      {/* Ambient gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.16),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(16,185,129,0.7)]"></span>
              99.99% uptime guaranteed
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.55, ease: 'easeOut' }}
              className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-white"
            >
              Future‑proof server hosting for modern teams
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5, ease: 'easeOut' }}
              className="mt-5 text-lg text-slate-300"
            >
              Deploy, scale, and monitor with zero friction. Systey combines blazing performance with a developer‑first experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.45, ease: 'easeOut' }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.9)] transition-shadow">Start for free</a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10">Explore features</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 text-slate-300 text-sm"
            >
              {featureItems.map((text) => (
                <div key={text} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> {text}</div>
              ))}
            </motion.div>
          </div>

          {/* Visual area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40"
          >
            {/* Vignette + subtle grid overlay to tame the animation visuals */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_10%,transparent,rgba(2,6,23,0.5))]" />
              <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>

            {(!shouldReduceMotion && showSpline) ? (
              <Suspense fallback={<GradientFallback />}> 
                <LazySpline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </Suspense>
            ) : (
              <GradientFallback />
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-violet-600/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GradientFallback() {
  return (
    <div className="w-full h-full relative">
      {/* Animated gradient mesh as a tasteful placeholder when Spline is off */}
      <div className="absolute inset-0 animate-pulse-slow bg-[radial-gradient(800px_400px_at_20%_20%,rgba(59,130,246,0.25),transparent),radial-gradient(700px_350px_at_80%_30%,rgba(124,58,237,0.22),transparent),radial-gradient(600px_300px_at_50%_80%,rgba(168,85,247,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent,rgba(2,6,23,0.7))]" />
    </div>
  )
}

// Tailwind keyframes via utility classes
// Note: using inline @keyframes is not possible here; ensure index.css defines the animation if not present.
