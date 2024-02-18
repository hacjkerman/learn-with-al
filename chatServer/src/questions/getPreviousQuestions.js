import { sequelize } from "../database/pginit.js";
import { initialiseSubtopicsModel } from "../database/initSubTopic.js";
import { Op } from "sequelize";
export default async function getPreviousQuestions(topic, subtopic) {
  // QUERY GET PREVIOUS QUESTIONS FOR GIVEN TOPIC IN DB

  const Subtopic = initialiseSubtopicsModel(sequelize);
  // const User = initialiseUserModel(sequelize, DataTypes);
  try {
    await sequelize.authenticate();
    const subtopics = await Subtopic.findAll({
      where: {
        [Op.and]: [{ topic: topic }, { name: subtopic }],
      },
    });
    console.log("Connection has been established successfully.");
    return subtopics[0].dataValues.questions;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

const prevQuestions = await getPreviousQuestions(
  "Psychology",
  "Developmental Psychology"
);
