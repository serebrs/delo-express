import db from "../models/index.js";
const Op = db.Sequelize.Op;
const Employee = db.employee;

export const findAll = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (e) {
    res.status(500).end();
  }
};
