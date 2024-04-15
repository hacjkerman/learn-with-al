import React from "react";

function QuestionBox(props) {
  const subtopic = props.subtopic;
  const questions = props.questions;
  return (
    <div className="flex w-[90%] rounded-3xl bg-slate-400 h-28">
      <div className="w-8 h-8 rounded-full bg-black m-2 ml-3 shrink-0"></div>
      <div className="flex flex-col overflow-hidden">
        <div className="text-lg py-2">{subtopic}</div>
        {/* LINK TO QUESTIONS */}
        <div className="flex gap-4 overflow-x-scroll overflow-y-hidden pr-2 pb-2 w-[98%]">
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
          <div className="w-24 h-6 rounded-xs bg-slate-100 shrink-0"></div>
        </div>
      </div>
    </div>
  );
}

export default QuestionBox;
