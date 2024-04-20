import React from "react";
import QuestionsBox from "../../sections/QuestionBoxs/QuestionsBox";
import Podium from "../../sections/TopQuestions/Podium";

function SubTopic(props) {
  const subtopic = props.subtopic;
  // CHECK TO SEE IF SUBTOPIC EXISTS OR NOT
  const items = ["General Questions", "Interview Questions", "Archived"];
  //   FETCH QUESTIONS FOR SUBTOPIC HERE
  return (
    <div>
      <div>Take a look around</div>
      <div className="flex justify-center text-3xl m-12">{subtopic}</div>
      <Podium />
      <div className="my-6">
        <div className="flex justify-between mx-6 items-center">
          <div className="text-[35px] text-gray-600">Previous</div>
          <div className="text-md bg-white text-blue-500 hover:bg-slate-200 drop-shadow-lg hover:drop-shadow-xl px-4 py-1 rounded-2xl transition hover:cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.3)_0px_35px_120px]">
            More
          </div>
        </div>
      </div>
      {items.map((item) => {
        return (
          <div className="my-6" key={item}>
            <div className="flex justify-between mx-6 items-center">
              <div className="text-[35px] text-gray-600">{item}</div>
              <div className="text-md bg-white text-blue-500 hover:bg-slate-200 drop-shadow-lg hover:drop-shadow-xl px-4 py-1 rounded-2xl transition hover:cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.3)_0px_35px_120px]">
                More
              </div>
            </div>
            <QuestionsBox />
          </div>
        );
      })}

      <div>Suggestions</div>
      <div>Learn More</div>
    </div>
  );
}

export default SubTopic;
