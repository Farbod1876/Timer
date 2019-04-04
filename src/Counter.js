import React, {Component} from 'react';
class Counter extends Component {
    static defaultProps = {
      min: -Infinity,
      max: Infinity,
    };
  
    constructor(props) {
      super(props);
      if (props.min > props.max) {
        throw new Error('Min should be lesser or equal to Max');
      }
      this.state = {
        counter: Math.min(Math.max(0, props.min), props.max),
      };
    }
  
    handleIncrement = () => {
      this.setState(prevState => {
        return {
          counter: Math.min(prevState.counter + 1, this.props.max),
        };
      });
    };
  
    handleDecrement = () => {
      this.setState(prevState => {
        return {
          counter: Math.max(prevState.counter - 1, this.props.min),
        };
      });
    };
  
    render() {
      return (
        <div>
          <p>{this.state.counter}</p>
          <button className = "Decrement" onClick={this.handleDecrement}>Decrement</button>
          <button className = "Increment" onClick={this.handleIncrement}>Increment</button>
        </div>
      );
    }
  }

  export default Counter;
  