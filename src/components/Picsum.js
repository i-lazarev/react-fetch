import React, { Component } from "react";
import Image from "./Image";

export default class Picsum extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      url: "https://picsum.photos/list",
      source: "",
      fetch: false
    };
  }
  componentDidMount() {
    this.fetchAsync();
    console.log("Component did Mount");
  }
  componentDidUpdate() {
    console.log("Component did update");
  }

  fetchAsync = async () => {
    console.log("Now I fetch");
    try {
      const req = await fetch(this.state.url);
      const res = await req.json();
      const rand = Math.floor(Math.random() * Object.keys(res).length);
      //console.log("")
      this.setState(prevState => ({ fetch: true, source: res[rand] }));
      //console.log(res[rand])
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("You clicked");
    this.fetchAsync();
  };

  render() {
    console.log("Render Picsum");
    return (
      <div>
        {this.state.fetch && <Image source={this.state.source} alt="img" />}
        <form onSubmit={this.handleSubmit}>
          <button>Press Me for a Pic</button>
        </form>
      </div>
    );
  }
}
