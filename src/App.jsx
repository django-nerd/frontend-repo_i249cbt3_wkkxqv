import React from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import SignIn from './components/SignIn'
import Portal from './components/Portal'
import MinimalHeader from './components/MinimalHeader'
import { AuthProvider } from './context/AuthContext'

function Home() {
  const nav = useNavigate()
  const goSignIn = () => nav('/signin')
  return (
    <div className="bg-black text-white">
      <MinimalHeader onSignIn={goSignIn} />
      <Hero onSignIn={goSignIn} />
      <Philosophy />
      <Services />
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </AuthProvider>
  )
}
