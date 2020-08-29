import React from "react";
import "./App.css";
import NavBar from "./components/nav_bar";

import Results from "./components/results";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Results />
    </div>
  );
}

export default App;
