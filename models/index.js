import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import Doc from "./doc.model.js"
import Doctype from "./doctype.model.js"

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
db.doctype = Doctype(sequelize, Sequelize);
db.doctype.hasMany(db.doc);
db.doc.belongsTo(db.doctype);


export default db;
