import React from "react";
import { useState } from "react";

import AnswerBox from "./AnswerBox";

export default function Question(props) {
  const [question, setQuestion] = useState(" ");
  const [index, setIndex] = useState(0);
  const [button, setButton] = useState("Start a new story");
  const [visible, setVisible] = useState(false);

  const questionarray = [
    "Name the protagonist?",
    "What is the genre?",
    "What is the tone?",
  ];

  function handleQuestionSubmit() {
    if (!visible) {
      setVisible(true);
    }

    setQuestion(questionarray[index]);
    setIndex(index + 1);
    setButton("Next question");
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
    <section className="h-screen m-auto flex justify-center items-center bg-primary-dark text-white">
      <div className="flex flex-col items-center">
        <div className="my-4 text-3xl">{question}</div>
        <div className="my-4">
          <AnswerBox
            text={props.text}
            setText={props.setText}
            visible={visible}
          />
        </div>

        <div className="my-4">
          <button
            className="border-2 border-white rounded-md px-16 py-4 text-white hover:bg-white hover:text-black"
            onClick={handleQuestionSubmit}
          >
            {button}
          </button>
        </div>
      </div>
    </section>
  );
}
