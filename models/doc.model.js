export default function (sequelize, Sequelize) {
  const Doc = sequelize.define("doc", {
    num: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /[а-яА-ЯёЁa-zA-Z0-9№()/-]+$/i,
        notEmpty: true,
      },
    },
    date: {
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
      validate: {
        isDate: true,
        notEmpty: true,
      },
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /[а-яА-ЯёЁa-zA-Z0-9№!?@()"'.,/:;-]+$/i,
        notEmpty: true,
      },
    },
    file: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Doc;
}
