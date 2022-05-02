import express from "express";
import cors from "cors";
import "dotenv/config";
import docsRouter from "./routes/docs.js";
import db from "./models/index.js";
// db.sequelize.sync({ force: true });
db.sequelize.sync();

const PORT = process.env.PORT;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

const corsOptions = {
  origin: CORS_ORIGIN,
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Content-Type",
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(docsRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен, порт: ${PORT}`);
});
