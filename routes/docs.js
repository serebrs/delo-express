import multer from "multer";
import { Router } from "express";
import { checkSchema, param } from "express-validator";
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

router.get(
  "/api/docs/:id",
  param("id")
    .isInt({ min: 1 })
    .withMessage("Параметр должен быть числом")
    .toInt(),
  view
);

router.get(
  "/api/docs/:id/download",
  param("id")
    .isInt({ min: 1 })
    .withMessage("Параметр должен быть числом")
    .toInt(),
  download
);

router.delete(
  "/api/docs/:id",
  param("id")
    .isInt({ min: 1 })
    .withMessage("Параметр должен быть числом")
    .toInt(),
  destroy
);

router.post(
  "/api/docs",
  upload.single("file"),
  checkSchema(docsValidator),
  create
);

router.put(
  "/api/docs/:id",
  upload.single("file"),
  param("id")
    .isInt({ min: 1 })
    .withMessage("Параметр должен быть числом")
    .toInt(),
  checkSchema(docsValidator),
  update
);

export default router;
