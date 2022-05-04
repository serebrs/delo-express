import path from "path";
import fs from "fs";
import { validationResult } from "express-validator";
import db from "../models/index.js";
const Op = db.Sequelize.Op;
const Doc = db.doc;
const Doctype = db.doctype;
const Employee = db.employee;

let data = [
  {
    id: 1,
    doctypeId: 1,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-15",
    title:
      "Oppappa Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician",
    person: ["J. Cooper", "Васильев В.В."],
    file: "file-.pdf",
  },
  {
    id: 2,
    doctypeId: 2,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-16",
    title: "Using bind mounts is very common for local development setups",
    person: ["Иванов И.И."],
    file: "file.zip",
  },
  {
    id: 3,
    doctypeId: 3,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-17",
    title:
      "The advantage is that the dev machine does not need to have all of the build tools and environments installed",
    person: ["Александров А.А."],
    file: "file01.pdf",
  },
  {
    id: 4,
    doctypeId: 4,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-19",
    title:
      "To run our container to support a development workflow, we will do the following",
    person: ["J. Cooper", "Сидоров С.С."],
    file: "file02.pdf",
  },
  {
    id: 5,
    doctypeId: 5,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-12-05",
    title: "Install all dependencies, including the dev dependencies",
    person: ["J. Cooper"],
    file: "file03.pdf",
  },
  {
    id: 6,
    doctypeId: 6,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-15",
    title:
      "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician",
    person: ["J. Cooper", "Васильев В.В."],
    file: "file04.pdf",
  },
  {
    id: 7,
    doctypeId: 1,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-16",
    title: "Using bind mounts is very common for local development setups",
    person: ["Иванов И.И."],
    file: "file05.pdf",
  },
  {
    id: 8,
    doctypeId: 2,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-17",
    title:
      "The advantage is that the dev machine does not need to have all of the build tools and environments installed",
    person: ["Александров А.А."],
    file: "file06.pdf",
  },
  {
    id: 9,
    doctypeId: 3,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-19",
    title:
      "To run our container to support a development workflow, we will do the following",
    person: ["J. Cooper", "Сидоров С.С."],
    file: "file07.pdf",
  },
  {
    id: 10,
    doctypeId: 4,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-12-05",
    title: "Install all dependencies, including the dev dependencies",
    person: ["J. Cooper"],
    file: "file08.pdf",
  },
  {
    id: 11,
    doctypeId: 5,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-15",
    title:
      "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician",
    person: ["J. Cooper", "Васильев В.В."],
    file: "file09.pdf",
  },
  {
    id: 12,
    doctypeId: 6,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-16",
    title: "Using bind mounts is very common for local development setups",
    person: ["Иванов И.И."],
    file: "file10.pdf",
  },
  {
    id: 13,
    doctypeId: 1,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-17",
    title:
      "The advantage is that the dev machine does not need to have all of the build tools and environments installed",
    person: ["Александров А.А."],
    file: "file11.pdf",
  },
  {
    id: 14,
    doctypeId: 2,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-11-19",
    title:
      "To run our container to support a development workflow, we will do the following",
    person: ["J. Cooper", "Сидоров С.С."],
    file: "file12.pdf",
  },
  {
    id: 15,
    doctypeId: 3,
    num: `${Math.floor(Math.random() * 10000)}`,
    date: "2021-12-05",
    title: "Install all dependencies, including the dev dependencies",
    person: ["J. Cooper"],
    file: "file13.pdf",
  },
];

let doctypes = [
  { id: 1, text: "Входящий", hintText: "Входящий", iconName: "InboxInIcon" },
  {
    id: 2,
    text: "Исходящий",
    hintText: "Исходящий",
    iconName: "ExternalLinkIcon",
  },
  {
    id: 3,
    text: "Норм. акт",
    hintText: "Нормативный",
    iconName: "DocumentTextIcon",
  },
  {
    id: 4,
    text: "Договор",
    hintText: "Договор",
    iconName: "DocumentDuplicateIcon",
  },
  {
    id: 5,
    text: "Конкурсная",
    hintText: "Конкурсная",
    iconName: "DocumentDuplicateIcon",
  },
  { id: 6, text: "Иной", hintText: "Иной", iconName: "DocumentIcon" },
];

let persons = [
  { fio: "Иванов И.И." },
  { fio: "Сидоров С.С." },
  { fio: "Васильев В.В." },
  { fio: "Александров А.А." },
];

