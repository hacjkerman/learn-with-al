import { DataTypes } from "sequelize";
export function initialiseSubtopicsModel(sequelize) {
  const Subtopics = sequelize.define("subtopics", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: true },
    },
    topic: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: true },
    },
    questions: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: { notEmpty: true },
    },
    prevQuestions: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });

  Subtopics.sync().then(() => {
    console.log("Subtopics Model synced");
  });

  return Subtopics;
}
