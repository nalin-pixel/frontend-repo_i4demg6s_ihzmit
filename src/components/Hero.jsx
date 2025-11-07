import { Crown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200/50 via-cyan-100/40 to-white pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-white/70 px-4 py-1 text-cyan-700 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Hydro • Fontaine • Archon</span>
          </div>
          <h1 className="font-[800] leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl bg-gradient-to-br from-cyan-700 via-sky-700 to-blue-800 bg-clip-text text-transparent">
            Furina (Focalors)
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            Bintang panggung Opera Epiclese dan Hydro Archon yang memesona —
            cerdas, dramatis, dan selalu mencuri perhatian.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#roleplay"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700"
            >
              <Crown className="h-5 w-5" />
              Mulai Role Play
            </a>
            <a
              href="#lessons"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300 bg-white px-5 py-3 text-cyan-700 transition hover:bg-cyan-50"
            >
              Mengapa Banyak yang Mengaguminya
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/60 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
    </section>
  );
}
