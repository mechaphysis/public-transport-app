import React from "react";
import ReactDOM from "react-dom";
import Input from "./components/Input.js";
import Results from "./components/Results.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="header">A que hora teño bus?</h1>
      <p className="paragraph">
        Atopa facilmente os horarios dos autobuses interurbanos de Galicia
      </p>
      <Input />
      <Results />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
