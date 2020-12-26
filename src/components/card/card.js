import React, { Component } from "react";
import "./card.scss";
class Card extends Component {
  state = {
    check: 0,
  };
  renderItem() {
    return (
      <React.Fragment className="item">
        <img src={this.props.recip.recipe.image} alt="food" />

        <p className="title">{this.props.recip.recipe.label}</p>
        <p className="calories">
          <p>Calories:</p>
          {this.props.recip.recipe.calories}
        </p>
      </React.Fragment>
    );
  }
  renderIngredient() {
    return (
      <React.Fragment className="ing">
        <ul>
          {this.props.recip.recipe.ingredientLines.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </React.Fragment>
    );
  }
  handleReadMore = (event) => {
    event.preventDefault();
    var check = (this.state.check + 1) % 2;
    this.setState({ check });
  };
  handleBack = (event) => {
    event.preventDefault();
    var check = (this.state.check + 1) % 2;
    this.setState({ check });
  };
  renderBack() {
    return (
      <button onClick={this.handleBack} className="button">
        Back
      </button>
    );
  }
  renderReadMore() {
    return (
      <button onClick={this.handleReadMore} className="button">
        Read More
      </button>
    );
  }
  render() {
    // console.log(this.props.recip.recipe);
    return (
      <section className="card">
        {this.state.check == 1 && this.renderIngredient()}
        {this.state.check == 0 && this.renderItem()}
        {this.state.check == 0 && this.renderReadMore()}
        {this.state.check == 1 && this.renderBack()}
      </section>
    );
  }
}

export default Card;
