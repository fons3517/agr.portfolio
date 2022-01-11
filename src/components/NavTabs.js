import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavTabs() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Alfonso Robles</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">About Me</Nav.Link>
          <Nav.Link href="#features">Resume</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Nav.Link href="#pricing">Portfolio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavTabs
