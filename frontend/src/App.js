import React, { Component } from 'react'

const API_URL = "https://backend-sikfttmpli.now.sh/"

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        data:[]
      }
  }

  async getInitiaLState(){
    const RESPONSE = await fetch(API_URL)
    const DATA = await RESPONSE.json()
    console.log(DATA)
  }

  render() {
    return (
      <div id="container">
        <p>{API_URL}</p>
      </div>
    )
  }

}

export default App
