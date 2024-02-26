import { DataTypes } from "sequelize";
export function initialiseArchiveModel(sequelize) {
  const ArchivedQuestions = sequelize.define("archivedQuestions", {
    subTopic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    questions: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: { notEmpty: true },
    },
    expiredAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });

  ArchivedQuestions.sync().then(() => {
    console.log("Archived Questions Model synced");
  });

  return ArchivedQuestions;
}
