import React, { useState, useRef, useEffect } from "react";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import { motion } from "framer-motion";

function QuestionsBox(props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const subtopic = props.subtopic;
  const questions = props.questions;

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      console.log(window.innerWidth, width);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div
      ref={carousel}
      className="container flex gap-4 overflow-hidden  py-8 mx-0 max-w-full"
    >
      <motion.div
        drag="x"
        transition={{
          x: { type: "spring", bounce: 0 },
          opacity: { duration: 0.2 },
        }}
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-4 hover:cursor-grab active:cursor-grabbing"
      >
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
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
