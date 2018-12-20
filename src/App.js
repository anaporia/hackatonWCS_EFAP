import React, { Component } from 'react';
import './App.css';
import Sondage from './components/Sondage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component='homepage' />
            <Route path='/conseils' component='conseils' />
            <Route path='/sondage' component={Sondage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
