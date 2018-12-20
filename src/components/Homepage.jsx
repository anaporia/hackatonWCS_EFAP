import React from 'react';
import Header from './Header';

import YouTube from 'react-youtube';
class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <table border='1px' width='80%'>
                <tr>
                  <th rowspan='2'>image</th>
                  <td>Consommation KW</td>
                </tr>
                <tr>
                  <td>Consommation KW</td>
                </tr>
              </table>

              <table border='1px' width='80%'>
                <tr>
                  <th rowspan='2'>image</th>
                  <td>Consommation KW</td>
                </tr>
                <tr>
                  <td>Consommation KW</td>
                </tr>
              </table>
            </div>
            <div className='col-lg-6  col-md-10 offset-md-1 mt-5 embed-responsive embed-responsive-16by9 youtube-cadre'>
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
