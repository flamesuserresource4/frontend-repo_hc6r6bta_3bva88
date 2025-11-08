export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-emerald-500/20 grid place-items-center ring-1 ring-emerald-400/40">
              <span className="text-emerald-400 font-semibold">ES</span>
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">Ekonomi Syariah</p>
              <p className="text-xs text-slate-400">Fakultas Ekonomi & Bisnis Islam</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400 max-w-xs">
            Mendorong ekosistem ekonomi yang adil dan berkelanjutan melalui pendidikan, riset, dan pengabdian masyarakat.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold">Kontak</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Jalan Ilmiah No. 123, Kota Pendidikan</li>
            <li>Email: ekonomi.syariah@kampus.ac.id</li>
            <li>Telepon: (021) 1234-5678</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Tautan Cepat</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="#about">Tentang</a></li>
            <li><a className="hover:text-white" href="#programs">Program</a></li>
            <li><a className="hover:text-white" href="#faculty">Dosen</a></li>
            <li><a className="hover:text-white" href="#admissions">Penerimaan</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Ikuti Kami</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="#">Instagram</a></li>
            <li><a className="hover:text-white" href="#">LinkedIn</a></li>
            <li><a className="hover:text-white" href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Program Studi Ekonomi Syariah. All rights reserved.</p>
          <p>Designed for modern, accessible web.</p>
        </div>
      </div>
    </footer>
  );
}
