import React, { Component, useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/home/home";
import logo from "./logo.png";
class App extends Component {
  state = {
    query: "",
    recipe: [],
    app_id: "1f484895",
    app_key: "cdd3ffb4cb949bb1671f19537f937d88",
  };
  getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${this.state.query}&app_id=${this.state.app_id}&app_key=${this.state.app_key}`
    );
    const data = await response.json();
    const recipe = data.hits;
    console.log(recipe);
    this.setState({ recipe });
  };
  handleQuery = (event) => {
    const query = event.target.value;
    this.setState({ query });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.getRecipe();
    console.log(this.state.query);
    // event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} />
        <form className="form">
          <input
            onChange={this.handleQuery}
            type="text"
            placeholder="Search a recipe"
          />
          <div>
            <button onClick={this.handleSubmit} className="button">
              Submit
            </button>
          </div>
        </form>
        <Home className="home" recipes={this.state.recipe}></Home>
        <div className="project">
          {" "}
          <span>
            Project By <span className="name">Akshat Soni</span>
            <a href="https://github.com/akshatsoni15">
              <i class="fab fa-github-alt"></i>
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
