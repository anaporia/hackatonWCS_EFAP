import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import './sondage.css';
import Footer from './Footer';

class Sondage extends React.Component {
  constructor() {
    super();
    this.state = {
      states: {
        PCfixe: null,
        PCportable: null,
        smartphone: null,
        tablette: null,
        smartTV: null,
        console: null,
        social: null,
        streaming: null,
        isearch: null,
        online: null,
        email: null,
        emailStorage: null
      }
    };
  }

  updatePCfixe = event => {
    let states = this.state.states;
    states.PCfixe = event.target.value;
    this.setState({ states: states });
  };

  updatePCportable = event => {
    let states = this.state.states;
    states.PCportable = event.target.value;
    this.setState({ states: states });
  };

  updateSmartphone = event => {
    let states = this.state.states;
    states.smartphone = event.target.value;
    this.setState({ states: states });
  };

  updateTablette = event => {
    let states = this.state.states;
    states.tablette = event.target.value;
    this.setState({ states: states });
  };

  updateSmartTV = event => {
    let states = this.state.states;
    states.smartTV = event.target.value;
    this.setState({ states: states });
  };

  updateConsole = event => {
    let states = this.state.states;
    states.console = event.target.value;
    this.setState({ states: states });
  };

  updateSocial = event => {
    let states = this.state.states;
    states.social = event.target.value;
    this.setState({ states: states });
  };

  updateStreaming = event => {
    let states = this.state.states;
    states.streaming = event.target.value;
    this.setState({ states: states });
  };

  updateISearch = event => {
    let states = this.state.states;
    states.isearch = event.target.value;
    this.setState({ states: states });
  };

  updateOnline = event => {
    let states = this.state.states;
    states.online = event.target.value;
    this.setState({ states: states });
  };

  updateEmail = event => {
    let states = this.state.states;
    states.email = event.target.value;
    this.setState({ states: states });
  };

  updateEmailStorage = event => {
    let states = this.state.states;
    states.emailStorage = event.target.value;
    this.setState({ states: states });
  };

  render() {
    return (
      <div className='container-fluid mb-0 px-0'>
        <Header />
        <div className='container-fluid text-center pt-lg-5'>
          <div className='mb-lg-5 pb-lg-5'>
            <h3>MA CONSOMMATION</h3>
            <br />
            <h4>
              (En nombre d'heures d'utilisation et nombre de mails par jour)
            </h4>
          </div>
          <div className='row'>
            <table class='table d-flex col-lg-3'>
              <tbody>
                <tr>
                  <td>
                    <h5>PC fixe</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.PCfixe}
                    onChange={this.updatePCfixe}
                  />
                </tr>
                <tr>
                  <td>
                    <h5>PC portable</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.PCportable}
                    onChange={this.updatePCportable}
                  />
                </tr>
                <tr>
                  <td>
                    <h5>Smartphone</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.smartphone}
                    onChange={this.updateSmartphone}
                  />
                </tr>
                <tr>
                  <td>
                    <h5>Tablette</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.tablette}
                    onChange={this.updateTablette}
                  />
                </tr>
              </tbody>
            </table>
            <table class='table d-flex col-lg-3'>
              <tbody>
                <tr>
                  <td>
                    <h5>Smart TV</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.smartTV}
                    onChange={this.updateSmartTV}
                  />
                </tr>
                <tr>
                  <td>
                    <h5>Console de jeux</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.console}
                    onChange={this.updateConsole}
                  />
                </tr>
                <tr>
                  <td>
                    <h5>Réseaux sociaux</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.social}
                    onChange={this.updateSocial}
                  />
                </tr>
                <tr>
                  <td>
                    <h5>Video / Streaming</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.streaming}
                    onChange={this.updateStreaming}
                  />
                </tr>
              </tbody>
            </table>
            <table class='table d-flex col-lg-3'>
              <tbody>
                <tr>
                  <td>
                    <h5>Recherche internet</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.isearch}
                    onChange={this.updateISearch}
                  />
                </tr>
                <tr>
                  <td>
                    <h5>Jeux en ligne</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.online}
                    onChange={this.updateOnline}
                  />
                </tr>
                <tr>
                  <td>
                    <h5>nombre de mails reçus & envoyés</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.email}
                    onChange={this.updateEmail}
                  />
                </tr>
                <tr>
                  <td>
                    <h5>nombre de mails stockés</h5>
                  </td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.emailStorage}
                    onChange={this.updateEmailStorage}
                  />
                </tr>
              </tbody>
            </table>
            <div className='col-centered'>
              <NavLink
                to={{
                  pathname: '/conseils',
                  state: {
                    states: this.state.states
                  }
                }}
              >
                <button type='button' class='btn btn-success'>
                  <h5>Je valide</h5>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <Footer buttonLabel='Legal mentions' px-0 mx-0 />
      </div>
    );
  }
}

export default Sondage;
