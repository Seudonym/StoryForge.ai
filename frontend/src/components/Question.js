import React from "react";
import { useState } from "react";

import AnswerBox from "./AnswerBox";

export default function Question(props) {
  const [question, setQuestion] = useState(" ");
  const [index, setIndex] = useState(0);
  const [button, setButton] = useState("Start Forging Your Story");
  const [inputVisible, setInputVisible] = useState(false); // Track input visibility

  const questionarray = [
    "What is your genre?",
    "What is the tone of the story?",
    "What is the setting of the story?",
    "How many characters in the story?",
    "What is the target audience?",
    "Who is the protagonist?",
    "Describe the protagonist?",
  ];

  function handleQuestionSubmit() {
    if (!inputVisible) {
      setInputVisible(true);
    }

    setQuestion(questionarray[index]);
    setIndex(index + 1);
    setButton("Next");
    props.setText("");

    if (index > questionarray.length - 1) {
      setQuestion("Done");
      setButton(" ");
      {
        props.setChange(true);
      }
    }
  }

  return (
    <main className="w-5/6 rounded-md m-auto h-64 text-emerald-200 text-center text-xl merriweather-regular">
      <div className="w-full mt-16 text-3xl">{question}</div>
      <div className="w-full">
        <AnswerBox
          text={props.text}
          setText={props.setText}
          inputVisible={inputVisible}
        />

       

        <button
          className="border-2 border-white rounded-md bg-inherit py-2 px-4 mt-8 mb-4 mx-4 text-white hover:bg-white hover:text-black hover:font-bold"
          onClick={handleQuestionSubmit}
        >
          {button}
        </button>
      </div>
    </main>
  );
}
