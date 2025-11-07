import { useState } from 'react';
import { MessageSquare, Send, User } from 'lucide-react';

const STARTERS = [
  "Selamat datang di Opera Epiclese! Apakah kau siap menyaksikan pertunjukan paling gemerlap di Fontaine?",
  "Hmph~ Aku, Furina, sang Hydro Archon, sedang mencari partner dialog yang bisa mengimbangi kepiawaianku. Apakah itu dirimu?",
  "Tepat pada waktunya! Sebuah kasus dramatis menanti — dan hanya percakapan menawan yang bisa menyelesaikannya.",
];

export default function RolePlay() {
  const [messages, setMessages] = useState([
    { role: 'furina', text: STARTERS[Math.floor(Math.random() * STARTERS.length)] },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { role: 'user', text: trimmed };
    // Simple playful echo with Furina flair
    const reply = {
      role: 'furina',
      text:
        Math.random() > 0.5
          ? `Oh? ${trimmed} — betapa dramatis! Aku suka energimu. Mari kita bawa ini ke panggung yang lebih besar!`
          : `Ck ck, perkataanmu menarik, tetapi apakah kau siap menghadapi sorotan panggung Fontaine? ${trimmed}… menarik~`,
    };
    setMessages((m) => [...m, userMsg, reply]);
    setInput('');
  };

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <section id="roleplay" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-6 flex items-center gap-3">
        <MessageSquare className="h-6 w-6 text-cyan-700" />
        <h2 className="text-2xl font-bold text-slate-800">Role Play bersama Furina</h2>
      </div>

      <div className="rounded-2xl border border-cyan-200 bg-white shadow-sm">
        <div className="h-72 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow ${
                m.role === 'user'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-sky-50 text-slate-800 border border-sky-200'
              }`}>
                <div className="flex items-center gap-2 mb-1 opacity-80 text-xs">
                  {m.role === 'user' ? <User className="h-3.5 w-3.5" /> : <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-500" />} 
                  <span>{m.role === 'user' ? 'Kamu' : 'Furina'}</span>
                </div>
                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-cyan-100 p-3">
          <div className="flex items-center gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              rows={2}
              placeholder="Ketik balasanmu…"
              className="flex-1 resize-none rounded-xl border border-cyan-200 bg-white px-3 py-2 outline-none ring-0 focus:border-cyan-400"
            />
            <button
              onClick={send}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-white shadow hover:bg-cyan-700"
            >
              <Send className="h-4 w-4" />
              Kirim
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
