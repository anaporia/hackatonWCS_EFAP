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
                  {data.calculState}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const One = props => {
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
            <div className="12 title">{props.data.name}</div>
            <div className="12 content p-2">{props.data.content}</div>
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
      test: [
        {
          calcul: (2 * 0.06472603) / 864000,
          calculState: 0
        },
        { calcul: (2 * 0.05787671) / 864000, calculState: 0 },
        { calcul: (2 * 0.02731668) / 864000, calculState: 0 },
        { calcul: (2 * 0.34240286) / 864000, calculState: 0 },
        { calcul: (2 * 0.09315068) / 864000, calculState: 0 },
        { calcul: (2 * 0.13972603) / 864000, calculState: 0 },
        { calcul: (2 * 0.255) / 864000, calculState: 0 },
        { calcul: (2 * 0.51) / 864000, calculState: 0 },
        { calcul: (2 * 0.51) / 864000, calculState: 0 }
      ],
      cons: [
        {
          name: "PCfix",
          content:
            "Choisir un pc portable car il consomme 4 fois moins d’électricité qu’un ordinateur fixe pour des performances équivalentes."
        },
        {
          name: "PCportable",
          content: `Utiliser au maximum votre batterie au lieu de le brancher (tout en pensant à ne pas laisser le chargeur branché dans la prise). \
            Choisissez votre ordinateur car vous n’avez pas besoin d’un pc surpuissant et donc très consommateur d’électricité pour regarder des mails, \
            des films ou discuter sur internet.`
        },
        {
          name: "Mail",
          content: `Réduisez votre temps de lecture « en ligne ». \
            Optimiser la taille de vos documents en pièce jointe (favorisez les fichiers compressés, les images \
            en PDF basse résolution, les liens hypertexte à la place d’un document, limiter les photos et leur \
            taille). \
            Supprimer vos pièces jointes qui peuvent être attachées au message quand vous répondez à un correspondant. \
            Vider votre boîte mail au maximum. Pour cela, ne conservez que les mails nécessaires. Faites un
            tri régulier dans votre boîte de réception et votre boîte d’envoi. \
            Installer un anti-spam, évitez ainsi des milliers de messages par an. \
            Désabonnez-vous des newsletters que vous ne lisez pas \
            Limiter le nombre de destinataires.
            `
        },
        {
          name: "Recherches",
          content: `Installer un bloqueur de publicités, évitez ainsi l’ouverture de fenêtres et le lancement de vidéos
          non désirés. \
          Simplifier vos requêtes Web, privilégiez pour cela la mise en place de vos sites “préférés” sur la
          barre des favoris et optimisez vos recherches en utilisant des mots-clés précis. \
          Diminuer le nombre de pages consultées en utilisant des mots clés précis lors de nos recherches \
          Saisissez quand c’est possible, directement l’adresse du site dans la barre de navigation
            `
        },
        {
          name: "Ecran",
          content: `Le premier stade de « veille » est l’économiseur d’écran, qui s’active spontanément dès qu’on
          laisse le PC inutilisé. Dans ce mode, le PC consomme autant qu’en fonctionnement normal …
          aucun intérêt. Il est conseillé de supprimer l’économiseur d’écran. \
          Le second stade est la « veille écran », l’écran seul se met en veille mais le reste de l’ordinateur
fonctionne normalement. Pour sortir de ce mode il suffit de bouger la souris ou d’appuyer sur
une touche. Il est conseillé de paramétrer l’ordinateur pour qu’il passe rapidement en « veille
écran », par exemple après 5 mn d’inutilisation. \
Ensuite vient le mode « veille ordinateur classique », qui peut être activé par le PC après un
certain délai, ou sélectionné par vos soins dans le menu d’arrêt de Windows. L’écran et
l’ordinateur se mettent en veille. Pour sortir de ce mode il suffit de bouger la souris ou d’appuyer
sur une touche. Il est conseillé de paramétrer l’ordinateur pour qu’il passe rapidement en « veille
ordinateur classique », par exemple après 10 mn d’inutilisation. \
Le stade le plus pertinent en termes d’économie d’énergie est celui de la « veille prolongée » ou
« hibernation ». Dans ce mode, l’ordinateur recopie la totalité des données de la mémoire vive
sur le disque dur, avant de couper l’alimentation.
            `
        }
      ]
    };
  }

  componentDidMount() {
    setInterval(() => {
      let calculs = this.state.test;

      for (let i = 0; i < calculs.length; i++) {
        calculs[i].calculState = calculs[i].calculState + calculs[i].calcul;
      }
      this.setState({ test: calculs });
    }, 100);
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
          <Tableau test={this.state.test} />
        </div>
        <div className="row py-5">
          <div className="col-12 recommand py-5 pl-5">Nos recommandations</div>
        </div>
        <div className="row">
          <div className="col-lg-6 paddSideA">
            <div className="row paddSide">
              {this.state.cons.map(data => (
                <One data={data} />
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
