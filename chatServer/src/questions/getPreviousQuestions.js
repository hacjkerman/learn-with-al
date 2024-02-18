import { sequelize } from "../database/pginit.js";
import { initialiseSubtopicsModel } from "../database/initSubTopic.js";
import { Op } from "sequelize";
export default async function getPreviousQuestions(topic, subtopic) {
  const Subtopic = initialiseSubtopicsModel(sequelize);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const subtopics = await Subtopic.findAll({
      where: {
        [Op.and]: [{ topic: topic }, { name: subtopic }],
      },
    });
    if (subtopics[0] !== undefined) {
      return subtopics[0].dataValues.questions;
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
