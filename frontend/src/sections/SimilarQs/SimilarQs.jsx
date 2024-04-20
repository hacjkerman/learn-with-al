import React from "react";

function SimilarQs() {
  return (
    <div className="flex flex-col w-full items-center pb-4">
      <div className="text-2xl">Similar Questions</div>
      <div className="flex gap-4 p-4">
        <div className="w-[250px] h-[150px] bg-slate-200 rounded"></div>
        <div className="w-[250px] h-[150px] bg-slate-200 rounded"></div>
        <div className="w-[250px] h-[150px] bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}

export default SimilarQs;
