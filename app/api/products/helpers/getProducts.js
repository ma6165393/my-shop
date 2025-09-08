import { NextResponse } from "next/server";
import { readData } from "./data.js";

export async function GET() {
  try {
    const data = await readData();
    return NextResponse.json({ products: data.products || [] });
  } catch (err) {
    return NextResponse.json({ products: [] });
  }
}
