import { useEffect, useState } from 'react'
import { useLang } from './LanguageProvider'

export default function Hero({ onReserve }) {
  const { t, setLang, lang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-slate-900/60" />

      <nav className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-5">
        <div className="text-white font-semibold tracking-wide">{t.brand}</div>
        <div className="flex items-center gap-3">
          <button onClick={() => setLang('EN')} className={`px-2 py-1 text-sm rounded ${lang==='EN'?'bg-white/20 text-white':'text-white/80 hover:text-white'}`}>EN</button>
          <button onClick={() => setLang('ES')} className={`px-2 py-1 text-sm rounded ${lang==='ES'?'bg-white/20 text-white':'text-white/80 hover:text-white'}`}>ES</button>
          <button onClick={() => setLang('JA')} className={`px-2 py-1 text-sm rounded ${lang==='JA'?'bg-white/20 text-white':'text-white/80 hover:text-white'}`}>日本語</button>
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-center text-white">
        <p className="uppercase tracking-[0.3em] text-white/70 mb-3 text-xs">{t.locationTag}</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{t.heroTitle}</h1>
        <div className="flex items-center justify-center gap-4">
          <button onClick={onReserve} className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            {t.reserve}
          </button>
          <a href="#schedule" className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition">Schedule</a>
        </div>
      </div>
    </header>
  )
}
