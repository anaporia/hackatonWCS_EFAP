import React from 'react';
import Header from './Header';
import Footer from './Footer';
import YouTube from 'react-youtube';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.history.push('/sondage');
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
              </div>
              <div>
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
              </div>

              <table className=' Table text-center' border='1px'>
                <tr>
                  <th rowSpan='2' className='container'>
                    <img
                      className='picture1'
                      src='./assets/sun.png'
                      alt='cook'
                    />
                  </th>
                  <td className='td'>Consommation KW</td>
                </tr>

                <tr>
                  <td>Consommation KW</td>
                </tr>
              </table>

              <table className=' Table text-center' border='1px'>
                <tr>
                  <th rowSpan='2' className='container'>
                    <img
                      className='picture1'
                      src='./assets/moon.png'
                      alt='cook'
                    />
                  </th>
                  <td>Consommation KW</td>
                </tr>
                <tr>
                  <td>Consommation KW</td>
                </tr>
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
                    class='btn btn-primary'
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
