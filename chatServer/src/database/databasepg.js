import { initialiseArchiveQuestionModel } from "./initialise/initArchiveQuestion.js";
import { initialiseArchiveSubtopicModel } from "./initialise/initArchiveSubTopic.js";
import { initialiseTopicModel } from "./initialise/initTopic.js";
import { initialiseSubtopicsModel } from "./initialise/initSubTopic.js";
import generateQuestion from "../questions/generateQuestion.js";
import { sequelize } from "./pginit.js";
import subTopicInTopic from "./subTopicInTopic.js";
import topicInTopic from "./topicInTopic.js";

// const User = initialiseUserModel(sequelize, DataTypes);
const ArchivedQuestions = initialiseArchiveQuestionModel(sequelize);
const ArchivedSubTopics = initialiseArchiveSubtopicModel(sequelize);
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
        const prevSub = await subTopicInTopic(topic, subtopic);
        // NEW SUBTOPIC
        if (!prevSub) {
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
          const subTopData = prevSub[0].dataValues;
          if (subTopData.prevQuestions !== null) {
            await ArchivedQuestions.create({
              subTopic: subTopData.name,
              questions: subTopData.prevQuestions,
              expiredAt: subTopData.expiresAt,
            });
          }
          // } else {
          //   // UPDATES NEW PREVQUESTIONS
          //   await Subtopics.update(
          //     { prevQuestions: subTopData.questions },
          //     {
          //       where: {
          //         name: subtopic,
          //       },
          //     }
          //   );
          // }
          // UPDATES OLD QUESTIONS WITH NEW QUESTIONS
          await Subtopics.update(
            { questions: questions, prevQuestions: subTopData.questions },
            {
              where: {
                name: subtopic,
              },
            }
          );
        }
      })
    );
    const prevTopic = await topicInTopic(topic);
    if (!prevTopic) {
      await Topic.create({
        name: topic,
        subTopics: subtopics,
        prevSubTopics: null,
        expiresAt: year,
      });
    } else {
      const topicData = prevTopic[0].dataValues;
      if (topicData.prevSubTopics !== null) {
        await ArchivedSubTopics.create({
          topic: topicData.name,
          subTopics: topicData.prevSubTopics,
          expiredAt: topicData.expiresAt,
        });
      }
      // } else {
      //   await Topic.update(
      //     { prevSubTopics: topicData.subTopics },
      //     {
      //       where: {
      //         name: topic,
      //       },
      //     }
      //   );
      // }
      await Topic.update(
        { subTopics: subtopics, prevSubTopics: topicData.subTopics },
        {
          where: { name: topic },
        }
      );
    }

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
