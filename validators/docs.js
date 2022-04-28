export const docsValidator = {
  type: {
    // in: ["body"],
    errorMessage: "Поле 'Тип' должно быть числовым",
    isInt: true,
    toInt: true,
  },
  title: {
    isLength: {
      errorMessage: "Поле 'Название' должно быть длиной как минимум 7 символов",
      options: { min: 7 },
    },
  },
  num: {},
  date: {
    errorMessage: "Поле 'Дата' должно быть в формате YYYY-MM-DD",
    
  },
  person: {},
};
