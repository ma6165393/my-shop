"use client"
import { useRouter } from "next/navigation"

export function AdminButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push("/login")}
      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition"
    >
      دخول الادمن
    </button>
  )
}
