import React, { Component } from "react";
import "./App.css";

import SmurfForm from "./SmurfForm";
import SmurfsList from "./SmurfsList";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Route path="/" exact component={SmurfsList} />
        <Route path="/add" component={SmurfForm} />
        <Route path="/edit/:id" component={SmurfForm} />
      </div>
    );
  }
}

export default App;
