import React from "react";
import QuestionsBox from "../../sections/QuestionBoxs/QuestionsBox";
import Podium from "../../sections/TopQuestions/Podium";

function SubTopic(props) {
  const subtopic = props.subtopic;
  //   FETCH QUESTIONS FOR SUBTOPIC HERE
  return (
    <div>
      <div>{subtopic}</div>
      <Podium />
      <QuestionsBox />
    </div>
  );
}

export default SubTopic;
