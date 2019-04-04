import React, {Component} from 'react';
class Timer extends Component {
    interval = null;
  
    static defaultProps = {
      initialNumber: 0,
    };
  
    constructor(props) {
      super(props);
      this.state = this.getInitialState(props);
    }
  
    componentWillUnmount() {
      this.pause();
    }
  
    getInitialState = props => {
      return {
        started: false,
        timer: props.initialNumber,
      };
    };
  
    start = () => {
      if (this.started) return;
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState(prevState => {
          return {
            timer: prevState.timer + 1,
          };
        });
      }, 1000);
    };
  
    pause = () => {
      this.setState({ started: false });
      clearInterval(this.interval);
    };
  
    reset = () => {
      this.pause();
      this.setState(this.getInitialState(this.props));
    };
  
    render() {
      return (
        <div>
          <h1 className = "Timer"> Timer: {this.state.timer}</h1>
          {this.state.started ? (
            <button className = "Pause" onClick={this.pause}>Pause</button>
          ) : (
            <button className = "Start" onClick={this.start}>Start</button>
          )}
          <button className = "Reset" onClick={this.reset}>Reset</button>
        </div>
      );
    }
  }

  export default Timer;
  