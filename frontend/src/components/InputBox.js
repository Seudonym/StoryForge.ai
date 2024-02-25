import React, { useState } from "react";
import axios from "axios";

export default function InputBox(props) {
  const [input, setInput] = useState(" ");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handlePromptSubmit = () => {
    const getResponse = async () => {
      console.log(props.text);
      await axios
        .post("http://localhost:8000/api/story", { inp: input })
        .then((response) => {
          props.setText(props.text + response.data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };

    getResponse();
    setInput(" ");
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
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10 hover:bg-gray-600"
          onClick={handlePromptSubmit}
        >
          <img className="width-28" src="/assets/pen.svg" alt="Send" />
        </button>
        <button
          className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10 hover:bg-gray-600"
          onClick={handlePromptSubmit}
        >
          <img className="width-32" src="/assets/pic.svg" alt="Send" />
        </button>
      </div>
    </>
  );
}
