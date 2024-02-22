import React,{useState} from "react";

export default function InputBox(props) {
 
  
  const handleInputChange=(e)=>{
    props.setText(e.target.value);
    
  }
  
 
  return (

    <input
      type="text"
      name=""
      id=""
      placeholder="Enter a custom prompt instead."
      className="text-center rounded-md w-5/6 p-2 mb-8 absolute bottom-4 left-[50%] translate-x-[-50%]"
      value = {props.text} onChange = {handleInputChange}
    />
  );
}
