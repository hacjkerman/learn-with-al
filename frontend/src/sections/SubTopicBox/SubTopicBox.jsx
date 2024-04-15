import React from "react";

function SubTopicBox(props) {
  const subtopic = props.subtopic;
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <h1 className="text-xl mt-2">Current Subtopics</h1>
      <div className="flex justify-center gap-4 my-4 overflow-x-scroll overflow-y-hidden pb-2 w-[98%]">
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
        <div className="h-24 w-36 bg-slate-300 shrink-0"></div>
      </div>
    </div>
  );
}

export default SubTopicBox;
