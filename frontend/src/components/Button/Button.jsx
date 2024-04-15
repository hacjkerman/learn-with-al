import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  const topic = props.topic;
  return (
    <button>
      <Link to={{ pathname: `/${topic}` }}>{topic}</Link>
    </button>
  );
}

export default Button;
