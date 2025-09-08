"use client"; // مهم جدًا: لازم يكون في أول السطر

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react';
import './products.css';
import "../globals.css";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md bg-blue-600 p-3 flex flex-row-reverse items-center justify-between rounded-2xl">
      
      {/* شعار + اسم المتجر */}
      <div className="flex items-center gap-2">
        <h1 className="font-roboto-slab text-2xl font-bold tracking-wide text-white">
          NOIR Store
        </h1>
        <Image 
          src="/logo-page.png"
          width={40}
          height={40}
          alt="Drop shipping logo"
          className="filter brightness-0 invert object-contain"
        />
      </div>

      {/* أيقونة التصنيفات للشاشات الصغيرة */}
      <button 
        className="md:hidden text-white mr-2"
        onClick={() => setShowCategories(!showCategories)}
      >
        <LayoutGrid size={28} />
      </button>

      {/* قائمة الروابط */}
<nav className={`flex-col md:flex md:flex-row-reverse gap-4 text-white font-cairo text-right absolute md:static bg-blue-600 md:bg-transparent top-full md:top-auto left-0 w-full md:w-auto p-3 md:p-0 transition-all duration-300 ${showCategories ? "flex" : "hidden md:flex"}`}>
  <Link href="/"><span className="nav-but">الرئيسية</span></Link>
  <Link href="/shipping"><span className="nav-but">ملاحظات الشحن</span></Link>
  <Link href="/return-policy"><span className="nav-but">سياسة الاسترجاع والاستبدال والاستكمال</span></Link>
</nav>



    </header>
  );
};

export default Header;
