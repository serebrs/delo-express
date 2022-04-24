import { Router } from "express";
import { getAllDocs, addDoc, deleteDoc, viewDoc } from "../controllers/docs.js";

const router = Router();

router.get("/api/docs", getAllDocs);
router.put("/api/docs/add", addDoc);
router.delete("/api/docs/:id", deleteDoc)
      .get("/api/docs/:id", viewDoc);

export default router;
