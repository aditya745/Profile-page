import React, { Component } from "react";
import DisplayComments from "./DisplayComments";
class Comment extends Component {
  state = {
    term: "",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Fusce elementum sem venenatis, congue risus at, aliquet velit.",
      "Cras semper turpis vel augue pharetra, in vehicula augue luctus.",
      "Aenean ut risus condimentum, accumsan felis id, lobortis eros.",
      "Maecenas et sem ut mauris hendrerit commodo maximus aliquet tortor."
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
