import React, { Component } from "react";
import DisplayComments from "./DisplayComments";
class Comment extends Component {
  state = {
    term: "",
    items: [
      "My 37 year old children rates this shot very magical :)",
      "How do you make this? Photoshop?.",
      "Nice use of light in this illustration :-)",
      "Let me take a nap... great colour, anyway.",
      "This experience has navigated right into my heart."
    ]
  };
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.state.term) {
      this.setState({
        term: "",
        items: [...this.state.items, this.state.term]
      });
      event.target.reset();
    }
  };

  render() {
    return (
      <div>
        <form className="commentForm" onSubmit={this.onSubmit}>
          <textarea
            value={this.state.term.comment}
            onChange={this.onChange}
            name="comment"
          />
          <button className="button" disabled={!this.state.term}>
            Submit Comment
          </button>
        </form>
        <DisplayComments items={this.state.items} />
      </div>
    );
  }
}
export default Comment;
