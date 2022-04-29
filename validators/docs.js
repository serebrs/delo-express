export const docsValidator = {
  type: {
    isInt: {
      errorMessage: "Это поле должно быть числовым",
      options: { min: 0, max: 20 },
    },
    toInt: true,
  },
  title: {
    isLength: {
      errorMessage: "Это поле должно быть не короче 5 символов",
      options: { min: 5 },
    },
    escape: true,
    trim: true,
  },
  num: {
    isLength: {
      errorMessage: "Это поле должно быть не короче 1 символа",
      options: { min: 1 },
    },
    escape: true,
    trim: true,
  },
  date: {
    isDate: {
      errorMessage: "Это поле должно быть в формате YYYY-MM-DD",
      options: { format: "YYYY-MM-DD" },
    },
    toDate: true,
  },
  person: {},
  file: {
    isLength: {
      errorMessage: "Это поле должно быть не короче 1 символа",
      options: { min: 1 },
    },
    escape: true,
    trim: true,
  },
};
