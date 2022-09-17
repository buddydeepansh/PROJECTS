import React from "react";
import Home from "./Home";
import Home2 from "./Home2";
import UserStore from "./UserStore";

import "./App.css";

export default function App() {
  const store = new UserStore();
  return (
    <>
      <Home store={store} />
      <Home2 store={store} />
    </>
  );
}
