import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class AntoinePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-4" />
          <div className="col-4">
            <h2>MON SITE WEB</h2>
          </div>
          <div className="col-4 d-flex">
            <div class="mr-5">
              <h4>Accueil</h4>
            </div>
            <div className="ml-5">
              <h4>Les recommandations</h4>
            </div>
          </div>
        </div>
        <div className="row">second</div>
      </div>
    );
  }
}

export default AntoinePage;
