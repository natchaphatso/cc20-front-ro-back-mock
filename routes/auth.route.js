import express from "express";
//Controllers
import { login, register } from "../controllers/auth.controller.js";
import {
  loginSchema,
  registerSchema,
  validate,
} from "../validations/validator.js";
//Validate with yup

const router = express.Router();

//ENDPOINT http://localhost:8000/auth/register
router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;
