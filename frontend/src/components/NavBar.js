import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 flex w-full px-4 py-2 justify-content-between bg-primary-medium drop-shadow-xl">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl text-white">StoryForge.ai</div>
        <ul className="flex items-center">
          <li className="p-4 text-white text-md hover:underline decoration-solid">
            Home
          </li>
          <li className="p-4 text-white text-md hover:underline decoration-solid">
            Product
          </li>
          <li className="p-4 text-white text-md hover:underline decoration-solid">
            About
          </li>
          <li className="p-4 text-white text-md hover:underline decoration-solid">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
