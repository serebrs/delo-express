export default function (sequelize, Sequelize) {
  const Doctype = sequelize.define("doctype", {
    text: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    hint_text: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    icon_name: {
      type: Sequelize.STRING,
      defaultValue: "DocumentIcon",
    },
  });
  return Doctype;
}
