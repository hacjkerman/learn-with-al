import topicInDB from "./topicInTopic.js";

export default async function storeDBTopics(
  topic,
  subtopics,
  year,
  Topic,
  ArchivedSubTopics
) {
  const prevTopic = await topicInDB(topic);
  // TOPIC DOES NOT EXIST
  if (!prevTopic) {
    await Topic.create({
      name: topic,
      subTopics: subtopics,
      prevSubTopics: null,
      expiresAt: year,
    });
  } else {
    // UPDATING OLD SUBTOPIC WITH NEW SUBTOPIC IN TOPIC
    // IF PREV SUBTOPICS ALREADY EXIST
    // ARCHIVES PREV SUBTOPICS BEFORE UPDATING
    const topicData = prevTopic[0].dataValues;
    if (topicData.prevSubTopics !== null) {
      await ArchivedSubTopics.create({
        topic: topicData.name,
        subTopics: topicData.prevSubTopics,
        expiredAt: topicData.expiresAt,
      });
    }
    // UPDATES OLD QUESTIONS WITH NEW QUESTIONS
    await Topic.update(
      { subTopics: subtopics, prevSubTopics: topicData.subTopics },
      {
        where: { name: topic },
      }
    );
  }
}
