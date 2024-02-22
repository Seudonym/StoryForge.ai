import React, { useState } from "react";

export default function InputBox(props) {
  const handleInputChange = (e) => {
    props.setText(e.target.value);
  };

  return (
    <>
      <div className="flex flex-row justify-center w-5/6 gap-x-4 my-8 m-auto">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter a custom prompt instead."
          className="text-center rounded-md p-2 mb-8 w-full"
          value={props.text}
          onChange={handleInputChange}
        />
        <button className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10 hover:bg-gray-600">
          <img src="/assets/write_icon.svg" alt="Send" />
        </button>
      </div>
    </>
  );
}
