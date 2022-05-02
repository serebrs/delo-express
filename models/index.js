import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import Doc from "./doc.model.js"

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.doc = Doc(sequelize, Sequelize);

export default db;
