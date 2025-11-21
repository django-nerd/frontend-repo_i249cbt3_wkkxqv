import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { supabase, supabaseReady } from '../lib/supabaseClient'
import { Menu } from 'lucide-react'

export default function Portal() {
  const { user, loading } = useAuth()
  const nav = useNavigate()

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading…</div>
  }

  if (!user) {
    nav('/signin')
    return null
  }

  const signOut = async () => {
    if (supabaseReady) await supabase.auth.signOut()
    nav('/')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <button className="p-2 border border-white/15"><Menu className="w-5 h-5" /></button>
          <div className="text-sm text-white/60">Portal Navigation</div>
        </div>
        <button onClick={signOut} className="text-sm text-white/80 underline">Sign out</button>
      </header>

      <main className="px-6 py-10">
        <h1 className="text-3xl font-bold">Welcome, {user.email}</h1>
        <section className="mt-10 border border-white/10 p-6 bg-white/5">
          <h2 className="text-xl font-semibold">Your Trophy Room</h2>
          <p className="text-white/70 mt-2">Digital Achievement Cards for completed services will appear here.</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-video border border-white/10 bg-white/5 flex items-center justify-center text-white/40">
                Trophy #{i + 1}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
