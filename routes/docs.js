import { Router } from "express";
import { checkSchema } from "express-validator";
import { getAllDocs, addDoc, deleteDoc, viewDoc } from "../controllers/docs.js";
import { docsValidator } from "../validators/docs.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: "./files",
  filename: function (req, file, cb) {
    const uniqueSuffix =
      new Date(Date.now()).toISOString().slice(0, 10) + "-" + Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.get("/api/docs", getAllDocs);
router.post(
  "/api/docs",
  upload.single("file"),
  checkSchema(docsValidator),
  addDoc
);
router.delete("/api/docs/:id", deleteDoc);
router.get("/api/docs/:id", viewDoc);

export default router;
