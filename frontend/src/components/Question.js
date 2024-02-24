import React from "react";
import { useState } from "react";

import AnswerBox from "./AnswerBox";

export default function Question(props) {
  const [question, setQuestion] = useState(" ");
  const [index, setIndex] = useState(0);
  const [button, setButton] = useState("Start a new story");
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
    <section className="w-5/6 h-screen m-auto flex justify-center items-center bg-primary-dark text-white">
      <div className="">
        <div className="my-4 text-3xl">{question}</div>
        <div className="my-4">
          <AnswerBox
            text={props.text}
            setText={props.setText}
            inputVisible={inputVisible}
          />
        </div>

        <div>
          <button
            className="w-full my-4 border-2 border-white rounded-md px-16 py-2 text-white hover:bg-white hover:text-black"
            onClick={handleQuestionSubmit}
          >
            {button}
          </button>
        </div>
      </div>
    </section>
  );
}
