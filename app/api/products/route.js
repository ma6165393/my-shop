import { GET as getProducts } from "././././helpers/getProducts.js";
import { POST as addProduct } from "././././helpers/addProduct.js";
import { PUT as updateProduct } from "././././helpers/updateProduct.js";
import { DELETE as deleteProduct } from "././././helpers/deleteProduct.js";


export async function GET(request) {
  return getProducts();
}

export async function POST(request) {
  return addProduct(request);
}

export async function PUT(request) {
  return updateProduct(request);
}

export async function DELETE(request) {
  return deleteProduct(request);
}
