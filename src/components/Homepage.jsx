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
            <div className='Board col-lg-6'>
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
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
