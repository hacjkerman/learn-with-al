import { DataTypes } from "sequelize";

export function initialiseTopicModel(sequelize) {
  const Topic = sequelize.define("topic", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: true },
    },
    subTopics: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
      validate: { notEmpty: true },
    },
    prevSubTopics: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Topic.sync().then(() => {
    console.log("Topic Model synced");
  });

  return Topic;
}
