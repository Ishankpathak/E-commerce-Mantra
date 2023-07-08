import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://pathakishank4:ishank@cluster0.osdxdpq.mongodb.net/ecommerce"
    );
    console.log(`Connected to Mongodb ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
