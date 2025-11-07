import { Droplets, Music, Theater } from 'lucide-react';

export default function FunFacts() {
  const facts = [
    { icon: Droplets, text: 'Elemen: Hydro — simbol fleksibilitas, kejernihan, dan emosi.' },
    { icon: Theater, text: 'Ikon Opera Epiclese: seorang bintang dengan selera drama yang tinggi.' },
    { icon: Music, text: 'Gestur dan dialognya bak melodi — memadukan humor, elegansi, dan sedikit kejahilan.' },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Fakta Menarik</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {facts.map(({ icon: Icon, text }) => (
          <div key={text} className="rounded-2xl border border-cyan-200 bg-white p-6 shadow-sm">
            <Icon className="h-6 w-6 text-cyan-700" />
            <p className="mt-3 text-slate-700 text-sm">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
