import React, { useState } from "react";
import "../styles/app.css";
import "tailwindcss/tailwind.css";
import Question from "../components/Question";
import Options from "../components/Options";
import Prompt from "../components/Prompt";
import NavBar from "../components/NavBar";

function App() {
  const [change, setChange] = useState(false);
  const [text, setText] = useState("");
  const[array, setArray] = useState([])

  return (
    <main className="h-screen bg-primary-dark">
      <NavBar />
      {change === false ? (
        <Question
          text={text}
          setText={setText}
          change={change}
          setChange={setChange}
          array = {array}
          setArray = {setArray}
        />
      ) : (
        <>
          <Prompt text={text} setText={setText} array = {array} setArray = {setArray}/>
          <Options text={text} setText={setText} array = {array} setArray = {setArray}/>
        </>
      )}
    </main>
  );
}

export default App;
