import { Router } from "express";
import { checkSchema } from "express-validator";
import { doctypesValidator } from "../validators/doctypes.js";
import { findAll } from "../controllers/doctypes.js";

const router = Router();

router.get("/api/doctypes", findAll);

export default router;
