import React, { useState } from 'react'

export default function CreateTweet({ tweets, setTweets, textInput, setTextInput }) {
    const userInput = (e) => {
        setTextInput(e.target.value);
    }
    const submitTweet = (e) => {
        e.preventDefault();
        // console.log("object");
        setTweets([...tweets, textInput]);
        setTextInput("");
    }
    return (
        <form onSubmit={submitTweet}>
            <textarea value={textInput} cols="50" rows="3" onChange={userInput}></textarea>
            <button>Submit</button>
            <h1 onClick={() => setTextInput('')}>{textInput}</h1>
        </form>
    )
}

