import { Network, ShieldCheck, Gauge, Globe, Cpu, Cloud } from 'lucide-react'

const items = [
  {
    icon: Network,
    title: 'Global Network',
    desc: 'Enterprise-grade infrastructure across 300+ edge locations for ultra-low latency.'
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    desc: 'Always-on DDoS protection, automated backups, and SOC2 compliant controls.'
  },
  {
    icon: Gauge,
    title: 'Blazing Performance',
    desc: 'NVMe storage, latest-gen CPUs, and automatic scaling keep your apps fast.'
  },
  {
    icon: Globe,
    title: 'Any Runtime',
    desc: 'Docker, VMs, managed databases — deploy anything with a single command.'
  },
  {
    icon: Cpu,
    title: 'Dev‑first DX',
    desc: 'CLI, REST, and GitOps flows with previews for every pull request.'
  },
  {
    icon: Cloud,
    title: 'Reliability',
    desc: '99.99% uptime SLA with instant failover and multi-region redundancy.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to run at scale</h2>
          <p className="mt-3 text-slate-300">Purpose‑built for production workloads, from startup to enterprise.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 hover:border-white/20 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{i.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
