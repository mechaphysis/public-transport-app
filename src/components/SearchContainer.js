import React, { Component } from "react";

import Input from "./Input.js";
import Results from "./Results.js";
class SearchContainer extends Component {
  state = {
    showResults: false
  };

  handleButtonClick = () => {
    this.setState({ showResults: true });
  };
  render() {
    return (
      <div className="description">
        <h1 className="header">A que hora teño bus?</h1>
        <p className="paragraph">
          Atopa facilmente os horarios dos autobuses interurbanos de Galicia
        </p>
        <Input onButtonClick={this.handleButtonClick} />
        {this.state.showResults && <Results />}
      </div>
    );
  }
}

export default SearchContainer;
