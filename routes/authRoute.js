import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSign } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//Register Route
router.post("/register", registerController);

//login
router.post("/login", loginController);

//test
router.get("/test", requireSign, isAdmin, testController);

export default router;
