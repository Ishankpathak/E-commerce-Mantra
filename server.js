import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/CategoryRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

//config env
dotenv.config();

//databse connect
connectDB();

//Esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest obj
const app = express();

//middlware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // to see api request in console
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  //localhost : 8080
  res.send("<h1>Welcome to Mern - Ecom app</h1>");
});

app.use(
  express.static(
    path.dirname(new URL(import.meta.url).pathname) + "/client/build"
  )
);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
