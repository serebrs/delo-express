export default function (sequelize, Sequelize) {
  const Doctype = sequelize.define("doctype", {
    text: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    hintText: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    iconName: {
      type: Sequelize.STRING,
      defaultValue: "DocumentIcon",
    },
  });
  return Doctype;
}
