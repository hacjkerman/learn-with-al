import getPrevious from "./questions/getPreviousQuestions.js";
import getTopics from "./topics/getTopics.js";
import gptConnect from "./gptConnect.js";

const openai = gptConnect();

export default async function chat() {
  const topics = getTopics();
  const questions = await Promise.all(
    topics.map(async (topic) => {
      const prevQuestions = await getPrevious(topic);
      const question = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            response_format: { type: "json_object" },
            content:
              "You are the world's most knowledgable individual on the topic: " +
              topic +
              ". Excluding these questions: " +
              prevQuestions +
              ", give me a question and answer about " +
              topic +
              " to help students in this topic learn more and understand concepts better. Please return the response in JSON notation.",
          },
        ],
        model: "gpt-3.5-turbo",
      });
      return question.choices[0].message.content;
    })
  );
  // STORE INTO DATABASE HERE
  return JSON.parse(questions);
}
