import { NextResponse } from "next/server";
import { readData, saveData } from "./data.js";

export async function PUT(request) {
  try {
    const body = await request.json();
    const data = await readData();

    const { category, id, ...updates } = body;
    if (!category || typeof id === "undefined") return NextResponse.json({ error: "category and id required" }, { status: 400 });

    const categoryObj = data.products.find(c => c.category === category);
    if (!categoryObj) return NextResponse.json({ error: "الفئة غير موجودة" }, { status: 400 });

    const idx = categoryObj.items.findIndex(it => it.id === id);
    if (idx === -1) return NextResponse.json({ error: "المنتج غير موجود" }, { status: 404 });

    categoryObj.items[idx] = { ...categoryObj.items[idx], ...updates };
    await saveData(data);

    return NextResponse.json({ product: categoryObj.items[idx] });
  } catch (err) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
