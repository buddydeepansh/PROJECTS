//import "./App.css";
import Tweet from "./components/tweet";
import CreateTweet from "./components/CreateTweet";
import React, { useState } from "react";
function App() {
  const name = "Deepansh";
  const message = "Hello there";
  return (
    <div className="App">
      <CreateTweet />
      <Tweet name={name} message={message} />
    </div>
  );
}

export default App;
