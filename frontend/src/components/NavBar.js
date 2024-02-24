import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 flex w-full px-4 py-2 justify-content-between bg-primary-medium drop-shadow-xl">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button className="text-xl text-white">
        <Link to = "/">StoryForge.ai</Link>
         </button>
        <ul className="flex items-center">
          <button className="p-4 text-white text-md hover:underline decoration-solid">
          <Link to = "/ai">Infinite Stories, One Tap Away!</Link>
          </button>
          {/* <li className="p-4 text-white text-md hover:underline decoration-solid">
            Product
          </li>
          <li className="p-4 text-white text-md hover:underline decoration-solid">
            About
          </li>
          <li className="p-4 text-white text-md hover:underline decoration-solid">
            Contact
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
