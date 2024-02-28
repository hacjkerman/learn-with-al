import subTopicInDB from "./subTopicInTopic.js";
import generateQuestion from "../../questions/generateQuestion.js";

export default async function storeDBSubTopics(
  topic,
  subtopics,
  year,
  SubtopicsInit,
  ArchivedQuestions
) {
  await Promise.all(
    subtopics.map(async (subtopic) => {
      const questions = await generateQuestion(topic, subtopic);
      const prevSub = await subTopicInDB(topic, subtopic);
      // SUBTOPIC DOES NOT EXIST
      if (!prevSub) {
        await SubtopicsInit.create({
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
        // UPDATES OLD QUESTIONS WITH NEW QUESTIONS
        await SubtopicsInit.update(
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
  return subtopics;
}
