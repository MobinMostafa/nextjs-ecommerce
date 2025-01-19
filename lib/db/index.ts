import mongoose from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cashed = (global as any).mongoose || { conn: null, promise: null };


export const connectToDatabase = async (
    mongooseUrl = process.env.MONGODB_URI
) => {
   if (cashed.conn) return cashed.conn;

   if (!mongooseUrl) throw new Error('MONGODB_URI is missing');

   cashed.promise = cashed.promise || mongoose.connect(mongooseUrl);

   cashed.conn = await cashed.promise;

   return cashed.conn
};
