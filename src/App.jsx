import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Programs from './components/Programs';
import Footer from './components/Footer';

function SectionDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
  );
}

export default function App() {
  return (
    <div className="font-inter bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <SectionDivider />
        <Programs />
        {/* Anchor placeholders for nav */}
        <section id="faculty" className="sr-only" aria-hidden="true" />
        <section id="admissions" className="sr-only" aria-hidden="true" />
      </main>
      <Footer />
    </div>
  );
}
