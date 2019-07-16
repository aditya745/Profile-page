import React, { Component } from "react";
import SignUpForm from "./SignUpForm";

class Rating extends Component {
  state = {
    rating: this.props.rating || 2,
    temp_rating: null,
    showForm: false
  };
  rate = rating => {
    this.setState({
      showForm: true,
      rating: rating,
      temp_rating: rating
    });
  };
  star_over = rating => {
    this.setState({
      rating: this.state.rating,
      temp_rating: this.state.temp_rating
    });
  };
  star_out = () => {
    this.setState({
      rating: this.state.rating,
      showForm: false
    });
  };
  handleHideForm = () => {
    this.setState({
      showForm: false
    });
  };
  render() {
    var stars = [];

    for (var i = 1; i <= 5; i++) {
      var klass = "star-rating__star";

      if (this.state.rating >= i && this.state.rating != null) {
        klass += " is-selected";
      }

      stars.push(
        <label
          key={i}
          className={klass}
          onClick={this.rate.bind(this, i)}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out}
        >
          ★
        </label>
      );
    }
    if (!this.state.showForm) {
      return <div className="star-rating">{stars}</div>;
    } else {
      return (
        <div>
          <SignUpForm handleHideForm={this.handleHideForm} />
        </div>
      );
    }
  }
}
export default Rating;
