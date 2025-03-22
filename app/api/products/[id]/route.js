import { connectDb } from "../../../../database/connectDB";
import Products from "../../../../database/models/Products";

export const GET = async (req, { params }) => {
  try {
    const { id } = await params;
    await connectDb();

    const product = await Products.findOne({ id });

    if (!product) {
      return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json({ message: "success", product });
  } catch (error) {
    console.error("Error:", error.message);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
