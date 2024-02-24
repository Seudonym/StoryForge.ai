import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* Styles */
import "../styles/landing.css";
import "tailwindcss/tailwind.css";

/* Components */
import NavBar from "../components/NavBar";

function Landing() {
  return (
    <main className="h-screen bg-primary-dark">
      <NavBar />

      <section className="mt-48 flex flex-row justify-center items-center">
        <div className="border-r-2 py-4 px-8 border-white">
          <h1 className="text-white w-auto text-5xl">StoryForge.ai</h1>
        </div>
        <div className="pl-8"></div>
        <Link to="/ai">
          <button className="text-white text-center font-bold border-white border-2 px-16 py-6 px-10  ml-4 hover:bg-white hover:text-black rounded-lg">
            GET STARTED
          </button>
        </Link>
      </section>
    </main>
  );
}

export default Landing;