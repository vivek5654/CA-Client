import { useEffect, React } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './assets/Components/NavBar'
import Footer from './assets/Components/Footer'
import HomePage from './assets/Pages/HomePage'
import Aboutus from './assets/Pages/Aboutus'
import Contactus from './assets/Pages/Contactus'
import Services from './assets/Pages/Services'
import FinancialPlanning from './assets/Pages/FinancialPlanning'
import TaxConsultation from './assets/Pages/TaxConsultation'
import AuditAssurance from './assets/Pages/AuditAssurance'
import BusinessRegistration from './assets/Pages/BusinessRegistration'
import CorporateAdvisory from './assets/Pages/CorporateAdvisory'
import FinancialReporting from './assets/Pages/FinancialReporting'

// ScrollToTop component to handle scroll behavior
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/services" element={<Services />} />
            <Route path="FinancialPlanning" element={<FinancialPlanning />} />
            <Route path="TaxConsultation" element={<TaxConsultation />} />
            <Route path="AuditAssurance" element={<AuditAssurance />} />
            <Route path="BusinessRegistration" element={<BusinessRegistration />} />
            <Route path="CorporateAdvisory" element={<CorporateAdvisory />} />
            <Route path="FinancialReporting" element={<FinancialReporting />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </>
  )
}

export default App