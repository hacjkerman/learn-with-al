import { DataTypes } from "sequelize";
export function initialiseQuestionsModel(sequelize) {
  const Questions = sequelize.define("questions", {
    name: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: { notEmpty: true },
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });

  Questions.sync().then(() => {
    console.log("Questions Model synced");
  });

  return Questions;
}
