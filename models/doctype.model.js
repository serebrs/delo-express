export default function (sequelize, Sequelize) {
  const Doctype = sequelize.define("Doctype", {
    text: {
      type: Sequelize.STRING,
    },
    hint_text: {
      type: Sequelize.STRING,
    },
    icon_name: {
      type: Sequelize.STRING,
      defaultValue: "DocumentIcon",
    },
  });
  return Doctype;
}
