export const docsFilterValidator = {
  doctypeId: {
    isInt: {
      options: { min: -1, max: 20 },
      errorMessage: "Это поле должно быть числовым от -1 до 20",
    },
    toInt: true,
  },
  employees: {
    isInt: {
      options: { min: -1, max: 100 },
      errorMessage: "Это поле должно быть числовым от -1 до 100",
    },
    toInt: true,
  },
  title: {
    trim: true,
    matches: { // TODO разобраться с регулярными выражениями
      options: /^[а-яА-ЯёЁa-zA-Z0-9 №-]*$/i,
      errorMessage: "Это поле должно быть буквенно-числовым",
    },
  },
  dateFrom: {
    isDate: {
      options: { format: "YYYY-MM-DD" },
      errorMessage: "Это поле должно быть в формате YYYY-MM-DD",
    },
  },
  dateTo: {
    isDate: {
      options: { format: "YYYY-MM-DD" },
      errorMessage: "Это поле должно быть в формате YYYY-MM-DD",
    },
  },
};
