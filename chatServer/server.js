import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import chat from "./src/chat.js";
import generateQuestion from "./src/generateQuestion.js";
import getSubTopics from "./src/getSubTopics.js";
import getDB from "./src/databasepg.js";

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
  res.json(chatMessage);
});

app.post("/generateQuestions", async (req, res) => {
  const topic = req.body;
  const chatMessage = await generateQuestion(topic.topic);
  res.json(chatMessage);
});

app.get("/db", async (req, res) => {
  console.log("hello");
  const db = await getDB();
  res.json(db);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
