import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: 'mo',
    features: [
      '1 vCPU • 1 GB RAM',
      '25 GB NVMe storage',
      '1 TB bandwidth',
      'Basic DDoS protection'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'mo',
    featured: true,
    features: [
      '2 vCPU • 4 GB RAM',
      '80 GB NVMe storage',
      '4 TB bandwidth',
      'Advanced DDoS + WAF'
    ]
  },
  {
    name: 'Scale',
    price: '$99',
    period: 'mo',
    features: [
      '8 vCPU • 16 GB RAM',
      '320 GB NVMe storage',
      '15 TB bandwidth',
      'Priority support'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Scale up or down anytime. Only pay for what you use.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl border ${plan.featured ? 'border-blue-400/40' : 'border-white/10'} bg-gradient-to-b from-white/[0.06] to-transparent p-6`}>
              {plan.featured && (
                <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-3 py-1 text-xs text-white shadow">Most popular</div>
              )}
              <h3 className="text-white font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-300">/{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> {f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-white ${plan.featured ? 'bg-gradient-to-r from-blue-500 to-violet-600 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)]' : 'border border-white/15 bg-white/5 hover:bg-white/10'}`}>Choose {plan.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
