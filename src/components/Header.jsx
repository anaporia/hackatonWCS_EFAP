import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar className='py-2 bg-white' id='fontnavbar' expand='md'>
        <NavbarBrand id='navbarbrand'>GREEN TECH</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse id='navjust' isOpen={this.state.isOpen} navbar>
          <Nav
            navbar
            justified
            activekey={1}
            onSelect={key => this.handleSelect(key)}
          >
            <NavItem id='navitem1' eventkey={1}>
              <NavLink href='/'>Homepage</NavLink>
            </NavItem>
            <NavItem id='navitem1' eventkey={2}>
              <NavLink href='/sondage'>Sondage</NavLink>
            </NavItem>
            <NavItem id='navitem1' eventkey={3}>
              <NavLink href='/conseils'>Conseils</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
