import React, { Component } from 'react';
import './index.css';

const API_URL = "https://backend-sikfttmpli.now.sh/";

class App extends Component {
  render() {
    return (
      <div id="container">
        <p>{API_URL}</p>
      </div>
    );
  }
}

export default App;
