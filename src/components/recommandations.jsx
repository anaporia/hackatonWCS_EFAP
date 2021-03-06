import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './recommandations.css';
import Petition from './Petition';
import Header from './Header';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';

const Diagram = props => {
  let tab = [];
  let tabName = [];
  let color = [
    '#aad7a9',
    '#348b5',
    '#3cd74b',
    '#fd62d9',
    '#cda889',
    '#bfb1e5',
    '#c5eff2',
    '#3bf859',
    '#5f8a01',
    '#b604cf',
    '#66354f',
    '#78392a'
  ];
  props.states.map(data => tab.push(data.calcul));
  props.states.map(data => tabName.push(data.name));

  const data = {
    labels: tabName,
    datasets: [
      {
        data: tab,
        backgroundColor: color
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: 'La consommation de Co2 de tes appareils',
      fontFamily: 'Roboto',
      fontSize: 20
    },
    legend: {
      position: 'left',
      labels: {
        fontSize: 20
      }
    }
  };

  return (
    <div className='col-lg-10 d-flex justify-content-center'>
      <Pie data={data} options={options} height={10} width={10} />
    </div>
  );
};

const Tableau = props => {
  return (
    <React.Fragment>
      <div className='square col-12 d-flex justify-content-center'>
        <div className='col-8 py-4 tableStats'>
          <div className='col-12 py-2 d-flex justify-content-center'>
            <h4 style={{ color: '#01bb53', fontWeight: 'bold' }}>
              Depuis que vous êtes sur cette page, vous avez consommé en moyenne
              :
            </h4>
          </div>
          <div className='row alignBlock col-12 py-2'>
            {props.test.map(data => {
              if (data.calculState !== 0) {
                let c = '';
                for (let a = 0; a < 10; a++) {
                  c = c + String(data.calculState)[a];
                }
                c = Number(c);
                return (
                  <div className='col-lg-2 m-2 subSquare'>
                    <div className='col-12 py-2 d-flex justify-content-center'>
                      {data.name}
                    </div>
                    <div className='col-12 py-4 number'>{c + ' Kg de Co2'}</div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

class recommandations extends Component {
  constructor(props) {
    super(props);
    try {
      this.state = {
        tabColor: [],
        objet: {},
        test: [
          {
            name: 'Ordi fixe :',
            calcul: (props.location.state.states.PCfixe * 0.06472603) / 864000,
            calculState: 0
          },
          {
            name: 'Ordi portable :',
            calcul:
              (props.location.state.states.PCportable * 0.05787671) / 864000,
            calculState: 0
          },
          {
            name: 'Smartphone :',
            calcul:
              (props.location.state.states.smartphone * 0.02731668) / 864000,
            calculState: 0
          },
          {
            name: 'Télé connecté :',
            calcul:
              (props.location.state.states.tablette * 0.34240286) / 864000,
            calculState: 0
          },
          {
            name: 'Tablettes :',
            calcul: (props.location.state.states.smartTV * 0.09315068) / 864000,
            calculState: 0
          },
          {
            name: 'Console de jeux de salon :',
            calcul: (props.location.state.states.console * 0.13972603) / 864000,
            calculState: 0
          },
          {
            name: 'Réseaux sociaux :',
            calcul: (props.location.state.states.social * 0.255) / 864000,
            calculState: 0
          },
          {
            name: 'Vidéo / Streaming :',
            calcul: (props.location.state.states.streaming * 0.51) / 864000,
            calculState: 0
          },
          {
            name: 'Jeux en ligne :',
            calcul: (props.location.state.states.isearch * 0.51) / 864000,
            calculState: 0
          },
          {
            name: 'Recherches internet :',
            calcul: (props.location.state.states.online * 0.007) / 864000,
            calculState: 0
          },
          {
            name: 'Nb de mails reçus / envoyés :',
            calcul: (props.location.state.states.email * 0.02) / 864000,
            calculState: 0
          },
          {
            name: 'Nb de mails stockés :',
            calcul: (props.location.state.states.emailStorage * 0.01) / 864000,
            calculState: 0
          }
        ],
        cons: [
          {
            name: 'PC fixe',
            content:
              'Choisir un pc portable car il consomme 4 fois moins d’électricité qu’un ordinateur fixe pour des performances équivalentes.',
            ref: 'PCfixe'
          },
          {
            name: 'PC portable',
            content: `Utiliser au maximum votre batterie au lieu de le brancher (tout en pensant à ne pas laisser le chargeur branché dans la prise). \
              Choisissez votre ordinateur car vous n’avez pas besoin d’un pc surpuissant et donc très consommateur d’électricité pour regarder des mails, \
              des films ou discuter sur internet.`,
            ref: 'PCportable'
          },
          {
            name: 'Mail',
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
              `,
            ref: 'email'
          },
          {
            name: 'Recherches',
            content: `Installer un bloqueur de publicités, évitez ainsi l’ouverture de fenêtres et le lancement de vidéos
            non désirés. \
            Simplifier vos requêtes Web, privilégiez pour cela la mise en place de vos sites “préférés” sur la
            barre des favoris et optimisez vos recherches en utilisant des mots-clés précis. \
            Diminuer le nombre de pages consultées en utilisant des mots clés précis lors de nos recherches \
            Saisissez quand c’est possible, directement l’adresse du site dans la barre de navigation
              `,
            ref: 'isearch'
          },
          {
            name: 'Ecran',
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
              `,
            ref: 'streaming'
          }
        ],
        switch: false
      };
    } catch {
      this.state = {
        switch: true
      };
    }
  }

  componentDidMount() {
    if (this.state.switch === false) {
      setInterval(() => {
        let calculs = this.state.test;

        for (let i = 0; i < calculs.length; i++) {
          calculs[i].calculState = calculs[i].calculState + calculs[i].calcul;
        }
        this.setState({
          test: calculs,
          objet: this.props.location.state.states
        });
      }, 100);
    }
  }

  render() {
    if (this.state.switch) {
      return <Redirect to='/sondage' from='/conseils' />;
    }

    return (
      <div className='container-fluid px-0'>
        <Header />
        <div className='row d-flex justify-content-center'>
          <div className='col-8 head'>
            Parce qu'on ne pourra jamais se passer de nos séries préférées, de
            nos conversations avec nos amis, de nos moments d'égarement sur
            Youtube, ou de nos recherches sur internet...
            <br /> Nous pouvons quand même agir pour opter pour une meilleure
            façon de consommer d'une manière plus maitrisée !
          </div>
        </div>

        <div className='row'>
          <Tableau test={this.state.test} />
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-8 legendDiv py-5 mt-5'>
            Vous trouvez que les compteurs s'affolent vite ? Alors consultez
            tout de suite les recommandations que nous avons selectionnées pour
            vous afin de réduire votre consommation de CO2 !
          </div>
        </div>
        <div className='row py-5'>
          <div className='col-12 recommand py-5 pl-5'>Nos recommandations</div>
        </div>
        <div className='row'>
          <div className='col-lg-6 paddSideA'>
            <div className='row paddSide'>
              {this.props.location.state.states.PCfixe !== null && (
                <div className='col-lg-12 d-flex justify-content-center    borderToGet'>
                  <div className='col-lg-12 my-4 d-flex'>
                    <div className='col-lg-4 p-2  d-flex justify-content-center'>
                      <img
                        src='https://png.pngtree.com/element_origin_min_pic/17/09/12/b0d90cc1ddf1e9575bc282324f4178fa.jpg'
                        alt=''
                        className='cardRec'
                      />
                    </div>
                    <div className='col-lg-9'>
                      <div className='col-12 title'>
                        {this.state.cons[0].name}
                      </div>
                      <div className='col-12 content p-2'>
                        {this.state.cons[0].content}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {this.props.location.state.states.PCportable !== null && (
                <div className='col-lg-12 d-flex justify-content-center    borderToGet'>
                  <div className='col-lg-12 my-4 d-flex'>
                    <div className='col-lg-4 p-2 d-flex justify-content-center'>
                      <img
                        src='https://png.pngtree.com/element_origin_min_pic/17/01/08/30aae9d5e15e79b240ac24ef3da14ac3.jpg'
                        alt=''
                        className='cardRec'
                      />
                    </div>
                    <div className='col-lg-9'>
                      <div className='col-12 title'>
                        {this.state.cons[1].name}
                      </div>
                      <div className='col-12 content p-2'>
                        {this.state.cons[1].content}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {this.props.location.state.states.email !== null && (
                <div className='col-lg-12 d-flex justify-content-center     borderToGet'>
                  <div className='col-12 my-4 d-flex'>
                    <div className='col-lg-4 p-2 d-flex justify-content-center'>
                      <img
                        src='https://www.freeiconspng.com/uploads/email-marketing-icon-email-icon-1.png'
                        alt=''
                        className='cardRec'
                      />
                    </div>
                    <div className='9'>
                      <div className='col-12 title'>
                        {this.state.cons[2].name}
                      </div>
                      <div className='col-12 content p-2'>
                        {this.state.cons[2].content}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {this.props.location.state.states.isearch !== null && (
                <div className='col-lg-12 d-flex justify-content-center    borderToGet'>
                  <div className='col-lg-12 my-4 d-flex'>
                    <div className='col-lg-4 p-2 d-flex  justify-content-center'>
                      <img
                        src='https://img.icons8.com/metro/1600/search.png'
                        alt=''
                        className='cardRec'
                      />
                    </div>
                    <div className='9'>
                      <div className='col-12 title'>
                        {this.state.cons[3].name}
                      </div>
                      <div className='col-12 content p-2'>
                        {this.state.cons[3].content}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {this.props.location.state.states.streaming !== null && (
                <div className='col-lg-12 d-flex justify-content-center   borderToGet'>
                  <div className='col-lg-12 my-4 d-flex'>
                    <div className='col-lg-4 p-2 d-flex justify-content-center'>
                      <img
                        src='https://img.icons8.com/metro/1600/widescreen-tv.png'
                        alt=''
                        className='cardRec'
                      />
                    </div>
                    <div className='9'>
                      <div className='col-12 title'>
                        {this.state.cons[4].name}
                      </div>
                      <div className='col-12 content p-2'>
                        {this.state.cons[4].content}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='col-lg-6'>
            <Diagram states={this.state.test} />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 espacePetition'>
            <Petition />
          </div>
        </div>
        <Footer buttonLabel='Legal mentions' px-0 mx-0 />
      </div>
    );
  }
}

export default recommandations;
