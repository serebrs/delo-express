import { Router } from "express";
import { checkSchema } from "express-validator";
import { employeesValidator } from "../validators/employees.js";
import { findAll } from "../controllers/employees.js";

const router = Router();

router.get("/api/employees", findAll);

export default router;
