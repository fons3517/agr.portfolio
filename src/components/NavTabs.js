import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavTabs() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Alfonso Robles</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="aboutme">About Me</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavTabs
