import React, { Component } from "react";
import "./card.scss";
class Card extends Component {
  state = {};
  render() {
    // console.log(this.props.recip.recipe);
    return (
      <section className="card">
        <img src={this.props.recip.recipe.image} alt="food" />

        <h1 className="title">{this.props.recip.recipe.label}</h1>
        <p className="calories">{this.props.recip.recipe.calories}</p>
        {/* <p className="ingredients">
          {this.props.recip.recipe.ingredientLines.map((i) => {
            return (
              <ol>
                <l1>{i}</l1>
              </ol>
            );
          })}
        </p> */}
      </section>
    );
  }
}

export default Card;
