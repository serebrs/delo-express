import multer from "multer";
import { Router } from "express";
import { checkSchema } from "express-validator";
import { docsValidator } from "../validators/docs.js";
import { getAllDocs, addDoc, deleteDoc, viewDoc, changeDoc } from "../controllers/docs.js";

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix =
      new Date(Date.now()).toISOString().slice(0, 10) + "-" + Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.get("/api/docs", getAllDocs);
router.get("/api/docs/:id", viewDoc);
router.delete("/api/docs/:id", deleteDoc);
router.post(
  "/api/docs",
  upload.single("file"),
  checkSchema(docsValidator),
  addDoc
);
router.put(
  "/api/docs/:id",
  upload.single("file"),
  checkSchema(docsValidator),
  changeDoc
);

export default router;
