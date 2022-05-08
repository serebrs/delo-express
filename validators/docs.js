export const docsValidator = {
  doctypeId: {
    isInt: {
      options: { min: 0, max: 20 },
      errorMessage: "Это поле должно быть числовым",
    },
    toInt: true,
  },
  title: {
    trim: true,
    isLength: {
      options: { min: 5 },
      errorMessage: "Это поле должно быть не короче 5 символов",
    },
    matches: {
      options: /^[а-яА-ЯёЁa-zA-Z0-9 №!?@()"'.,/:;-]+$/i,
      errorMessage: "Это поле должно быть буквенно-числовым",
    },
  },
  num: {
    trim: true,
    isLength: {
      options: { min: 1 },
      errorMessage: "Это поле должно быть не короче 1 символа",
    },
    matches: {
      options: /^[а-яА-ЯёЁa-zA-Z0-9 №()/-]+$/i,
      errorMessage: "Это поле должно быть буквенно-числовым",
    },    
  },
  date: {
    isDate: {
      options: { format: "YYYY-MM-DD" },
      errorMessage: "Это поле должно быть в формате YYYY-MM-DD",
    },
  },
};
