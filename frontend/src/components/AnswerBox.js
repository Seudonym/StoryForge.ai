import React from "react";

export default function AnswerBox(props) {
  const handleInputChange = (e)=>{
      props.setText(e.target.value);
  }
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter Answer"
      className={`text-center text-black rounded-md w-2/6 p-2 my-8`}
      value = {props.text}
      onChange = {handleInputChange}
    />
  );
}
