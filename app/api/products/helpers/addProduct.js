import { NextResponse } from "next/server";
import { readData, saveData } from "./data.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const data = await readData();

    const { category, name, price, oldPrice, currency = "ر.س", url, image, available = true, "Shipping-price": shipping = "0" } = body;

    const categoryIndex = data.products.findIndex(c => c.category === category);
    if (categoryIndex === -1) return NextResponse.json({ error: "الفئة غير موجودة" }, { status: 400 });

    const newProduct = { id: Date.now(), name, price, oldPrice, currency, "Shipping-price": shipping, image, url, available };
    data.products[categoryIndex].items.push(newProduct);
    await saveData(data);

    return NextResponse.json({ product: { ...newProduct, category } });
  } catch (err) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
