import getPrevSubTopics from "./getPrevSubTopics.js";
import gptConnect from "../gptConnect.js";

const openai = gptConnect();

export default async function getSubTopics(topic) {
  const prevSubTopics = await getPrevSubTopics(topic);
  const subTopics = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are the world's most knowledgable individual on the topic: " +
          topic +
          ". Excluding these subtopics: " +
          prevSubTopics +
          ", give me 7 new subtopics relating to " +
          topic +
          " to help students in this topic learn more and understand concepts better. Please return the response in an array format in a JSON notation",
      },
    ],
    model: "gpt-3.5-turbo",
  });
  // STORE INTO DATABASE HERE
  const message = JSON.parse(subTopics.choices[0].message.content);
  return message;
}
