import OpenAI from "openai";
import "dotenv/config";
import getPreviousQuestions from "./getPreviousQuestions.js";

const key = process.env.API_KEY;
const openai = new OpenAI({ apiKey: key });

export default async function generateQuestion(topic, subtopic) {
  const prevQuestions = await getPreviousQuestions(topic, subtopic);
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",

        content:
          "You are the world's most knowledgable individual on the topic: " +
          subtopic +
          ". Excluding these questions: " +
          prevQuestions +
          ", give me 1 question and answer of the following categories: beginner, intermediate, and advanced to help students in this topic learn more and understand concepts better. Please return the response in JSON notation.",
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
  });
  const message = JSON.parse(completion.choices[0].message.content);
  return {
    beginner: {
      question: "What is forensic psychology?",
      answer:
        "Forensic psychology is the application of psychology to the field of law and justice. It involves using psychological principles, theories, and research to understand the behavior of individuals involved in legal cases.",
    },
    intermediate: {
      question: "What are some key roles of a forensic psychologist?",
      answer:
        "Forensic psychologists perform various roles such as conducting psychological evaluations of individuals involved in legal cases, providing expert testimony in court, assessing the mental competency of defendants, and offering treatment to individuals within the criminal justice system.",
    },
    advanced: {
      question:
        "How do forensic psychologists differentiate between factitious disorder and malingering?",
      answer:
        "Factitious disorder involves intentionally producing or feigning physical or psychological symptoms to assume the role of a sick person, while malingering refers to the deliberate feigning or exaggerating of symptoms for secondary gain, such as obtaining financial compensation or avoiding legal consequences. Forensic psychologists differentiate between the two by considering the motivation, consistency of symptoms, and corroborative evidence through comprehensive psychological evaluations.",
    },
  };
}
