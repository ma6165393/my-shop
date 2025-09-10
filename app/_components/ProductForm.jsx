"use client";
import { useState, useEffect } from "react";

export default function ProductForm({ product, onSave, onCancel }) {
  const [form, setForm] = useState({
    category: "",
    name: "",
    price: "",
    oldPrice: "",
    currency: "ر.س",
    image: "",
    url: "",
    available: true,
  });

  // لو المنتج موجود (تعديل) → نملأ البيانات
  useEffect(() => {
    if (product) {
      setForm(product);
    }
  }, [product]);

  // تحديث القيم
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* اختيار الكاتيجوري */}
      <div>
        <label className="block mb-1 font-semibold">الفئة</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        >
          <option value="">-- اختر الفئة --</option>
          <option value="العناية الشخصية للنساء">العناية الشخصية للنساء</option>
          <option value="العناية الشخصية للرجال">العناية الشخصية للرجال</option>
          <option value="الأجهزه المنزلية">الأجهزه المنزلية</option>
          <option value="مستلزمات السيارات">مستلزمات السيارات</option>
          <option value="العناية الشخصية">العناية الشخصية</option>
          <option value="العطور">العطور</option>
          <option value="إلكترونيات">إلكترونيات</option>
          <option value="ملابس رجالي">ملابس رجالي</option>
          <option value="ملابس حريمي">ملابس حريمي</option>
          <option value="أحذية">أحذية</option>
          <option value="إكسسوارات">إكسسوارات</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">اسم المنتج</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">السعر</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">السعر القديم</label>
        <input
          type="number"
          name="oldPrice"
          value={form.oldPrice}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">رابط الصورة</label>
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">رابط الشراء</label>
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="available"
          checked={form.available}
          onChange={handleChange}
        />
        <label>متوفر</label>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          حفظ
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          إلغاء
        </button>
      </div>
    </form>
  );
}
