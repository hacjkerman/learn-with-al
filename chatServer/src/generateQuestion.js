import OpenAI from "openai";
import "dotenv/config";
import getPrevious from "./getPrevious.js";

const key = process.env.API_KEY;
const openai = new OpenAI({ apiKey: key });

export default async function generateQuestion(topic) {
  const prevQuestions = await getPrevious(topic);
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are the world's most knowledgable individual on the topic: " +
          topic +
          ". Excluding these questions: " +
          prevQuestions +
          ", give me 1 question and answer of the following categories: beginner, intermediate, and advanced to help students in this topic learn more and understand concepts better. Please return the response in JSON notation.",
      },
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}
