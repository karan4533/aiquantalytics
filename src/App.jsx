import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CareersPage from './pages/CareersPage'
import ScrollToTop from './components/ScrollToTop'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <CursorGlow />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

