import React from 'react';
import Header from './Header';
import YouTube from 'react-youtube';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consoJour: 0,
      consoN: 0
    };
  }

  handleClick = () => {
    this.props.history.push('/sondage');
  };

  consoJ = (min, max) => {
    let number = Math.random();
    this.setState({ consoJour: number });
    this.consoN(min - 10, max - 20);
  };
  consoN = (min, max) => {
    let number2 = Math.random;
    this.setState({ consoN: number2 });
  };

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row align-items-center'>
            <div className='Board col-lg-6'>
              <div>
                <label>Pays : </label>
                <select>
                  <option>France</option>
                  <option>Angleterre</option>
                  <option>Italie</option>
                  <option>Espagne</option>
                </select>

                <label>Ville : </label>
                <select>
                  <option>Lille</option>
                  <option>Lyon</option>
                  <option>Paris</option>
                  <option>Marseille</option>
                  <option>Rennes</option>
                  <option>Londres</option>
                  <option>Milan</option>
                  <option>Madrid</option>
                </select>
                <button className='validation' onClick={this.consoJ(47, 68)}>
                  Valider
                </button>
              </div>

              <table className=' Table text-center' border='1px'>
                <thead>
                  <tr>
                    <th colSpan='2'>
                      Consommations mondiales d'energie Jours / nuits
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th rowSpan='2' className='container'>
                      <img
                        className='picture1'
                        src='./assets/sun.png'
                        alt='cook'
                      />
                    </th>
                    <td rowSpan='2' className='td'>
                      {this.state.consoJ}
                    </td>
                  </tr>
                </tbody>
                <tfoot />
              </table>

              <table className=' Table text-center' border='1px'>
                <tbody>
                  <tr>
                    <th rowSpan='2' className='container'>
                      <img
                        className='picture1'
                        src='./assets/moon.png'
                        alt='cook'
                      />
                    </th>
                    <td rowSpan='2' className='td'>
                      {this.state.consoN}
                    </td>
                  </tr>
                </tbody>
                <tfoot />
              </table>
            </div>
            <div className='Youtube col-lg-6'>
              <YouTube
                videoId='Q6ONgc6E1z0'
                className='player embed-responsive-item'
                controls={1}
              />
            </div>
            <div className='container'>
              <div className='row'>
                <div className='button'>
                  <button
                    onClick={this.handleClick}
                    type='button'
                    className='btn btn-primary'
                  >
                    Sondage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
