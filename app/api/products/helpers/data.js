import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "data.json");

// قراءة البيانات
export async function readData() {
  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return { products: [] };
  }
}

// حفظ البيانات
export async function saveData(data) {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save data:", err);
  }
}
