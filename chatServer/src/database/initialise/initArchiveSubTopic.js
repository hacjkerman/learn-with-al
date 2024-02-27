import { DataTypes } from "sequelize";
export function initialiseArchiveSubtopicModel(sequelize) {
  const ArchivedSubTopic = sequelize.define("archivedSubTopic", {
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    subTopics: {
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

  ArchivedSubTopic.sync().then(() => {
    console.log("Archived Questions Model synced");
  });

  return ArchivedSubTopic;
}
