// import { initialiseArchiveModel } from "./initArchive.js";
import { initialiseTopicModel } from "./initialise/initTopic.js";
import { initialiseSubtopicsModel } from "./initialise/initSubTopic.js";
import generateQuestion from "../questions/generateQuestion.js";
import { sequelize } from "./pginit.js";

// const User = initialiseUserModel(sequelize, DataTypes);
// const Archived = initialiseArchiveModel(sequelize);
const Topic = initialiseTopicModel(sequelize);
const Subtopics = initialiseSubtopicsModel(sequelize);
export default async function storeInDB(topic, subtopics) {
  try {
    await sequelize.authenticate();
    const week = new Date();
    week.setDate(week.getDate() + 1 * 7);
    const year = new Date();
    year.setDate(year.getDate() + 52 * 7);
    console.log(week, year);
    await Promise.all(
      subtopics.map(async (subtopic) => {
        const questions = await generateQuestion(topic, subtopic);
        await Subtopics.create({
          name: subtopic,
          topic: topic,
          questions: questions,
          expiresAt: year,
        });
      })
    );

    await Topic.create({
      name: topic,
      subTopics: subtopics,
      prevSubTopics: null,
      expiresAt: null,
    });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
