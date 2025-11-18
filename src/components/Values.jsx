import { useLang } from './LanguageProvider'

const FEATURES = [
  { title: 'Rusutsu Resort', icon: '🏔️' },
  { title: 'Powder Snow', icon: '❆' },
  { title: 'Continental Cuisine', icon: '🍽️' },
  { title: 'Community', icon: '🤝' },
]

export default function Values() {
  const { t } = useLang()
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-2">{t.valueTitle}</h2>
      <p className="text-slate-600 mb-8">{t.valuesDesc}</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {t.valueItems.map((item, i)=> (
          <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="text-2xl mb-2">{FEATURES[i].icon}</div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-slate-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
