import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import './sondage.css';

class Sondage extends React.Component {
  constructor() {
    super();
    this.state = {
      PCfixe: '',
      PCportable: null,
      smartphone: '',
      tablette: '',
      smartTV: '',
      console: '',
      social: '',
      streaming: '',
      isearch: '',
      online: '',
      email: '',
      emailStorage: ''
    };
  }

  updatePCfixe = event => {
    this.setState({ PCfixe: event.target.value });
  };

  updatePCportable = event => {
    this.setState({ PCportable: event.target.value });
  };

  updateSmartphone = event => {
    this.setState({ smartphone: event.target.value });
  };

  updateTablette = event => {
    this.setState({ tablette: event.target.value });
  };

  updateSmartTV = event => {
    this.setState({ smartTV: event.target.value });
  };

  updateConsole = event => {
    this.setState({ console: event.target.value });
  };

  updateSocial = event => {
    this.setState({ social: event.target.value });
  };

  updateStreaming = event => {
    this.setState({ streaming: event.target.value });
  };

  updateISearch = event => {
    this.setState({ isearch: event.target.value });
  };

  updateOnline = event => {
    this.setState({ online: event.target.value });
  };

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  updateEmailStorage = event => {
    this.setState({ emailStorage: event.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid justify-content-center'>
          <div className=''>
            <h3>MA CONSOMMATION</h3>
            <br />
            <p>(En nombre d'heures, sauf pour les mails)</p>
          </div>
          <div className='row'>
            <table class='table d-flex col-lg-3'>
              <tbody>
                <tr>
                  <td>PC fixe</td>
                  <input
                    placeholder='PC fixe'
                    type='tel'
                    value={this.state.PCfixe}
                    onChange={this.updatePCfixe}
                  />
                </tr>
                <tr>
                  <td>PC portable</td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.PCportable}
                    onChange={this.updatePCportable}
                  />
                </tr>
                <tr>
                  <td>Smartphone</td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.smartphone}
                    onChange={this.updateSmartphone}
                  />
                </tr>
                <tr>
                  <td>Tablette</td>
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
                  <td>Smart TV</td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.smartTV}
                    onChange={this.updateSmartTV}
                  />
                </tr>
                <tr>
                  <td>Console de jeux</td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.console}
                    onChange={this.updateConsole}
                  />
                </tr>
                <tr>
                  <td>Réseaux sociaux</td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.social}
                    onChange={this.updateSocial}
                  />
                </tr>
                <tr>
                  <td>Video / Streaming</td>
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
                  <td>Recherche internet</td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.isearch}
                    onChange={this.updateISearch}
                  />
                </tr>
                <tr>
                  <td>Jeux en ligne</td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.online}
                    onChange={this.updateOnline}
                  />
                </tr>
                <tr>
                  <td>nombre de mails reçus & envoyés</td>
                  <input
                    placeholder=''
                    type='tel'
                    value={this.state.email}
                    onChange={this.updateEmail}
                  />
                </tr>
                <tr>
                  <td>nombre de mails stockés</td>
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
                    ...this.state
                  }
                }}
              >
                <button type='button' class='btn btn-success'>
                  Je valide
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sondage;
