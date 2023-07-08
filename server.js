import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

//config env
dotenv.config();

//databse connect
connectDB();

//rest obj
const app = express();

//middlware
app.use(express.json());
app.use(morgan("dev")); // to see api request in console

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  //localhost : 8080
  res.send("<h1>Welcome to Mern - Ecom app</h1>");
});

const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
