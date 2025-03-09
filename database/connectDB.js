import mongoose from "mongoose";

let db;
export const connectDb = async () => {
  try {
    if (db) {
      return db;
    }
    db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log(error);
  }
};
