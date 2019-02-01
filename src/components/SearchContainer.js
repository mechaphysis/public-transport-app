import React, { Component } from "react";
import Results from "./Results.js";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      destination: "",
      showResults: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDepartChange(event) {
    this.setState({
      departValue: event.target.value
    });
  }
  handleDestChange(event) {
    this.setState({
      destValue: event.target.value
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(
      "The following was submitted: " +
        this.state.departure +
        " " +
        this.state.destination
    );
    //The state change below is only for testing purposes. To be removed after
    this.state.showResults === false
      ? this.setState({ showResults: true })
      : this.setState({
          showResults: false
        });
    //preventDefault avoids the reload of the page upon clicking submit
    event.preventDefault();
  }

  render() {
    return (
      <div className="center bg-light-gray br5 b--gray tc">
        <h1 className="f1 lh-title">A que hora teño bus?</h1>
        <p className="f4 lh-copy measure">
          Atopa facilmente os horarios dos autobuses interurbanos de Galicia.
        </p>
        <form className="center" onSubmit={this.handleSubmit}>
          <label>
            Orixe:
            <input
              className="br-5"
              type="text"
              name="departure"
              value={this.state.departure}
              onChange={this.handleInputChange}
              placeholder="Ponteareas"
            />
          </label>
          <label>
            Destino:
            <input
              className="input"
              type="text"
              name="destination"
              value={this.state.destination}
              onChange={this.handleInputChange}
              placeholder="Vigo"
            />
          </label>
          <input type="submit" value="BUSCAR" className="btn grow" />
        </form>
        {this.state.showResults && <Results />}
      </div>
    );
  }
}

export default SearchContainer;
