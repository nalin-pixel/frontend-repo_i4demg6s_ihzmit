import { Star, HeartHandshake, Shield } from 'lucide-react';

export default function WhyAdmired() {
  const points = [
    {
      icon: Star,
      title: 'Karisma dan Panggung',
      desc: 'Gaya teatrikalnya bukan sekadar dramatis; ia mengubah momen biasa menjadi pertunjukan penuh pesona.',
    },
    {
      icon: HeartHandshake,
      title: 'Empati di Balik Sorotan',
      desc: 'Di balik tingkahnya yang flamboyan, ada kepedulian pada rakyat Fontaine dan rekan-rekannya.',
    },
    {
      icon: Shield,
      title: 'Keberanian Menghadapi Kebenaran',
      desc: 'Ia berani mengejar kebenaran dan menerima konsekuensi, sebuah teladan untuk bertanggung jawab.',
    },
  ];

  return (
    <section id="lessons" className="bg-gradient-to-b from-white to-sky-50/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Apa yang Bisa Kita Teladani</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-cyan-200 bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-cyan-700" />
              <h3 className="mt-3 font-semibold text-slate-800">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
