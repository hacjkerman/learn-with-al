import { sequelize } from "./pginit.js";
import { initialiseTopicModel } from "./initTopic.js";

const Topic = initialiseTopicModel(sequelize);
// const User = initialiseUserModel(sequelize, DataTypes);
export default async function getTopics() {
  try {
    await sequelize.authenticate();
    const topics = await Topic.findAll();
    console.log(topics);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
