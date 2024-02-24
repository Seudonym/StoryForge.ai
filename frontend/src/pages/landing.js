import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* Styles */
import "tailwindcss/tailwind.css";
import "../styles/landing.css";

/* Components */
import Typewriter from "typewriter-effect";
import NavBar from "../components/NavBar";
// import AnimCanvas from "../components/AnimCanvas";

function Landing() {
  return (
    <main className="h-screen bg-primary-dark">
      <NavBar />
      {/* <AnimCanvas /> */}

      <section className="w-fit h-screen m-auto flex flex-col md:flex-row justify-center items-center bg-primary-dark">
        <h1 className="width-360 h-16 p-2 flex items-center overflow-x-hidden text-white text-center text-5xl">
          <Typewriter
            onInit={(typewriter) => {
              // while (true) {
              typewriter.typeString("Welcome To").start();
              typewriter.deleteAll().start();
              typewriter.typeString("StoryForge.ai").start();
              // }
            }}
          />
        </h1>
        <div className="pl-8"></div>
        <Link to="/ai">
          <button className="text-white text-center font-bold border-white border-2 py-6 px-16 hover:bg-white hover:text-black rounded-lg">
            GET STARTED
          </button>
        </Link>
      </section>
    </main>
  );
}

export default Landing;
