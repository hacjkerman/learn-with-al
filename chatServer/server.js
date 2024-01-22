import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import chat from "./src/chat.js";
import generateQuestion from "./src/questions/generateQuestion.js";
import getSubTopics from "./src/subtopics/getSubTopics.js";
import storeInDB from "./src/database/databasepg.js";

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

app.post("/subTopics", async (req, res) => {
  const topic = req.body;
  const chatMessage = await getSubTopics(topic.topic);
  const parsedObj = JSON.parse(chatMessage);
  console.log(parsedObj.subtopics);
  res.json(parsedObj.subtopics);
});

app.post("/generateQuestions", async (req, res) => {
  const topic = req.body;
  const chatMessage = await generateQuestion(topic.topic);
  const parsedObj = JSON.parse(chatMessage);
  res.json(parsedObj.beginner);
});

app.get("/db", async (req, res) => {
  console.log("hello");
  const db = await storeInDB();
  res.json(db);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
