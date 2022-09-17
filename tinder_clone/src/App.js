import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  const [mode, setmode] = useState(`light`);
  const toggleDarkMode = () => {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          title="TextUtils"
          aboutus="About Us"
          mode={mode}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={<TextForm heading="Enter a Component to Analyze  " />}
          />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
