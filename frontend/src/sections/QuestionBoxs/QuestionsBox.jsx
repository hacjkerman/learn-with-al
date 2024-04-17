import React, { useState, useRef, useEffect } from "react";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import { motion } from "framer-motion";

function QuestionsBox(props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const subtopic = props.subtopic;
  const questions = props.questions;

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div
      ref={carousel}
      className="container flex gap-4 overflow-hidden hover:cursor-grabbing active:cursor-grab"
    >
      <motion.div
        drag="x"
        transition={{
          x: { type: "spring", bounce: 0 },
          opacity: { duration: 0.2 },
        }}
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-4"
      >
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
      </motion.div>
    </motion.div>
  );
}

export default QuestionsBox;
