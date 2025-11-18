import { useState } from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import Values from './components/Values'
import Schedule from './components/Schedule'
import EnquiryModal from './components/EnquiryModal'
import { LanguageProvider } from './components/LanguageProvider'

function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [selectedWeek, setSelectedWeek] = useState(null)

  const openEnquiry = (week=null) => { setSelectedWeek(week); setEnquiryOpen(true) }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Hero onReserve={() => openEnquiry()} />
        <Story />
        <Values />
        <Schedule onEnquire={(w)=> openEnquiry(w)} />

        <footer className="border-t border-slate-200 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-slate-700">
            <div>
              <h4 className="font-semibold">Mountain Memories</h4>
              <p className="text-sm mt-2">Rusutsu, Hokkaido · +81 70-4192-4414 · admin@mtnmemories.com</p>
            </div>
            <div>
              <h4 className="font-semibold">Explore</h4>
              <ul className="text-sm mt-2 space-y-1">
                <li><a href="#schedule" className="hover:underline">Packages</a></li>
                <li><a href="#" className="hover:underline">The Lodge</a></li>
                <li><a href="#" className="hover:underline">Ski School</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Follow</h4>
              <a href="https://instagram.com/mtnmemories" className="text-sm text-slate-600 hover:underline">@mtnmemories</a>
            </div>
          </div>
          <div className="text-center text-xs text-slate-500 py-6">© 2025 Mountain Memories · All rights reserved · Powered by Reserbee</div>
        </footer>

        <EnquiryModal open={enquiryOpen} onClose={()=> setEnquiryOpen(false)} selectedWeek={selectedWeek} />
      </div>
    </LanguageProvider>
  )
}

export default App
