import { sequelize } from "../initialise/pginit.js";
import { initialiseSubtopicsModel } from "../initialise/initSubTopic.js";

const Subtopic = initialiseSubtopicsModel(sequelize);
// const User = initialiseUserModel(sequelize, DataTypes);
export default async function getDBSubTopics(topic) {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const subtopics = await Subtopic.findAll({ where: { topic: topic } });
    if (!subtopics || subtopics.length === 0) {
      return null;
    } else {
      return subtopics;
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
