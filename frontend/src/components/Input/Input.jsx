import React from "react";
import arrow from "../../images/arrow.png";

function Input() {
  return (
    <div className="flex justify-center p-12">
      <div className="flex w-[800px] h-[120px] bg-black justify-around items-center rounded-2xl">
        <div className="w-[80%] h-[35%] ">
          <input
            className="w-[100%] h-[100%] rounded-md pl-2"
            placeholder="Answer here..."
          />
        </div>
        <div className="w-14 h-14 rounded-full bg-slate-300 text-3xl flex items-center justify-center hover:cursor-pointer">
          <img src={arrow} className="w-10 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Input;
