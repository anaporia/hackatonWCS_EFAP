import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component="homepage" />
            <Route path="/conseils" component="conseils" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
