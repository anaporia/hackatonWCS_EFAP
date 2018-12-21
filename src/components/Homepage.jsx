import React from 'react';
import Header from './Header';
import Footer from './Footer';
import YouTube from 'react-youtube';
import { Table } from 'reactstrap';

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

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <div className='container1  mb-lg-5 mt-lg-5 embed-responsive-16by9'>
          <div className='row'>
            <div className='youtube2 col-lg-6 embed-responsive embed-responsive-16by9'>
              <YouTube
                videoId='Q6ONgc6E1z0'
                className='player embed-responsive-item'
              />
            </div>

            <div className='col-lg-4 offset-lg-1 d-flex d-flex align-items-center'>
              <Table>
                <thead>
                  <tr>
                    <th />
                    <th>France</th>
                    <th>Consommation KW/h</th>
                    <th>Emissison co2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Jour</td>
                    <td>415000</td>
                    <td>350750</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Nuit</td>
                    <td>207000</td>
                    <td>174578</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <Footer buttonLabel='Legal mentions' px-0 mx-0 />
      </div>
    );
  }
}
export default Homepage;
