import { Sequelize } from "sequelize";
// import { initialiseUserModel } from "./initUser.js";
import { initialiseArchiveModel } from "./initArchive.js";
import { initialiseTopicModel } from "./initTopic.js";
import { initialiseSubtopicsModel } from "./initSubTopic.js";
// import { initialiseQuestionsModel } from "./initQuestion.js";
import generateQuestion from "../questions/generateQuestion.js";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("postgres", "postgres", "postgres", {
  host: "db",
  dialect:
    "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

// const User = initialiseUserModel(sequelize, DataTypes);
const Archived = initialiseArchiveModel(sequelize);
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
        console.log("1");
        const questions = await generateQuestion(subtopic);
        const storedSubtopic = await Subtopics.create({
          name: subtopic,
          questions: questions,
          expiresAt: year,
        });
      })
    );
    const allSubTopics = await Subtopics.findAll();
    const storedTopic = await Topic.create({
      name: topic,
      subTopics: allSubTopics,
      prevSubTopics: null,
      expiresAt: null,
    });
    console.log("this is where im looking at");
    console.log(storedTopic);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
