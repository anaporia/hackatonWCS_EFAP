import React from 'react';
import Header from './Header';
import Footer from './Footer';
import YouTube from 'react-youtube';
import { Button } from 'reactstrap';
import Slider from './Slider';

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
  /*
  consoJ = (min, max) => {
    let number = Math.random();
    this.setState({ consoJour: number });
    this.consoN(min - 10, max - 20);
  };
  consoN = (min, max) => {
    let number2 = Math.random;
    this.setState({ consoN: number2 });
  };
*/
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <YouTube
          videoId='Q6ONgc6E1z0'
          className='player embed-responsive-item'
          min-height='200vh'
        />
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row align-items-center col-lg-12'>
            <div className='Board'>
              <div className='col-lg-12'>
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
                <Button
                  color='primary'
                  size='sm' /*onClick={this.consoJ(47, 68)}*/
                >
                  Valider
                </Button>
              </div>

              <table className=' Table text-center' border='1px'>
                <thead>
                  <tr>
                    <th>Période de la journée</th>
                    <th>Consommations en Kw/H</th>
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
                      <b>47.2</b>
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
                      <b>47.2</b>
                    </td>
                  </tr>
                </tbody>
                <tfoot />
              </table>
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
        <Footer buttonLabel='Legal mentions' px-0 mx-0 />
      </div>
    );
  }
}
export default Homepage;
