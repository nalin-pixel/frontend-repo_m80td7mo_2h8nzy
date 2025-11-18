import { useEffect, useState } from 'react'
import { useLang } from './LanguageProvider'

export default function Schedule({ onEnquire }) {
  const { t } = useLang()
  const [weeks, setWeeks] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/weeks`).then(r=>r.json()).then(setWeeks).catch(()=>setWeeks([]))
  }, [])

  return (
    <section id="schedule" className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">{t.scheduleTitle}</h2>
        <p className="text-slate-600 mb-8">{t.scheduleSubtitle}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {weeks.map((w)=> (
            <div key={w.code} className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{w.title}</h3>
                <p className="text-slate-600">{new Date(w.start).toLocaleDateString()} → {new Date(w.end).toLocaleDateString()}</p>
                <ul className="mt-3 text-sm text-slate-600 list-disc pl-5">
                  {w.highlights?.map((h,i)=> <li key={i}>{h}</li>)}
                </ul>
              </div>
              <div className="w-full md:w-56 text-right md:text-left">
                <p className="text-slate-500 text-sm">{t.from}</p>
                <p className="text-2xl font-bold">¥{w.price_jpy.toLocaleString()}</p>
                <p className="text-slate-500">${w.price_usd.toLocaleString()}</p>
                {w.status === 'soldout' ? (
                  <button disabled className="mt-4 w-full bg-slate-200 text-slate-500 rounded-full py-2">{t.soldOut}</button>
                ) : (
                  <button onClick={()=> onEnquire(w)} className="mt-4 w-full bg-slate-900 text-white rounded-full py-2 hover:bg-slate-800">{t.enquire}</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
