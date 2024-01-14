import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import chat from "./src/chat.js";
import generateQuestion from "./src/generateQuestion.js";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Sup" });
});

app.post("/generate", async (req, res) => {
  const topic = req.body;
  const chatMessage = await chat(topic.topic);
  res.json(chatMessage);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
