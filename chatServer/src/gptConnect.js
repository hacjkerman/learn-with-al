import OpenAI from "openai";
import "dotenv/config";

const key = process.env.API_KEY;

export default function gptConnect() {
  const openai = new OpenAI({ apiKey: key });
  return openai;
}
