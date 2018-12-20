import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import recommandations from "./components/recommandations";
import Sondage from "./components/Sondage";
import accueil from "./components/accueil";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={accueil} />
              <Route path="/conseils" component={recommandations} />
              <Route path="/sondage" component={Sondage} />
            </Switch>
          </BrowserRouter>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
