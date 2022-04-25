import React, { useState } from 'react'

export default function CreateTweet() {
    const [textInput, setTextInput] = useState("");
    const userInput = (e) => {
        setTextInput(e.target.value);
        console.log(e.target.value);
    }
    return (
        <form>
            <textarea value={textInput} cols="50" rows="3" onChange={userInput}></textarea>
            <button>Submit</button>
            <h1 onClick={() => setTextInput('')}>{textInput}</h1>
        </form>
    )
}

