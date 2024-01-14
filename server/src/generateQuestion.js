import OpenAI from "openai";
import "dotenv/config";

const key = process.env.API_KEY;
const openai = new OpenAI({ apiKey: key });

export default async function generateQuestion(message) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: message },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  return completion.choices[0].message;
}
