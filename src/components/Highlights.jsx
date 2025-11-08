import { Building2, Users, Briefcase, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Fasilitas Modern',
    desc: 'Laboratorium keuangan syariah, perpustakaan digital, dan ruang kolaborasi yang mendukung pembelajaran aktif.',
  },
  {
    icon: Users,
    title: 'Keahlian Dosen',
    desc: 'Pengajar praktisi dan akademisi berpengalaman di bidang ekonomi Islam, fiqh muamalah, dan fintech syariah.',
  },
  {
    icon: Briefcase,
    title: 'Prospek Karier',
    desc: 'Peluang karier di bank syariah, asuransi, pasar modal, auditor kepatuhan syariah, konsultan, dan wirausaha.',
  },
  {
    icon: Sparkles,
    title: 'Kehidupan Mahasiswa',
    desc: 'Komunitas aktif, organisasi kemahasiswaan, program pertukaran, dan kegiatan pengembangan soft skills.',
  },
];

export default function Highlights() {
  return (
    <section className="bg-slate-50" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 id="features-heading" className="text-2xl font-bold text-slate-900">Keunggulan Program</h2>
          <p className="mt-3 text-slate-600">Empat pilar yang mendefinisikan pengalaman belajar Anda.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-lg bg-emerald-500/15 text-emerald-600 grid place-items-center ring-1 ring-emerald-500/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-emerald-400/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
