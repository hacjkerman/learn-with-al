import React from "react";

function QuestionBox() {
  return (
    <div className="min-w-[240px] min-h-[248px] bg-white rounded-lg border shadow-lg relative">
      <img className="w-full h-full rounded-lg bg-slate-300 z-0" />
      <div className="z-10 h-full absolute top-4 flex flex-col gap-2 items-center overflow-hidden m-2">
        <div className="w-[80%] bg-transparent text-white font-bold">
          LeetCode's Interview Crash Course
        </div>
        <div className="w-[80%] text-sm bg-transparent font-bold text-white">
          Data structures and algorithms
        </div>
      </div>
    </div>
  );
}

export default QuestionBox;
