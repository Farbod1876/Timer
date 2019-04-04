import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Counter from './Counter';


// function First(props) {
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//     </div>
//   );
// }
class First extends Component {
  render() {
    return (
      <div className = "Letter">
        
        <h2></h2>
        
      </div>
    );
  }
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <First name={'World'} />
        <Timer />
        {/*<Toggle>
        <Timer />
        </Toggle>*/}
        <Counter min={-100} max={-10} />
      </div>
    );
  }
}

export default App;