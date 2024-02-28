import { sequelize } from "../database/initialise/pginit.js";
import { initialiseTopicModel } from "../database/initialise/initTopic.js";
export default async function getPrevSubTopics(topic) {
  // QUERY GET PREVIOUS QUESTIONS FOR GIVEN TOPIC IN DB
  const Topic = initialiseTopicModel(sequelize);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const result = await Topic.findAll({
      attributes: ["subTopics"],
      where: {
        name: topic,
      },
    });
    if (result[0] !== undefined) {
      const subtopics = result[0].dataValues.subTopics;
      return subtopics;
    }
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}
