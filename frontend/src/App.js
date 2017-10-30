import React, { Component } from 'react'
import './index.css';

const API_URL = "https://backend-sikfttmpli.now.sh/"

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        data:[]
      }
  }

  render() {
    return (
      <div id="container">
        <p>{API_URL}</p>
      </div>
    );
  }

}

export default App;
