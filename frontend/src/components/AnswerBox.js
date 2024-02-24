import React from "react";

export default function AnswerBox(props) {
  const handleInputChange = (e) => {
    props.setText(e.target.value);
  };
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter Answer"
      className={`w-full ${props.inputVisible ? "" : "hidden"}`}
      value={props.text}
      onChange={handleInputChange}
    />
  );
}
