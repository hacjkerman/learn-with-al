import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  const topic = props.topic;
  return (
    <button className="border-b-2 text-sm text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 py-6">
      <Link to={{ pathname: `/${topic}` }}>{topic}</Link>
    </button>
  );
}

export default Button;
