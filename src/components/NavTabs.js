import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavTabs() {
  return (
    <NavTabs bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </NavTabs>
  )
}
export default NavTabs;