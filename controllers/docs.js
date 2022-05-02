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
  { id: 1, text: "Входящий", hint_text: "Входящий", icon_name: "InboxInIcon" },
  {
    id: 2,
    text: "Исходящий",
    hint_text: "Исходящий",
    icon_name: "ExternalLinkIcon",
  },
  {
    id: 3,
    text: "Норм. акт",
    hint_text: "Нормативный",
    icon_name: "DocumentTextIcon",
  },
  {
    id: 4,
    text: "Договор",
    hint_text: "Договор",
    icon_name: "DocumentDuplicateIcon",
  },
  {
    id: 5,
    text: "Конкурсная",
    hint_text: "Конкурсная",
    icon_name: "DocumentDuplicateIcon",
  },
  { id: 6, text: "Иной", hint_text: "Иной", icon_name: "DocumentIcon" },
];

let persons = [
  { fio: "Иванов И.И." },
  { fio: "Сидоров С.С." },
  { fio: "Васильев В.В." },
  { fio: "Александров А.А." },
];

export const getAllDocs = (req, res) => {
  if (data) res.status(200).json(data);
  else res.status(404).end();
};

export const addDoc = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const newDoc = {
    id: Date.now(),
    ...req.body,
    file: req.file.filename,
  };
  data.push(newDoc);
  res.status(201).json(newDoc);
};

export const deleteDoc = (req, res) => {
  data = data.filter((r) => r.id !== +req.params.id);
  if (data) res.status(200).json({ message: "Документ успешно удален" });
  else res.status(404).end();
};

export const changeDoc = (req, res) => {
  let file;
  const idx = data.findIndex((r) => r.id === +req.params.id);
  if (~idx) {
    // != -1
    if (req.file) file = req.file.filename;
    else file = data[idx].file;
    data[idx] = { ...req.body, id: +req.params.id, file };
    res.status(200).json({ message: "Документ успешно изменен" });
  } else res.status(404).end();
};

export const downloadDoc = (req, res) => {
  const doc = data.find((r) => r.id === +req.params.id);
  if (doc) {
    const docPath = path.resolve("uploads/", doc.file);
    if (fs.existsSync(docPath)) {
      if (path.extname(doc.file) === ".pdf") {
        res.status(200).sendFile(docPath);
      } else res.status(200).download(docPath);
    } else res.status(404).end();
  } else res.status(404).end();
};

export const detailDoc = (req, res) => {
  const doc = data.find((r) => r.id === +req.params.id);
  if (doc) {
    res.status(200).json(doc);
  } else res.status(404).end();
};

//
//
//

export const seedDocs = async (req, res) => {
  try {
    await Doctype.bulkCreate(doctypes, {
      fields: ["text", "hint_text", "icon_name"],
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

export const dropDocs = async (req, res) => {
  try {
    await Doc.destroy({
      truncate: true,
    });
    await Doctype.destroy({
      truncate: true,
    });
    await Employee.destroy({
      truncate: true,
    });
    res.status(200).json({ message: "Ok" });
  } catch (e) {
    res.status(500).end();
  }
};
