import React from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import "./sondage.css";

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
      <div className='container-fluid px-0'>
        <Header />
        <div className="container-fluid justify-content-center">
          <div className="">
            <h3>MA CONSOMMATION</h3>
            <br />
            <p>(En nombre d'heures, sauf pour les mails)</p>
          </div>
          <div className="row">
            <table class="table d-flex col-lg-3">
              <tbody>
                <tr>
                  <td>PC fixe</td>
                  <input
                    placeholder="PC fixe"
                    type="tel"
                    value={this.state.PCfixe}
                    onChange={this.updatePCfixe}
                  />
                </tr>
                <tr>
                  <td>PC portable</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.PCportable}
                    onChange={this.updatePCportable}
                  />
                </tr>
                <tr>
                  <td>Smartphone</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.smartphone}
                    onChange={this.updateSmartphone}
                  />
                </tr>
                <tr>
                  <td>Tablette</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.tablette}
                    onChange={this.updateTablette}
                  />
                </tr>
              </tbody>
            </table>
            <table class="table d-flex col-lg-3">
              <tbody>
                <tr>
                  <td>Smart TV</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.smartTV}
                    onChange={this.updateSmartTV}
                  />
                </tr>
                <tr>
                  <td>Console de jeux</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.console}
                    onChange={this.updateConsole}
                  />
                </tr>
                <tr>
                  <td>Réseaux sociaux</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.social}
                    onChange={this.updateSocial}
                  />
                </tr>
                <tr>
                  <td>Video / Streaming</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.streaming}
                    onChange={this.updateStreaming}
                  />
                </tr>
              </tbody>
            </table>
            <table class="table d-flex col-lg-3">
              <tbody>
                <tr>
                  <td>Recherche internet</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.isearch}
                    onChange={this.updateISearch}
                  />
                </tr>
                <tr>
                  <td>Jeux en ligne</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.online}
                    onChange={this.updateOnline}
                  />
                </tr>
                <tr>
                  <td>nombre de mails reçus & envoyés</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.email}
                    onChange={this.updateEmail}
                  />
                </tr>
                <tr>
                  <td>nombre de mails stockés</td>
                  <input
                    placeholder=""
                    type="tel"
                    value={this.state.emailStorage}
                    onChange={this.updateEmailStorage}
                  />
                </tr>
              </tbody>
            </table>
            <div className="col-centered">
              <NavLink
                to={{
                  pathname: "/conseils",
                  state: {
                    states: this.state.states
                  }
                }}
              >
                <button type="button" class="btn btn-success">
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
