import Hero from './components/Hero';
import RolePlay from './components/RolePlay';
import WhyAdmired from './components/WhyAdmired';
import FunFacts from './components/FunFacts';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-cyan-100">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-transparent">Furina • Fontaine</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#roleplay" className="hover:text-cyan-700">Role Play</a>
            <a href="#lessons" className="hover:text-cyan-700">Teladan</a>
            <a href="#facts" className="hover:text-cyan-700">Fakta</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <RolePlay />
        <WhyAdmired />
        <section id="facts">
          <FunFacts />
        </section>
      </main>

      <footer className="border-t border-cyan-100">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
          Dibuat sebagai penghormatan untuk karakter Furina dari Genshin Impact. Website ini bersifat penggemar.
        </div>
      </footer>
    </div>
  );
}

export default App;
