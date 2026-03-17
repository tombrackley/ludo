import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ContactPage from './pages/contact-page.tsx'
import RoyalShowsPage from './pages/royal-shows.tsx'
import ConferencesPage from './pages/conferences.tsx'
import WaterParksPage from './pages/water-parks.tsx'
import SolutionsPage from './pages/solutions.tsx'
import PlatformPage from './pages/platform.tsx'
import PricingPage from './pages/pricing-page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/solutions/royal-shows" element={<RoyalShowsPage />} />
        <Route path="/solutions/conferences" element={<ConferencesPage />} />
        <Route path="/solutions/water-parks" element={<WaterParksPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
