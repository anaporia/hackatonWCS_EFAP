import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import recommandations from './components/recommandations';
import Sondage from './components/Sondage';
import Homepage from './components/Homepage';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/conseils' component={recommandations} />
              <Route path='/sondage' component={Sondage} />
              <Route path='/slider' component={Slider} />
            </Switch>
          </BrowserRouter>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
