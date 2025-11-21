import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase, supabaseReady } from '../lib/supabaseClient'

export default function SignIn() {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignIn = async (e) => {
    e.preventDefault()
    setError('')
    if (!supabaseReady) {
      setError('Auth not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
      return
    }
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      nav('/portal')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <form onSubmit={handleSignIn} className="w-full max-w-md border border-white/10 bg-white/5 p-8">
        <h1 className="text-2xl font-bold">Client Sign-In</h1>
        <p className="text-white/60 mt-2">Exclusive access for active clients.</p>

        <div className="mt-8 space-y-4">
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full bg-black border border-white/15 px-3 py-2 outline-none focus:border-white/40" />
          </div>
          <div>
            <label className="text-sm text-white/70">Password</label>
            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} className="mt-1 w-full bg-black border border-white/15 px-3 py-2 outline-none focus:border-white/40" />
          </div>
        </div>

        {error && <div className="mt-4 text-sm text-red-400">{error}</div>}

        <button disabled={loading} className="mt-8 w-full bg-white text-black font-semibold py-3 border border-white/20 disabled:opacity-60">
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
