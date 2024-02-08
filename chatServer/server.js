import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import chat from "./src/chat.js";
import generateQuestion from "./src/questions/generateQuestion.js";
import genSubTopics from "./src/subtopics/genSubTopics.js";
import storeInDB from "./src/database/databasepg.js";
import getTopics from "./src/topics/getTopics.js";
import getTopics from "./src/database/getTopics.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Sup" });
});

app.post("/generate", async (req, res) => {
  const chatMessage = await chat();
  res.json(chatMessage);
});

app.post("/topics", async (req, res) => {
  const topics = getTopics();
  let storedItems = [];
  for (let i = 0; i < topics.length; i++) {
    const subtopics = await genSubTopics(topics[i]);
    const storedSubTopics = await storeInDB(topics[i], subtopics);
    storedItems.push({ [topics[i]]: storedSubTopics });
  }
  res.json(storedItems);
});

app.post("/subTopics", async (req, res) => {
  const topic = req.body;
  const chatMessage = await genSubTopics(topic.topic);
  res.json(chatMessage.subtopics);
});

app.post("/generateQuestions", async (req, res) => {
  const topic = req.body;
  const chatMessage = await generateQuestion(topic.topic);
  console.log(chatMessage);
  res.json(chatMessage);
});

app.get("/db", async (req, res) => {
  console.log("hello");
  const db = await storeInDB("psychology", ["forensic psychology"]);
  res.json(db);
});

app.get("/topics", async (req, res) => {
  console.log("hello");
  const db = await getTopics();
  res.json(db);
});

app.get("/subtopics", async (req, res) => {
  console.log("hello");
  const db = await getSubTopics();
  res.json(db);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
