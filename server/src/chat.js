import OpenAI from "openai";
import "dotenv/config";
import getPrevious from "./getPrevious.js";

const key = process.env.API_KEY;
const openai = new OpenAI({ apiKey: key });

export default async function chat(topic) {
  const previousQuestions = await getPrevious(topic);
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are the world's most knowledgable individual on the topic: " +
          topic +
          ". Excluding these questions: " +
          previousQuestions +
          ", give me a question and answer about " +
          topic +
          "in JSON notation.",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}
