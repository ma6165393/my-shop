import { NextResponse } from "next/server";
import { readData, saveData } from "./data.js";

export async function DELETE(request) {
  try {
    const body = await request.json();
    const data = await readData();

    const { category, id } = body;
    if (!category || typeof id === "undefined") return NextResponse.json({ error: "category and id required" }, { status: 400 });

    const categoryObj = data.products.find(c => c.category === category);
    if (!categoryObj) return NextResponse.json({ error: "الفئة غير موجودة" }, { status: 400 });

    categoryObj.items = categoryObj.items.filter(it => it.id !== id);
    await saveData(data);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
