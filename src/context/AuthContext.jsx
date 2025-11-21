import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, supabaseReady } from '../lib/supabaseClient'

const AuthContext = createContext({ user: null, loading: true })

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function init() {
      try {
        if (!supabaseReady) {
          setUser(null)
          return
        }
        const {
          data: { session },
        } = await supabase.auth.getSession()
        if (!mounted) return
        setUser(session?.user || null)
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user || null)
        })
        return () => listener.subscription.unsubscribe()
      } finally {
        if (mounted) setLoading(false)
      }
    }
    const unsub = init()
    return () => {
      mounted = false
      if (typeof unsub === 'function') unsub()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, supabaseReady }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
