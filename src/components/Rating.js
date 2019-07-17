import React from 'react'
import SignUpForm from './SignUpForm'

class Rating extends React.Component {
  state = {
    rating: 3,

    showForm: false
  }

  handleForm = () => {
    this.setState({
      showForm: true
    })
  }

  handleHideForm = () => {
    this.setState({
      showForm: false
    })
  }
  rate = rating => {
    this.setState({
      rating: rating,

    })
  }
  starOver = rating => {
    this.setState({
      rating: rating,

    })
  }
  starOut = () => {
    this.setState({ rating: 3 })
  }
  render() {
    var stars = []

    for (var i = 1; i <= 5; i++) {
      var star = 'starRatingStar'

      if (this.state.rating >= i && this.state.rating != null) {
        star += ' isSelected'
      }

      stars.push(
        <label
          className={star}
          onClick={() => {
            this.rate.bind(this, i)
            this.handleForm()
          }}
          onMouseOver={this.starOver.bind(this, i)}
          onMouseOut={this.starOut}
        >
          ★
        </label>
      )
    }

    return (
      <div className="starRating">
        {this.state.showForm ? (
          <SignUpForm handleHideForm={this.handleHideForm} />
        ) : (
            stars
          )}
      </div>
    )
  }
}
export default Rating