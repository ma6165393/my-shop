"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    // بيانات الدخول الثابتة
    const USER = "momenahmed"
    const PASS = "14203101420310"

    if (username === USER && password === PASS) {
      router.push("/admin") // نقل لصفحة الادمن
    } else {
      setError("اسم المستخدم أو كلمة المرور خاطئة")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">تسجيل الدخول للادمن</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3 w-80">
        <input
          type="text"
          placeholder="اسم المستخدم"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          تسجيل الدخول
        </button>
      </form>
    </div>
  )
}
