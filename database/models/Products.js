import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    image_url: { type: String, required: true },
    image_urls: { type: [String], required: true },
    discount: { type: Number, required: true },
  },
  { timestamps: true }
);
const Products =
  mongoose.models.Products || mongoose.model("Products", ProductsSchema);
export default Products;
