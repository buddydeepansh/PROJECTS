import React, { useState } from "react";

function TextForm(props) {
  let [text, setText] = useState("Enter Text Here");
  function handleClick(e) {
    console.log(text);
    setText(text.toUpperCase());
  }
  function handleOnChange(e) {
    console.log(text);
    setText(e.target.value);
  }
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          rows={8}
          id="mybox"
          onChange={handleOnChange}
        ></textarea>
        <button onClick={handleClick} className="mt-5 mb-2 btn btn-primary">
          Convert to UpperCase
        </button>
      </div>
      <div className="container-lg ">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes time to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
