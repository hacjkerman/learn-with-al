import React from "react";

function TopQuestions() {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="text-xl">Top Questions</div>
      <div className="flex w-1/3 h-[28rem] align-bottom rotate-180">
        <div className="w-1/3 h-[40%] bg-green-600"></div>
        <div className="w-1/3 h-[80%] bg-yellow-400"></div>
        <div className="w-1/3 h-[60%] bg-blue-700"></div>
      </div>
    </div>
  );
}

export default TopQuestions;
