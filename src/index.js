import React from "react";
import ReactDOM from "react-dom";
import SearchContainer from "./components/SearchContainer.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <SearchContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
