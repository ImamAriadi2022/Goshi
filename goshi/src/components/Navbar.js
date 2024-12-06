import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // Optional, for additional styling

function NavbarApp() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src="image.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          {' '}Goshi
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
