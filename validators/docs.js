export const docsValidator = {
  type: {
    isInt: {
      errorMessage: "Это поле должно быть числовым",
      options: { min: 0, max: 20 },
    },
    toInt: true,
  },
  title: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: "Это поле должно быть не короче 5 символов",
      options: { min: 5 },
    },
    // matches: /[а-яА-ЯёЁa-zA-Z0-9!@()"".,\-?:;]+$/, // FIXME
  },
  num: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: "Это поле должно быть не короче 1 символа",
      options: { min: 1 },
    },
  },
  date: {
    isDate: {
      errorMessage: "Это поле должно быть в формате YYYY-MM-DD",
      options: { format: "YYYY-MM-DD" },
    },
    // toDate: true,
  },
  person: {},
};
