"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-4 mt-10">
      <p className="text-sm" dir="rtl">
        جميع الحقوق محفوظة لشركة{" "}
        <span dir="ltr" className="inline-block">
          NOIR Store 
        </span>
        <span dir="ltr" className="inline-block">
           2025  ©{" "}
        </span>
      </p>
      <div className="flex justify-end gap-2 p-4">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            ⚙️ تسجيل الدخول
          </button>
        </Link>
      </div>
    </footer>
  );
}
