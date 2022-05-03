import multer from "multer";
import { Router } from "express";
import { checkSchema } from "express-validator";
import { docsValidator } from "../validators/docs.js";
import {
  findAll,
  create,
  deleteDoc,
  detailDoc,
  downloadDoc,
  changeDoc,
  seed,
  dropAll,
} from "../controllers/docs.js";

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

router.get("/api/docs", findAll);
router.get("/api/docs/seed", seed);
router.get("/api/docs/drop", dropAll);
router.get("/api/docs/:id", detailDoc);
router.get("/api/docs/:id/download", downloadDoc);
router.delete("/api/docs/:id", deleteDoc);
router.post(
  "/api/docs",
  upload.single("file"),
  checkSchema(docsValidator),
  create
);
router.put(
  "/api/docs/:id",
  upload.single("file"),
  checkSchema(docsValidator),
  changeDoc
);

export default router;
