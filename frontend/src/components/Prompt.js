import React from "react";
import { useState } from "react";
import Options from "./Options";

export default function Prompt(props) {
  return (
    <section className="w-5/6 h-screen m-auto p-32 justify-evenly items-center leading-8 overflow-y-scroll hide-scroll bg-primary-dark text-white">
      {/* This is a sample prompt. */}
      <p>{props.text}</p>
    </section>
  );
}
