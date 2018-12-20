import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar dark expand='md'>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-5' navbar>
            <NavItem>
              <NavLink href='/Gamepage'>Jeu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='mt-2 ml-5 navigation' href='/Candydex'>
                trial1
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default App;
