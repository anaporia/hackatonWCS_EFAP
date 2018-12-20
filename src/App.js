import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import recommandations from "./components/recommandations";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component="homepage" />
              <Route path="/conseils" component={recommandations} />
            </Switch>
          </BrowserRouter>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
