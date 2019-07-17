import React from 'react'
import SignUpForm from './SignUpForm'

class Rating extends React.Component {
  state = {
    rating: 3,
    temp_rating: null,
    showForm: false
  }

  handleForm = () => {
    console.log('handleform', this.state.showForm)
    this.setState({
      showForm: true
    })
  }

  handleHideForm = () => {
    console.log('handleHideForm', this.state.showForm)
    this.setState({
      showForm: false
    })
  }
  rate = rating => {
    this.setState({
      rating: rating,
      temp_rating: rating
    })
  }
  star_over = rating => {
    this.setState({
      rating: rating,
      temp_rating: rating
    })
  }
  star_out = () => {
    this.setState({ rating: 3 })
  }
  render() {
    console.log('rating', this.state.rating)
    var stars = []

    for (var i = 1; i <= 5; i++) {
      var klass = 'star-rating__star'

      if (this.state.rating >= i && this.state.rating != null) {
        klass += ' is-selected'
      }

      stars.push(
        <label
          className={klass}
          onClick={() => {
            this.rate.bind(this, i)
            this.handleForm()
          }}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out}
        >
          ★
        </label>
      )
    }

    return (
      <div className="star-rating">
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