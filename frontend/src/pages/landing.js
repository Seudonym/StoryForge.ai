import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="h-screen bg-black">
      <nav className="bg-black flex justify-content-between w-full">
        <div class="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="merriweather-light text-3xl text-white">
            StoryForge.ai
          </div>
          <ul className="flex items-center">
            <li className="p-4 text-white merriweather-light text-lg hover:underline decoration-solid">
              About the Project
            </li>
            <li className="p-4 text-white merriweather-light text-lg hover:underline decoration-solid">
              Meet the Team
            </li>
          </ul>
        </div>
      </nav>

      <section className="mt-48 flex flex-row justify-center items-center bg-black border-black border-2">
        <div className="border-r  p-4  border-white">
          <h1 className="text-white w-auto text-5xl merriweather-light">
            StoryForge.ai
          </h1>
        </div>
        <Link to="/ai">
          <button className="text-white text-center font-bold border-white border-2 p-6 px-10  ml-4 hover:bg-white hover:text-black rounded-lg">
            GET STARTED
          </button>
        </Link>
      </section>
    </main>
  );
}
