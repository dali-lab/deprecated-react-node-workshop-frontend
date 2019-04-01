import React, { Component } from 'react';
import './../styles/Counter.css';
import axios from 'axios';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterVal: (this.props.startingVal) ? this.props.startingVal : 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div>
          <h2>Simple Counter:</h2>
          <p>{this.state.counterVal}</p>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
      </div>
    );
  }

  increment() {
      this.setState({
          counterVal: this.state.counterVal += 1
      });
  }

  decrement() {
    this.setState({
        counterVal: this.state.counterVal -= 1
    });
    }
}

export default Counter;
