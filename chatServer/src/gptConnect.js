import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const key = process.env.API_KEY;
export default function gptConnect() {
  const openai = new OpenAI({ apiKey: key });
  return openai;
}
