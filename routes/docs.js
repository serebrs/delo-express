import { Router } from "express";
import { getAllDocs, addDoc } from "../controllers/docs.js";

const router = Router();

router.get("/api/docs", getAllDocs);
router.put("/api/docs/add", addDoc);

export default router;
