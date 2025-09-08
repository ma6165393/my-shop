"use client";

import { useEffect, useState } from "react";
import ProductForm from "../_components/ProductForm";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false); // خاص بإضافة المنتج
  const [editingProduct, setEditingProduct] = useState(null); // خاص بالتعديل

  // جلب المنتجات
  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    const allItems = data.products.flatMap((c) =>
      c.items.map((item) => ({ ...item, category: c.category }))
    );
    setProducts(allItems);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // حفظ (إضافة/تعديل)
  const handleSave = async (product) => {
    const method = editingProduct ? "PUT" : "POST";

    await fetch("/api/products", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    // بعد الحفظ نغلق النموذج ونفرغ الحقول
    setShowAddForm(false);
    setEditingProduct(null);
    fetchProducts();
  };

  // حذف
  const handleDelete = async (product) => {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;

    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: product.category, id: product.id }),
    });

    fetchProducts();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6 font-bold">لوحة التحكم</h1>

      {/* زر toggle لإظهار/إخفاء نموذج إضافة المنتج */}
      <button
        onClick={() => {
          setShowAddForm(!showAddForm);
          setEditingProduct(null); // دايمًا فاضي عند الإضافة
        }}
        className="bg-green-600 text-white px-4 py-2 rounded mb-6"
      >
        ➕ إضافة منتج جديد
      </button>

      {/* نموذج إضافة المنتج */}
      {showAddForm && (
        <div className="mb-6 border p-4 rounded bg-gray-50">
          <ProductForm
            product={null} // دايمًا فارغ عشان الإضافة
            onSave={handleSave}
            onCancel={() => setShowAddForm(false)}
          />
        </div>
      )}

      {/* جدول المنتجات */}
      <h2 className="text-xl mb-4">جميع المنتجات</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={`${product.category}-${product.id}`}
            className="border p-2 rounded shadow-md text-center relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-2 cursor-pointer"
              onClick={() => {
                setEditingProduct(product);
              }}
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">
              {product.price} {product.currency}
            </p>
            <div className="flex justify-center gap-2 mt-2">
              <button
                onClick={() => setEditingProduct(product)}
                className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
              >
                تعديل
              </button>
              <button
                onClick={() => handleDelete(product)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* دايلوج التعديل */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <h2 className="text-xl font-bold mb-4">✏️ تعديل المنتج</h2>
            <ProductForm
              product={editingProduct}
              onSave={handleSave}
              onCancel={() => setEditingProduct(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
