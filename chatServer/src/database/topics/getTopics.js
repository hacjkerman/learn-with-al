import { sequelize } from "../initialise/pginit.js";
import { initialiseTopicModel } from "../initialise/initTopic.js";

const Topic = initialiseTopicModel(sequelize);
// const User = initialiseUserModel(sequelize, DataTypes);
export default async function getDBTopics() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const topics = await Topic.findAll();
    if (!topics || topics.length === 0) {
      return null;
    } else {
      return topics;
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
