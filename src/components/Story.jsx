import { useLang } from './LanguageProvider'

export default function Story() {
  const { t } = useLang()
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-sm font-semibold tracking-widest text-blue-600 mb-3">{t.storyTitle}</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.storyHeading}</h3>
        <p className="text-slate-600 leading-relaxed">{t.storyBody}</p>
        <div className="mt-8 grid grid-cols-2 gap-6 text-center">
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-4xl font-bold">18</p>
            <p className="text-slate-500">GUESTS</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-4xl font-bold">∞</p>
            <p className="text-slate-500">MEMORIES</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {['https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2070&auto=format&fit=crop','https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2069&auto=format&fit=crop','https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=2069&auto=format&fit=crop','https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2068&auto=format&fit=crop'].map((src,i)=> (
          <img key={i} src={src} alt="lodge" className={`rounded-xl object-cover w-full h-44 ${i%3===0?'row-span-2 h-96':''}`} />
        ))}
      </div>
    </section>
  )
}
