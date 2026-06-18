import { useState } from "react"

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"

import { auth } from "../firebase/firebase"

export default function LoginPage() {

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [user, setUser] =
    useState(null)

  // SIGNUP

  const signup = async () => {

    try {

      const res =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

      setUser(res.user)

      alert("Signup Success 🚀")

    } catch (err) {

      alert(err.message)
    }
  }

  // LOGIN

  const login = async () => {

    try {

      const res =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        )

      setUser(res.user)

      alert("Login Success 😄")

    } catch (err) {

      alert(err.message)
    }
  }

  // LOGOUT

  const logout = async () => {

    await signOut(auth)

    setUser(null)

    alert("Logged Out")
  }

  return (

    <div className="bg-zinc-900 rounded-3xl p-8 border border-purple-500/20 max-w-xl">

      <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Login / Signup
      </h2>

      <p className="text-zinc-400 mb-8">
        Firebase Authentication 🔥
      </p>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="w-full p-5 rounded-2xl bg-zinc-800 outline-none mb-5 border border-zinc-700"
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        className="w-full p-5 rounded-2xl bg-zinc-800 outline-none mb-5 border border-zinc-700"
      />

      <div className="flex gap-4">

        <button
          onClick={signup}
          className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500"
        >
          Signup
        </button>

        <button
          onClick={login}
          className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Login
        </button>

      </div>

      {user && (

        <div className="mt-8 bg-zinc-800 p-5 rounded-2xl">

          <p className="mb-4">
            Logged in as:
            <br />
            <span className="text-cyan-400">
              {user.email}
            </span>
          </p>

          <button
            onClick={logout}
            className="bg-red-500 px-5 py-3 rounded-2xl font-bold"
          >
            Logout
          </button>

        </div>

      )}

    </div>
  )
}