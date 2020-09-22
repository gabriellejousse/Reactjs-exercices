import React, { Component } from 'react';


class App extends Component {

  constructor(props) {
    super();
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  state = {
    count: 1,
  };

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    })
  };

  decrementCount() {
    this.setState({
      count: this.state.count - 1
    })
  };

  render() {
    return (
      <div>
        <h1> Counter </h1>
        <h2> {this.state.count} </h2>
        <button onClick={this.incrementCount}> + </button>
        <button onClick={this.decrementCount}> - </button>
      </div>
    );
  }
}

export default App;
