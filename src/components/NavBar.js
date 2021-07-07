import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
      <Navbar bg="dark" expand="lg">
        <div className="container">
      <Navbar.Brand  href="#home"><span className="orange-color">jahid </span>opu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <li>
          <Nav.Link href="#home"><span>Home</span></Nav.Link>
          </li>
          <li> <Nav.Link href="#link"><span>skills</span></Nav.Link></li>
          <li> <Nav.Link href="#link"><span>projects</span></Nav.Link></li>
          <li> <Nav.Link href="#link"><span>contact</span></Nav.Link></li>
        
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    );
};

export default NavBar;