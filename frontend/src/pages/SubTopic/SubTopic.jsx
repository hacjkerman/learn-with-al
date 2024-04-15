import React from "react";
import QuestionBox from "../../sections/QuestionBox/QuestionBox";

function SubTopic(props) {
  const subtopic = props.subtopic;
  //   FETCH QUESTIONS FOR SUBTOPIC HERE
  return (
    <div>
      <div>{subtopic}</div>
      <QuestionBox question={["Hello", "Hi"]}></QuestionBox>
    </div>
  );
}

export default SubTopic;
