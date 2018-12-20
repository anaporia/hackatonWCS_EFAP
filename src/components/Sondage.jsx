import React from 'react';
import Header from './Header';

//import { NavLink } from 'react-router-dom';

//let donnees = [{ type: mail, quantity: '' }, { type: PC, quantity: '' }];

class Sondage extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <div className='row justify-content-center'>
          <div className=''>
            <h3>MA CONSOMMATION</h3>
            <br />
            <p>(En nombre d'heures)</p>
          </div>
          <table class='table d-flex col-lg-12'>
            <tbody>
              <tr>
                <td>PC fixe</td>
                <input
                  placeholder='PC fixe'
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>PC portable</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Smartphone</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Smart TV</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Tablette</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Facebook</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>instagram</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Snapchat</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Twitter</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Jeux en ligne</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Jeux hors ligne</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>nombre d'emails reçus et envoyés</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>nombre d'emails stockés</td>
                <input
                  placeholder=''
                  type='number'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Sondage;
