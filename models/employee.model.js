export default function (sequelize, Sequelize) {
  const Employee = sequelize.define("employee", {
    fio: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
  return Employee;
}
