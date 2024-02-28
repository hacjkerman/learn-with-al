import storeDBTopics from "./topics/storeTopics.js";
import storeDBSubTopics from "./subtopics/storeSubTopics.js";
import { initialiseSubtopicsModel } from "./initialise/initSubTopic.js";
import { initialiseTopicModel } from "./initialise/initTopic.js";
import { initialiseArchiveQuestionModel } from "./initialise/initArchiveQuestion.js";
import { initialiseArchiveSubtopicModel } from "./initialise/initArchiveSubTopic.js";
import { sequelize } from "./initialise/pginit.js";

// const User = initialiseUserModel(sequelize, DataTypes);
const ArchivedSubTopics = initialiseArchiveSubtopicModel(sequelize);
const Topic = initialiseTopicModel(sequelize);
const ArchivedQuestions = initialiseArchiveQuestionModel(sequelize);
const SubtopicsInit = initialiseSubtopicsModel(sequelize);

export default async function storeInDB(topic, subtopics) {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const week = new Date();
    week.setDate(week.getDate() + 1 * 7);
    const year = new Date();
    year.setDate(year.getDate() + 52 * 7);
    const storedSubTopics = await storeDBSubTopics(
      topic,
      subtopics,
      year,
      SubtopicsInit,
      ArchivedQuestions
    );
    await storeDBTopics(topic, subtopics, year, Topic, ArchivedSubTopics);
    return storedSubTopics;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
