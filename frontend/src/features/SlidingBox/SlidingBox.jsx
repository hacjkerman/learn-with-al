import QuestionBox from "../../components/QuestionBox/QuestionBox";
import QBSkeleton from "../../components/QuestionBox/QBSkeleton";
import React from "react";

function SlidingBox(props) {
  const questionsArray = props.questionsArray;
  let render;
  if (!questionsArray) {
    render = <QBSkeleton />;
  } else {
    render = questionsArray.map((questionObj) => {
      return <QuestionBox question={questionObj.question} />;
    });
  }
  return render;
}

export default SlidingBox;
