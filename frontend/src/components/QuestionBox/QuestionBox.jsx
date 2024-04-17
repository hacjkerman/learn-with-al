import React from "react";
import { motion } from "framer-motion";

function QuestionBox() {
  return (
    <motion.div className="min-w-[240px] min-h-[248px] bg-slate-300 rounded-lg border shadow-lg relative">
      <img className="w-full h-full rounded-lg z-0" />
      <div className="z-10 h-full absolute top-4 flex flex-col gap-2 items-center overflow-hidden">
        <div className="w-[80%] bg-transparent text-white font-bold">
          LeetCode's Interview Crash Course
        </div>
        <div className="w-[80%] text-sm bg-transparent font-bold text-white">
          Data structures and algorithms
        </div>
      </div>
    </motion.div>
  );
}

export default QuestionBox;
