import React, { Component } from "react";
import Card from "../card/card";
import "./home.scss";
class Home extends Component {
  state = {};

  render() {
    const recipes = this.props.recipes;
    // console.log(this.props.recipes);
    return (
      <div className="home">
        {recipes.map((recipe) => (
          <Card recip={recipe} />
        ))}
      </div>
    );
  }
}

export default Home;
