import React from "react";
import { useState } from "react";
import Options from "./Options";

export default function Prompt(props) {
  return (
    <section className="w-5/6 h-screen overflow-y-scroll m-auto p-32 items-center leading-8 hide-scroll bg-primary-dark text-white flex flex-col gap-y-10">
      {/* This is a sample prompt. */}
      {props.array.map((element, index) => {
        if (element.includes("http") && element.includes("png")) {
          return (
            <img
              key={index}
              src={element}
              alt="Please wait image loading..."
              className="w-1/3"
            />
          );
        }
        return <p className = "block text-2xl" key={index}>{element}</p>;
      })}
    </section>
  );
}
