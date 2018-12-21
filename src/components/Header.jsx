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
      <Navbar className='py-4' color='success' light expand='md'>
        <NavbarBrand>NOM EQUIPE</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav
            bsstyle='pills'
            justified
            activekey={1}
            onSelect={key => this.handleSelect(key)}
            className='ml-auto'
            navbar
          >
            <NavItem eventkey={1}>
              <NavLink href='/'>Homepage</NavLink>
            </NavItem>
            <NavItem eventkey={2}>
              <NavLink href='/sondage'>Sondage</NavLink>
            </NavItem>
            <NavItem eventkey={3}>
              <NavLink href='/conseils'>Conséils</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
