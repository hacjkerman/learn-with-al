import { initialiseArchiveModel } from "./initialise/initArchive.js";
import { initialiseTopicModel } from "./initialise/initTopic.js";
import { initialiseSubtopicsModel } from "./initialise/initSubTopic.js";
import generateQuestion from "../questions/generateQuestion.js";
import { sequelize } from "./pginit.js";
import subTopicInTopic from "./subTopicInTopic.js";

// const User = initialiseUserModel(sequelize, DataTypes);
const ArchivedQuestions = initialiseArchiveModel(sequelize);
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
        const prev = await subTopicInTopic(topic, subtopic);
        // NEW SUBTOPIC
        if (prev.length === 0) {
          await Subtopics.create({
            name: subtopic,
            topic: topic,
            questions: questions,
            prevQuestions: null,
            expiresAt: year,
          });
        } else {
          // UPDATING OLD SUBTOPIC WITH NEW SUBTOPIC QUESTIONS
          // IF PREV QUESTIONS ALREADY EXIST
          // ARCHIVES PREV QUESTIONS BEFORE UPDATING
          const prevData = prev[0].dataValues;
          if (prevData.prevQuestions !== null) {
            await ArchivedQuestions.create({
              subTopic: prevData.name,
              questions: prevData.prevQuestions,
              expiredAt: prevData.expiresAt,
            });
          } else {
            // UPDATES NEW PREVQUESTIONS
            await Subtopics.update(
              { prevQuestions: prevData.questions },
              {
                where: {
                  name: subtopic,
                },
              }
            );
          }
          // UPDATES OLD QUESTIONS WITH NEW QUESTIONS
          await Subtopics.update(
            { questions: questions },
            {
              where: {
                name: subtopic,
              },
            }
          );
        }
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
