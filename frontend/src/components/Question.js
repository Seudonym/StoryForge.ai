import React from "react";
import axios from "axios";
import { useState } from "react";

import AnswerBox from "./AnswerBox";

export default function Question(props) {
  const [question, setQuestion] = useState(" ");
  const [index, setIndex] = useState(0);
  const [button, setButton] = useState("Start a new story");
  const [visible, setVisible] = useState(false);

  const questionarray = [
    "Once upon a time...",
  ];

  function handleQuestionSubmit() {
    if (!visible) {
      setVisible(true);
    }

    setQuestion(questionarray[index]);
    setIndex(index + 1);
    setButton("Continue");
    props.setText("");

    if (index > questionarray.length - 1) {
      setQuestion("Done");
      setButton(" ");
      {
        props.setChange(true);
      }
    }

    const getResponse = async () => {
      console.log(props.text)
      await axios.post("http://localhost:8000/api/story", {inp: props.text}).then((response) => {
        // TODO: Send to prompt.js
        props.setText(response.data);
      }).catch((error) => {
        console.error("There was an error!", error);
      });
    };
    
    getResponse();
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
