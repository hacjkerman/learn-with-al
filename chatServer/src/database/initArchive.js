import { DataTypes } from "sequelize";
export function initialiseArchiveModel(sequelize) {
  const Archive = sequelize.define("archive", {
    subTopics: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: { notEmpty: true },
    },
    expiredAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });

  Archive.sync().then(() => {
    console.log("Archive Model synced");
  });

  return Archive;
}
