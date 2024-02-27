import { sequelize } from "./pginit.js";
import { initialiseTopicModel } from "./initialise/initTopic.js";

const Topic = initialiseTopicModel(sequelize);
// const User = initialiseUserModel(sequelize, DataTypes);
export default async function topicInTopic(topic) {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const result = await Topic.findAll({
      where: { name: topic },
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
