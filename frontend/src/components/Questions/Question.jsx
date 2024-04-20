import React from "react";
import arrow from "../../images/arrow.png";

function Question() {
  return (
    <div className="flex justify-center gap-4 items-center p-12">
      <div className="md:w-20 md:h-20 sm:w-12 sm:h-12 xs:w-8 xs:h-8 bg-slate-300 text-3xl rounded flex items-center justify-center rotate-180 hover:cursor-pointer">
        <img src={arrow} className="md:w-16 md:h-12 sm:w-8 sm:h-6" />
      </div>
      <div className="w-[360px] min-h-[180px] bg-gray-200 flex flex-col items-center gap-6 p-4">
        <div className="text-2xl">{/* PLACEHOLDERS */}Clinical Psychology</div>
        <div className="text-lg">
          {/* PLACEHOLDERS */}
          Q: Tell me about the nonverbal cues you look for during a counseling
          session.awefawefawefewfaefa fewfwe fw fawe fae
        </div>
      </div>
      <div className="md:w-20 md:h-20 sm:w-12 sm:h-12 xs:w-8 xs:h-8 bg-slate-300 text-3xl rounded flex items-center justify-center hover:cursor-pointer">
        <img src={arrow} className="md:w-16 md:h-12 sm:w-8 sm:h-6" />
      </div>
    </div>
  );
}

export default Question;
