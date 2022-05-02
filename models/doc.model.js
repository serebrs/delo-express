export default function (sequelize, Sequelize) {
  const Doc = sequelize.define("Doc", {
    type: {
      type: Sequelize.INTEGER,
    },
    num: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW,
    },
    title: {
      type: Sequelize.STRING,
    },
    file: {
      type: Sequelize.STRING,
    },
  });
  return Doc;
}
