import db from "../models/index.js";
const Op = db.Sequelize.Op;
const Doctype = db.doctype;

export const findAll = async (req, res) => {
  try {
    const doctypes = await Doctype.findAll();
    res.status(200).json(doctypes);
  } catch (e) {
    res.status(500).end();
  }
};
