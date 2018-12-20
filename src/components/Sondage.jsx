import React from 'react';
import Header from './Header';

//import { NavLink } from 'react-router-dom';

//let donnees = [{ type: mail, quantity: '' }, { type: PC, quantity: '' }];

class Sondage extends React.Component {
  render() {
    return (
      <div className='container-fluid px-0'>
        <Header />
        <div className='row justify-content-center'>
          <div className=''>
            <h3>MA CONSOMMATION</h3>
            <br />
            <p>(En nombre d'heures, sauf pour les mails)</p>
          </div>
          <table class='table d-flex col-lg-12'>
            <tbody className='col-lg-3'>
              <tr>
                <td>PC fixe</td>
                <input
                  placeholder='PC fixe'
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>PC portable</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Smartphone</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Tablette</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
            </tbody>
            <tbody className='col-lg-3'>
              <tr>
                <td>Smart TV</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Console de jeux</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Réseaux sociaux</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Video / Streaming</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
            </tbody>
            <tbody className='col-lg-3'>
              <tr>
                <td>Recherche internet</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>Jeux en ligne</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>nombre de mails reçus et envoyés</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
              <tr>
                <td>nombre de mails stockés</td>
                <input
                  placeholder=''
                  type='text'
                  id='name'
                  className='name'
                  size='10'
                />
              </tr>
            </tbody>
          </table>
          <button type='button' class='btn btn-success'>
            Je valide
          </button>
        </div>
      </div>
    );
  }
}

export default Sondage;
