import React from "react";
import Question from "../../components/Questions/Question";
import Input from "../../components/Input/Input";
import SimilarQs from "../../sections/SimilarQs/SimilarQs";
import Responses from "../../sections/Responses/Responses";

function QuestionPage() {
  return (
    <div>
      <Question />
      <Input />
      <SimilarQs />
      <div className="flex flex-col gap-4">
        <Responses />
        <Responses />
        <Responses />
      </div>
    </div>
  );
}

export default QuestionPage;
