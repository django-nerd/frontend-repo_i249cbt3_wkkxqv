import React from 'react'

export default function MinimalHeader({ onSignIn }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 mix-blend-difference">
      <div className="text-white font-bold tracking-widest">GROWTHURE</div>
      <button onClick={onSignIn} className="text-white/90 hover:text-white underline underline-offset-4">Client Sign-In</button>
    </header>
  )
}
