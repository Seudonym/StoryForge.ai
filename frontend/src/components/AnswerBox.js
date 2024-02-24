import React from "react";

export default function AnswerBox(props) {
  const handleInputChange = (e) => {
    props.setText(e.target.value);
  };
  return (
    <div
      className={`width-256 h-auto flex flex-row justify-center items-center gap-x-4 mt-4 m-auto py-4 rounded-full bg-primary-medium ${
        props.visible ? "" : "hidden"
      }`}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Answer"
        className={`w-5/6 bg-primary-medium focus:outline-none text-white text-center`}
        value={props.text}
        onChange={handleInputChange}
      />
    </div>
  );
}
