import React from 'react';
import Header from './Header';

import YouTube from 'react-youtube';
class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row align-items-center'>
            <div className=' Board col-lg-6'>
              <table className=' Table text-center' border='1px'>
                <tr>
                  <th rowspan='2'>image</th>
                  <td>Consommation KW</td>
                </tr>
                <tr>
                  <td>Consommation KW</td>
                </tr>
              </table>

              <table className=' Table text-center' border='1px'>
                <tr>
                  <th rowspan='2'>image</th>
                  <td>Consommation KW</td>
                </tr>
                <tr>
                  <td>Consommation KW</td>
                </tr>
              </table>
            </div>
            <div className='Youtube col-lg-6'>
              <YouTube
                videoId='Fki8FxTryuI'
                className='embed-responsive-item'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
