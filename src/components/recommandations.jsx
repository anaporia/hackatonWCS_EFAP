import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recommandations.css";
import Petition from "./Petition";
import Header from "./Header";

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
    <div className="col-lg-6 d-flex justify-content-center">
      <Pie data={data} options={options} height={10} width={10} />
    </div>
  );
};

const Tableau = props => {
  return (
    <React.Fragment>
      <div className="square col-12 d-flex justify-content-center">
        <div className="col-8 tableStats">
          <div className="col-12 py-2">
            <h4>Depuis que vous êtes sur cette page :</h4>
          </div>
          <div className="row alignBlock col-12 py-2">
            {props.test.map(data => (
              <div className="col-lg-2 m-2 subSquare">
                <div className="col-12 py-2 d-flex justify-content-center">
                  Mail reçus :
                </div>
                <div className="col-12 py-4 number d-flex justify-content-center">
                  {props.mail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const One = () => {
  return (
    <React.Fragment>
      <div className="col-lg-6 d-flex justify-content-center">
        <div className="col-12 my-4 d-flex border">
          <div className="col-4 p-2">
            <img
              src="http://ainaf.com/montreal/wp-content/uploads/sites/2/2017/07/placeholder.jpg"
              alt=""
              className="cardRec"
            />
          </div>
          <div className="9">
            <div className="12 title">title</div>
            <div className="12 content p-2">fregerge</div>
          </div>
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
      newmel: 0,
      test: [0, 1, 2, 3, 4, 5, 6, 8]
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
        <Header />
        <div className="row d-flex justify-content-center">
          <div className="col-8 head">
            Parce qu'on ne pourra jamais se passer de nos séries préférées, de
            nos conversations avec nos amis, de nos moments d'égarement sur
            Youtube, ou de nos recherches sur internet...
            <br /> Nous pouvons quand même agir pour opter pour une meilleure
            façon de consommer d'une manière plus maitrisée !
          </div>
        </div>
        <div className="row">
          <Tableau mail={this.state.newmail} test={this.state.test} />
        </div>
        <div className="row py-5">
          <div className="col-12 recommand py-5 pl-5">Nos recommandations</div>
        </div>
        <div className="row">
          <div className="col-lg-6 paddSideA">
            <div className="row paddSide">
              {this.state.test.map(data => (
                <One />
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <Diagram />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6" />
          <div className="col-lg-6 espacePetition">
            <Petition />
          </div>
        </div>
      </div>
    );
  }
}

export default recommandations;
