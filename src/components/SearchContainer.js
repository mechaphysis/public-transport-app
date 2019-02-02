import React, { Component } from "react";
import Results from "./Results.js";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      destination: "",
      showResults: false
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
      <main className="avenir pa4 black-80 measure center">
        <h1 className="f2 lh-title fw3">A que hora teño bus?</h1>
        <p className="f4 lh-copy measure">
          Atopa facilmente os horarios dos autobuses interurbanos de Galicia.
        </p>
        <div className="">
          <form className="measure center" onSubmit={this.handleSubmit}>
            <fieldset className="ba b--transparent ph0 mh0">
              <legend class="f4 fw6 ph0 mh0">Consúltao:</legend>

              <div className="mt3">
                <label className="db fw6 lh-copy f6">
                  Orixe
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-light-gray hover-white w-100"
                    type="text"
                    name="departure"
                    value={this.state.departure}
                    onChange={this.handleInputChange}
                    placeholder="Ponteareas"
                  />
                </label>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">
                  Destino
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-light-gray hover-white w-100"
                    type="text"
                    name="destination"
                    value={this.state.destination}
                    onChange={this.handleInputChange}
                    placeholder="Vigo"
                  />
                </label>
              </div>
            </fieldset>
            <input
              type="submit"
              value="BUSCAR"
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            />
          </form>
        </div>
        {this.state.showResults && <Results />}
      </main>
    );
  }
}

export default SearchContainer;
