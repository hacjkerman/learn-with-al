import React from "react";
import { Outlet } from "react-router-dom";
import SubTopicBox from "../../sections/SubTopicBox/SubTopicBox";
import TopQuestions from "../../sections/TopQuestions/TopQuestions";
function Topic(props) {
  const topic = props.topic;
  return (
    <div>
      <div className="flex justify-center text-3xl m-12">{topic}</div>
      <div className="flex flex-col justify-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <SubTopicBox subtopic={"Cognitive Psychology"}></SubTopicBox>
        <div class="flex-grow border-t border-gray-400"></div>
        <TopQuestions />
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <Outlet />
    </div>
  );
}

export default Topic;
