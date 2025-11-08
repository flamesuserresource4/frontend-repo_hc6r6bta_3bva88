import { ArrowRight } from 'lucide-react';

const programs = [
  {
    name: 'Keuangan & Perbankan Syariah',
    desc: 'Mendalami manajemen risiko, pembiayaan, akad, dan regulasi perbankan syariah.',
    link: '#programs',
  },
  {
    name: 'Pasar Modal & Investasi Syariah',
    desc: 'Instrumen pasar modal, sukuk, reksa dana syariah, dan analisis portofolio.',
    link: '#programs',
  },
  {
    name: 'Ekonomi Pembangunan Islam',
    desc: 'Kebijakan publik, keadilan distributif, dan pembangunan berkelanjutan berbasis maqashid.',
    link: '#programs',
  },
  {
    name: 'Kewirausahaan Beretika',
    desc: 'Membangun bisnis berkelanjutan dengan prinsip halal, thayyib, dan kebermanfaatan.',
    link: '#programs',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Program Unggulan</h2>
          <p className="mt-3 text-slate-600">Eksplorasi kurikulum yang dirancang untuk kesiapan industri dan riset.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <article key={p.name} className="group rounded-xl border border-slate-200 p-6 bg-slate-50/50 hover:bg-white transition-colors">
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              <a
                href={p.link}
                className="mt-4 inline-flex items-center gap-1 text-emerald-600 font-medium group-hover:gap-1.5 transition-all"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
