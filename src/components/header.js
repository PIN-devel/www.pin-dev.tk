import PropTypes from "prop-types"
import React, { useState } from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar fixed="top" light expand="sm">
        <div className="container">
          <NavbarBrand href="/">{siteTitle}</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/tags/">Tags</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://secure-woodland-91354.herokuapp.com/">Portfolio</NavLink>
              </NavItem>            
            </Nav>
          </Collapse>
        </div>
      </Navbar>
  );
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
