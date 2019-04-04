import React, {Component} from 'react';
class Toggle extends Component {
    state = {
      isShown: true,
    };
  
    handleToggle = () => {
      this.setState(prevState => {
        return {
          isShown: !prevState.isShown,
        };
      });
    };
  
    render() {
      return (
        <div>
          {this.state.isShown ? this.props.children : null}
          <div style={{ display: this.state.isShown ? 'block' : 'none' }}>
            {this.props.children}
          </div>
          <button className = "Hide" onClick={this.handleToggle}>
            {this.state.isShown ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }

  export default Toggle;