let employee_docs = [
  { docId: 1, employeeId: 2 },
  { docId: 1, employeeId: 3 },
  { docId: 2, employeeId: 1 },
  { docId: 2, employeeId: 2 },
  { docId: 2, employeeId: 4 },
  { docId: 3, employeeId: 4 },
  { docId: 4, employeeId: 1 },
  { docId: 5, employeeId: 2 },
  { docId: 6, employeeId: 4 },
  { docId: 7, employeeId: 3 },
  { docId: 8, employeeId: 4 },
  { docId: 9, employeeId: 2 },
  { docId: 10, employeeId: 4 },
  { docId: 11, employeeId: 1 },
  { docId: 12, employeeId: 1 },
  { docId: 13, employeeId: 2 },
  { docId: 14, employeeId: 4 },
  { docId: 15, employeeId: 2 },
];

export const findAll = async (req, res) => {
  try {
    const docs = await Doc.findAll({
      include: [
        {
          model: Doctype,
          attributes: ["hintText", "iconName"],
        },
        {
          model: Employee,
          attributes: ["fio"],
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).json(docs);
  } catch (e) {
    res.status(400).end();
  }
};

export const create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newDocData = {
    num: req.body.num,
    date: req.body.date,
    title: req.body.title,
    file: req.file.filename,
  };
  let newEmployees = [];

  try {
    for (let em of req.body.employees) {
      let employee = await Employee.findByPk(+em);
      if (employee) newEmployees.push(employee);
    }

    // TODO сделать транзацкию
    const doctype = await Doctype.findByPk(req.body.doctypeId);
    if (doctype) {
      const newDoc = await doctype.createDoc(newDocData);
      newDoc.setEmployees(newEmployees);
      // newDoc.setEmployees(req.body.employees);
      res.status(201).json({});
    } else res.status(400).end();
  } catch (e) {
    res.status(400).end();
  }
};

export const destroy = async (req, res) => {
  try {
    await Doc.destroy({ where: { id: +req.params.id } });
    res.status(200).json({ message: "Документ успешно удален" });
  } catch (e) {
    res.status(400).end();
  }
};

export const update = async (req, res) => {
  // let file;
  // const idx = data.findIndex((r) => r.id === +req.params.id);
  // if (~idx) {
  //   // != -1
  //   if (req.file) file = req.file.filename;
  //   else file = data[idx].file;
  //   data[idx] = { ...req.body, id: +req.params.id, file };
  //   res.status(200).json({ message: "Документ успешно изменен" });
  // } else res.status(404).end();

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {// TODO сделать транзакцию
    const doctype = await Doctype.findByPk(+req.body.doctypeId);
    if (!doctype) throw new Error();
    const doc = await Doc.findByPk(+req.params.id);
    if (!doc) throw new Error();

    if (req.file) doc.file = req.file.filename;
    doc.num = req.body.num;
    doc.date = req.body.date;
    doc.title = req.body.title;
    //doc.doctypeId = req.body.doctypeId;
    await doc.setDoctype(doctype);
    
    let newEmployees = [];
    for (let em of req.body.employees) {
      let employee = await Employee.findByPk(+em);
      if (employee) newEmployees.push(employee);
    }
    await doc.setEmployees(newEmployees);
    await doc.save();
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).end();
  }
};

export const download = async (req, res) => {
  try {
    const doc = await Doc.findByPk(+req.params.id, { attributes: ["file"] });
    if (doc) {
      const docPath = path.resolve("uploads/", doc.file);
      if (fs.existsSync(docPath)) {
        if (path.extname(doc.file) === ".pdf") {
          res.status(200).sendFile(docPath);
        } else res.status(200).download(docPath);
      } else res.status(404).end();
    } else res.status(404).end();
  } catch (e) {
    res.status(400).end();
  }
};

export const view = async (req, res) => {
  try {
    const doc = await Doc.findByPk(+req.params.id, {
      include: [
        {
          model: Employee,
          attributes: ["id"],
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).json(doc);
  } catch (e) {
    res.status(404).end();
  }
};

export const seed = async (req, res) => {
  try {
    await Doctype.bulkCreate(doctypes, {
      fields: ["text", "hintText", "iconName"],
    });

    await Doc.bulkCreate(data, {
      fields: ["num", "title", "date", "file", "doctypeId"],
    });

    await Employee.bulkCreate(persons, {
      fields: ["fio"],
    });

    res.status(200).json({ message: "Ok" });
  } catch (e) {
    res.status(500).end();
  }
};
