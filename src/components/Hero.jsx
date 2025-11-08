import { ArrowRight, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
        {/* Background decorative gradient */}
        <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-300/30">
                <GraduationCap className="h-4 w-4" /> Program Studi Ekonomi Syariah
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                Membangun Ekonomi Berkeadilan Berbasis Nilai-Nilai Syariah
              </h1>
              <p className="mt-5 text-lg text-slate-300 max-w-xl">
                Tempat Anda belajar teori dan praktik ekonomi Islam yang modern,
                relevan, dan berdampak. Dirancang untuk calon pemimpin sektor
                keuangan syariah, wirausaha, dan peneliti masa depan.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-white font-semibold hover:bg-white/20 transition-colors ring-1 ring-white/20"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-blue-500/20 ring-1 ring-white/15 p-1">
                <div className="h-full w-full rounded-lg bg-slate-900/60 grid place-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
                    alt="Ekonomi Syariah"
                    className="h-full w-full object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
