import React from "react";
import Button from "../Button/Button";
import GEC from "../../images/GEC.png";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-start xs:text-md sm:text-lg md:text-xl sm:space-x-0 xs:space-x-2 md:space-x-4 lg:space-x-8 w-full bg-white shadow-lg items-center">
      <img
        className="w-8 h-8 sm:ml-2 ml-8 hover:cursor-pointer"
        src={GEC}
        alt="logo"
        onClick={home}
      ></img>
      {topics.map((topic, index) => {
        return <Button key={index} topic={topic}></Button>;
      })}
      <Search />
    </div>
  );
}

export default Navbar;
