import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../styles/app.css";
import "tailwindcss/tailwind.css";
import Question from "../components/Question";
import Options from "../components/Options";
import Prompt from "../components/Prompt";
import NavBar from "../components/NavBar";

function App() {
  const [change, setChange] = useState(false);
  const [text, setText] = useState("");

  return (
    <main className="h-screen bg-primary-dark">
      <NavBar />
      <section className="flex flex-col mt-8 justify-evenly items-center">
        {change === false ? (
          <Question
            text={text}
            setText={setText}
            change={change}
            setChange={setChange}
          />
        ) : (
          <>
            <Prompt />
            <div className="">
              <Options text={text} setText={setText} />
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
