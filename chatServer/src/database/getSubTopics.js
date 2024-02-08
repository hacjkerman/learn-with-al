import { sequelize } from "./pginit.js";
import { initialiseSubtopicsModel } from "./initSubTopic.js";

const Subtopic = initialiseSubtopicsModel(sequelize);
// const User = initialiseUserModel(sequelize, DataTypes);
export default async function getSubTopics() {
  try {
    await sequelize.authenticate();
    const subtopics = await Subtopic.findAll();
    console.log(subtopics);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
