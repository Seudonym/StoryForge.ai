import React from "react";
import Button from "./Button";
import InputBox from "./InputBox";

export default function Options(props) {
  return (
    <>
      <div className="bg-transparent w-full fixed bottom-8">
        {/* <div className="text-white w-5/6 h-fit mt-4 grid grid-cols-4 gap-x-8 gap-y-4 m-auto">
          <Button />
          <Button />
          <Button />
          <Button />
        </div> */}
        <InputBox text={props.text} setText={props.setText} array={props.array} setArray={props.setArray} />
      </div>
    </>
  );
}
