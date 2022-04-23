const data = [
  {
    id: "1",
    type: 1,
    num: Math.floor(Math.random() * 10000),
    date: "15.11.2021",
    title:
      "Oppappa Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician",
    person: ["J. Cooper", "Васильев В.В."],
  },
  {
    id: "2",
    type: 2,
    num: Math.floor(Math.random() * 10000),
    date: "16.11.2021",
    title: "Using bind mounts is very common for local development setups",
    person: ["Иванов И.И."],
  },
  {
    id: "3",
    type: 3,
    num: Math.floor(Math.random() * 10000),
    date: "17.11.2021",
    title:
      "The advantage is that the dev machine does not need to have all of the build tools and environments installed",
    person: ["Александров А.А."],
  },
  {
    id: "4",
    type: 4,
    num: Math.floor(Math.random() * 10000),
    date: "19.11.2021",
    title:
      "To run our container to support a development workflow, we will do the following",
    person: ["J. Cooper", "Сидоров С.С."],
  },
  {
    id: "5",
    type: 5,
    num: Math.floor(Math.random() * 10000),
    date: "05.12.2021",
    title: "Install all dependencies, including the dev dependencies",
    person: ["J. Cooper"],
  },
  {
    id: "6",
    type: 6,
    num: Math.floor(Math.random() * 10000),
    date: "15.11.2021",
    title:
      "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician",
    person: ["J. Cooper", "Васильев В.В."],
  },
  {
    id: "7",
    type: 1,
    num: Math.floor(Math.random() * 10000),
    date: "16.11.2021",
    title: "Using bind mounts is very common for local development setups",
    person: ["Иванов И.И."],
  },
  {
    id: "8",
    type: 2,
    num: Math.floor(Math.random() * 10000),
    date: "17.11.2021",
    title:
      "The advantage is that the dev machine does not need to have all of the build tools and environments installed",
    person: ["Александров А.А."],
  },
  {
    id: "9",
    type: 3,
    num: Math.floor(Math.random() * 10000),
    date: "19.11.2021",
    title:
      "To run our container to support a development workflow, we will do the following",
    person: ["J. Cooper", "Сидоров С.С."],
  },
  {
    id: "10",
    type: 4,
    num: Math.floor(Math.random() * 10000),
    date: "05.12.2021",
    title: "Install all dependencies, including the dev dependencies",
    person: ["J. Cooper"],
  },
  {
    id: "11",
    type: 5,
    num: Math.floor(Math.random() * 10000),
    date: "15.11.2021",
    title:
      "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician",
    person: ["J. Cooper", "Васильев В.В."],
  },
  {
    id: "12",
    type: 6,
    num: Math.floor(Math.random() * 10000),
    date: "16.11.2021",
    title: "Using bind mounts is very common for local development setups",
    person: ["Иванов И.И."],
  },
  {
    id: "13",
    type: 1,
    num: Math.floor(Math.random() * 10000),
    date: "17.11.2021",
    title:
      "The advantage is that the dev machine does not need to have all of the build tools and environments installed",
    person: ["Александров А.А."],
  },
  {
    id: "14",
    type: 2,
    num: Math.floor(Math.random() * 10000),
    date: "19.11.2021",
    title:
      "To run our container to support a development workflow, we will do the following",
    person: ["J. Cooper", "Сидоров С.С."],
  },
  {
    id: "15",
    type: 3,
    num: Math.floor(Math.random() * 10000),
    date: "05.12.2021",
    title: "Install all dependencies, including the dev dependencies",
    person: ["J. Cooper"],
  },
];

export const getAllDocs = (req, res) => {
  res.status(200).json(data);
};

export const addDoc = (req, res) => {
  const newDoc = {
    id: Date.now(),
    ...req.body
  };
  data.push(newDoc);
  res.status(201).json(newDoc);
};
