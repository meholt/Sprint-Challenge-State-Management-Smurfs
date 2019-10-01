import React, { Component } from "react";
import "./App.css";
import SmurfOhana from './components/SmurfOhana';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf 'Ohana</h1>
        <div>Join the family!</div>
        <SmurfOhana />
      </div>
    );
  }
}

export default App;
