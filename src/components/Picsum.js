import React, { Component } from "react"

export default class Picsum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://picsum.photos/list",
      source: ""
    }
  }

  doFetch() {

  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("You clicked");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button>Press Me for a Pic</button>
        </form>
      </div>
    )
  }
  
}
