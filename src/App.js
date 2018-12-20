import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Petition from './components/Petition';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <div className='App'>
            <Petition />
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component='homepage' />
                <Route path='/conseils' component='conseils' />
              </Switch>
            </BrowserRouter>
          </div>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
