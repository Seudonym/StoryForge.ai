import React, { useState } from "react";

export default function InputBox(props) {
  const handleInputChange = (e) => {
    props.setText(e.target.value);
  };

  return (
    <>
      <div className="flex flex-row justify-center w-5/6 gap-x-4 mt-8 m-auto">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter a custom prompt instead."
          className="text-center rounded-md p-2 w-full"
          value={props.text}
          onChange={handleInputChange}
        />

        <button className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10 p-2 hover:bg-gray-600">
          <img src="/assets/write.svg" alt="Send" />
        </button>

        <button className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10 hover:bg-gray-600">
          <img src="/assets/draw.svg" alt="Send" />
        </button>
      </div>
    </>
  );
}
