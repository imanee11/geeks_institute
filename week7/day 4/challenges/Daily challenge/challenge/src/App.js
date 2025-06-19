import React, { Component } from "react";

class App extends Component {
  state = {
    message: "",
    post: "",
    response: ""
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/api/hello");
    const data = await res.json();
    this.setState({ message: data.message });
  }

  handleChange = (e) => {
    this.setState({ post: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: this.state.post }),
    });

    const body = await response.json();
    this.setState({ response: body.reply });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <p>Post to Server:</p>
          <input type="text" value={this.state.post} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>

        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
