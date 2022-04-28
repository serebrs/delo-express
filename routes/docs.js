import { Router } from "express";
import { checkSchema } from "express-validator";
import { getAllDocs, addDoc, deleteDoc, viewDoc } from "../controllers/docs.js";
import { docsValidator } from "../validators/docs.js";

const router = Router();

router.get("/api/docs", getAllDocs);
router.post("/api/docs", checkSchema(docsValidator), addDoc);
router.delete("/api/docs/:id", deleteDoc);
router.get("/api/docs/:id", viewDoc);

export default router;
