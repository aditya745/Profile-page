import React, { Component } from "react";
import SignUpForm from "./SignUpForm";

class Rating extends Component {
  state = {
    rating: 2,
    showForm: false
  };
  rate = rating => {
    this.setState({
      showForm: true,
      rating: rating
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
      var star = "starRatingStar";

      if (this.state.rating >= i && this.state.rating != null) {
        star += " isSelected";
      }

      stars.push(
        <label key={i} className={star} onClick={this.rate.bind(this, i)}>
          ★
        </label>
      );
    }
    if (!this.state.showForm) {
      return <div className="starRating">{stars}</div>;
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
