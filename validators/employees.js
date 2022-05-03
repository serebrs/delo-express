export const employeesValidator = {
  fio: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: "Это поле должно быть не короче 3 символов",
      options: { min: 3 },
    },
    // matches: /[а-яА-ЯёЁa-zA-Z0-9!@()"".,\-?:;]+$/, // FIXME
  },
  active: {
  },
};
