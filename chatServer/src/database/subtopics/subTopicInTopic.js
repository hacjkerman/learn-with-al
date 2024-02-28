import { sequelize } from "../initialise/pginit.js";
import { initialiseSubtopicsModel } from "../initialise/initSubTopic.js";

const Subtopic = initialiseSubtopicsModel(sequelize);
// const User = initialiseUserModel(sequelize, DataTypes);
export default async function subTopicInDB(topic, subtopic) {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const result = await Subtopic.findAll({
      where: { topic: topic, name: subtopic },
    });
    if (result.length === 0) {
      return undefined;
    } else {
      return result;
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
