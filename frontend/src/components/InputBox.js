import React, { useState } from "react";

export default function InputBox(props) {
  const handleInputChange = (e) => {
    props.setText(e.target.value);
  };
  const handlePromptSubmit = () => {
    props.setText(" ");
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center w-3/4 gap-x-4 mt-4 m-auto py-4 rounded-full bg-primary-medium">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter custom prompt"
          className="w-5/6 bg-primary-medium focus:outline-none text-white"
          value={props.text}
          onChange={handleInputChange}
        />
        {/* <button
          className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10 hover:bg-gray-600"
          onClick={handlePromptSubmit}
        >
          <img src="/assets/write_icon.svg" alt="Send" />
        </button> */}
      </div>
    </>
  );
}
