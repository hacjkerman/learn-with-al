import React from "react";
import { Outlet } from "react-router-dom";
import SubTopicBox from "../../sections/SubTopicBox/SubTopicBox";
import Loading from "../Loading/Loading";
import QuestionsBox from "../../sections/QuestionBoxs/QuestionsBox";
function Topic(props) {
  const topic = props.topic;
  const items = ["Subtopics", "Most Visited", "Archived"];
  return (
    <div>
      <div>Welcome to</div>
      <div className="flex justify-center text-3xl m-12">{topic}</div>
      <div className="flex justify-between mx-6 items-center ">
        <div className="text-[35px] text-gray-600">Previous Subtopics</div>
        <div className="text-md mr-24 bg-white text-blue-500 hover:bg-slate-200 drop-shadow-lg hover:drop-shadow-xl px-4 py-1 rounded-2xl transition hover:cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.3)_0px_35px_120px]">
          More
        </div>
      </div>
      {items.map((item) => {
        return (
          <div className="my-6" key={item}>
            <div className="flex justify-between mx-6 items-center ">
              <div className="text-[35px] text-gray-600">{item}</div>
              <div className="text-md mr-24 bg-white text-blue-500 hover:bg-slate-200 drop-shadow-lg hover:drop-shadow-xl px-4 py-1 rounded-2xl transition hover:cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.3)_0px_35px_120px]">
                More
              </div>
            </div>
            <QuestionsBox />
          </div>
        );
      })}

      <div>Suggestions</div>
      <div>Learn More</div>
      <Outlet />
    </div>
  );
}

export default Topic;
