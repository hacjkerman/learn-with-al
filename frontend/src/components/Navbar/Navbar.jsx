import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

function Navbar() {
  const topics = [
    "Psychology",
    "Philosophy",
    "Money",
    "Coding",
    "Health",
    "Sales",
    "Marketing",
  ];

  return (
    <div className="flex justify-center xs:text-md sm:text-lg md:text-2xl space-x-12 w-full my-6 ">
      {topics.map((topic, index) => {
        return <Button key={index} topic={topic}></Button>;
      })}
    </div>
  );
}

export default Navbar;
