export default function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-violet-600/10 to-fuchsia-600/10 px-8 py-10 sm:px-10 sm:py-14">
          <div className="grid gap-8 sm:grid-cols-3 items-center">
            <div className="sm:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to launch on Systey?</h3>
              <p className="mt-2 text-slate-300">Talk to our team or start deploying in minutes with a free account.</p>
            </div>
            <div className="flex gap-3 sm:justify-end">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Talk to sales</a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)]">Create account</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
