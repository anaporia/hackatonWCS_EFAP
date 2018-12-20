import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

const Diagram = props => {
  const data = {
    labels: ["Gentian", "Alice", "Alex"],
    datasets: [
      {
        data: [2, 5, 11],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: "Chore Distribution for this Month",
      fontFamily: "Roboto",
      fontSize: 20
    },
    legend: {
      position: "left",
      labels: {
        fontSize: 20
      }
    }
  };

  return (
    <div className="col-6" style={{ width: "300px" }}>
      <Pie data={data} options={options} height={10} width={10} />
    </div>
  );
};

const Tableau = props => {
  return (
    <React.Fragment>
      <div className="col-8 border" style={{ minHeight: "400px" }}>
        <div className="col-12 py-2">
          <h4>Depuis que vous êtes sur cette page :</h4>
        </div>
        <div className="col-12 py-2">
          <div className="col-2 border">
            <div className="col-12 py-2">Mail reçus :</div>
            <div className="col-12 py-5">{props.mail}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const One = () => {
  return (
    <React.Fragment>
      <div className="col-6 d-flex border">
        <div className="3">
          <img
            src="http://ainaf.com/montreal/wp-content/uploads/sites/2/2017/07/placeholder.jpg"
            alt=""
            style={{ height: "150px", width: "150px" }}
          />
        </div>
        <div className="9">
          <div className="12">title</div>
          <div className="12">fregerge</div>
        </div>
      </div>
    </React.Fragment>
  );
};

class recommandations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: 86400,
      newmail: 0,
      mel: 100000,
      newmel: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ newmail: this.state.newmail + 1 });
    }, 86400000 / this.state.mail);
  }

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
        <div className="row">
          <div className="col-12 py-5">
            <h4>
              Parce qu'on ne pourra jamais se passer de nos séries préférées, de
              nos conversations avec nos amis, de nos moments d'égarement sur
              Youtube, ou de nos recherches sur internet...
              <br /> Nous pouvons quand même agir pour opter pour une meilleure
              façon de consommer d'une manière plus maitrisée.
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Tableau mail={this.state.newmail} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Nos recommandations</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default recommandations;
