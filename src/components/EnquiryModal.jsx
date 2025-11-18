import { useState } from 'react'
import { useLang } from './LanguageProvider'

export default function EnquiryModal({ open, onClose, selectedWeek }) {
  const { t, lang } = useLang()
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
    guests: 2,
  })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = { ...form, language: lang, week_code: selectedWeek?.code }
      const res = await fetch(`${baseUrl}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white max-w-lg w-full mx-4 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{t.formTitle}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800">✕</button>
        </div>

        {submitted ? (
          <p className="text-green-700">{t.submitted}</p>
        ) : (
          <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">{t.firstName}</label>
              <input required className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2" value={form.first_name} onChange={(e)=> setForm(f=>({...f, first_name: e.target.value}))} />
            </div>
            <div>
              <label className="text-sm text-slate-600">{t.lastName}</label>
              <input required className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2" value={form.last_name} onChange={(e)=> setForm(f=>({...f, last_name: e.target.value}))} />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">{t.email}</label>
              <input required type="email" className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2" value={form.email} onChange={(e)=> setForm(f=>({...f, email: e.target.value}))} />
            </div>
            <div>
              <label className="text-sm text-slate-600">{t.phone}</label>
              <input className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2" value={form.phone} onChange={(e)=> setForm(f=>({...f, phone: e.target.value}))} />
            </div>
            <div>
              <label className="text-sm text-slate-600">{t.guests}</label>
              <input type="number" min={1} max={18} className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2" value={form.guests} onChange={(e)=> setForm(f=>({...f, guests: Number(e.target.value)}))} />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">{t.preferredWeek}</label>
              <input readOnly className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 bg-slate-50" value={selectedWeek? `${selectedWeek.title} (${new Date(selectedWeek.start).toLocaleDateString()} → ${new Date(selectedWeek.end).toLocaleDateString()})` : ''} />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">{t.message}</label>
              <textarea rows={4} className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2" value={form.message} onChange={(e)=> setForm(f=>({...f, message: e.target.value}))} />
            </div>
            <div className="sm:col-span-2 flex justify-end gap-3 mt-2">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-300">Cancel</button>
              <button disabled={loading} className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">{loading? '...' : t.submit}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
