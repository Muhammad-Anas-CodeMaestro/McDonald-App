import { loadFromStorage, saveToStorage, clearStorage } from '../lib/storage'
import { userValue } from '../data/userValue'
import { createContext, useEffect, useState, useMemo, useContext } from 'react'

const AuthContext = createContext(undefined)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within an Authprovider")
  return ctx
}

export default function AuthProvider ({ children })
{
  const [users] = useState(() => loadFromStorage("users", userValue))
  const [user, setUser] = useState(() => loadFromStorage("session", null))

  useEffect(() =>
  {
    saveToStorage("users", users)
  }, [users])

  function login (email, password)
  {
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.password === password
    )
    if (!found) {
      return { ok: false, error: "Email or password is incorrect"}
    }
    setUser(found)
    saveToStorage("session", found)
    return { ok: true }
  }

  function changeRole(roleId){
    const updatedUser = {
      ...user,
      roleId
    };
    setUser(updatedUser)
    saveToStorage("session", updatedUser)
  }

  function logout(){
    setUser(null)
    clearStorage("session")
    localStorage.removeItem("isLoggedIn")
  }

  const value = useMemo(
    () => ({
      user, users, isAuthenticated: !!user, login, logout, changeRole
    }), [user, users]
  )
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}