import multer from "multer";
import { Router } from "express";
import { checkSchema } from "express-validator";
import { docsValidator } from "../validators/docs.js";
import { docsFilterValidator } from "../validators/docsFilter.js";
import {
  findAll,
  create,
  destroy,
  view,
  download,
  update,
  seed,
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

router.get("/api/docs", checkSchema(docsFilterValidator), findAll);
router.get("/api/docs/seed", seed);
router.get("/api/docs/:id", view);
router.get("/api/docs/:id/download", download);
router.delete("/api/docs/:id", destroy);
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
  update
);

export default router;
