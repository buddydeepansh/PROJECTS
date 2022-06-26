//import "./App.css";
import Tweet from "./components/tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import React, { useState } from "react";
function App() {
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState("");
  const name = "Deepansh";
  const message = "Hello there";
  return (
    <div className="App">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} />
    </div>
  );
}

export default App;
