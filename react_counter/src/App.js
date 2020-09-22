import React, { Component } from 'react';
// import './styles.css';
import Counter from './components/Counter';



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
      //  le chiffre maximum qu'on peut atteindre en décrémentant est 0 :
      count: Math.max(this.state.count - 1, 0)

    })
  };

  render() {
    return (

      <Counter
        count={this.state.count}
        incrementFn={this.incrementCount} decrementFn={this.decrementCount}>
      </Counter>

      // <div className="center-counter">
      //   <h1 > Counter </h1>
      //   <h2> {this.state.count} </h2>
      //   <button onClick={this.incrementCount} className= "button-plus"> + </button>
      //   <button onClick={this.decrementCount} className= "button-moins"> - </button>
      // </div>
    );
  }
}

export default App;
