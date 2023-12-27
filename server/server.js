import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import chat from "./src/chat.js";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Sup" });
});

app.post("/message", async (req, res) => {
  const message = req.body;
  const chatMessage = await chat(message.message);
  res.json({ message: chatMessage });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
