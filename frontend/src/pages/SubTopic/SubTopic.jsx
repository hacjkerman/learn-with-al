import React from "react";
import QuestionsBox from "../../sections/QuestionBoxs/QuestionsBox";

function SubTopic(props) {
  const subtopic = props.subtopic;
  //   FETCH QUESTIONS FOR SUBTOPIC HERE
  return (
    <div>
      <div>{subtopic}</div>
      <QuestionsBox question={["Hello", "Hi"]}></QuestionsBox>
    </div>
  );
}

export default SubTopic;
