import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
// import getWeb3 from "./getWeb3";
import Reg from "./Reg";
import "./App.css";

class App extends Component {
  
  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div className="App">

        <Reg/>

        
      </div>
    );
  }
}

export default App;
