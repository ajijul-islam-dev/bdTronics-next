import { connectDb } from "../../../database/connectDB";
import Products from "../../../database/models/Products";

export const GET = async () => {
  try {
    await connectDb();
    const result = await Products.find();
    return Response.json({ message: "successfully hitted", products: result });
  } catch (error) {
    return Response.json({ error });
  }
};
