import { useState } from 'react';
import { Menu, X, Search, LogIn } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/75 border-b border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-emerald-500/20 grid place-items-center ring-1 ring-emerald-400/40">
              <span className="text-emerald-400 font-semibold">ES</span>
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">Ekonomi Syariah</p>
              <p className="text-xs text-slate-300">Fakultas Ekonomi & Bisnis Islam</p>
            </div>
          </a>

          {/* Center: Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-slate-200 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-2 w-56 rounded-md bg-slate-800/70 text-slate-100 placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500/60"
              />
            </div>
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition-colors"
            >
              <LogIn className="h-4 w-4" />
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-700 text-slate-200 hover:bg-white/5"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-2 w-full rounded-md bg-slate-800/70 text-slate-100 placeholder:text-slate-400 border border-slate-700 focus:outline-none"
              />
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block w-full text-center px-3 py-2 rounded-md bg-white/5 text-slate-200 hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#admissions"
              onClick={() => setOpen(false)}
              className="block text-center px-3 py-2 rounded-md bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition-colors"
            >
              Login / Apply
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
