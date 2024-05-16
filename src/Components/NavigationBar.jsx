import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import '../css/NavigationBar.css';

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <LinkContainer to={'/'}>
            <Navbar.Brand>Real Estate Services</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to={'/'}>
                <Nav.Link className="mx-2">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/about'}>
                <Nav.Link className="mx-2">About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/contact'}>
                <Nav.Link className="mx-2">Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/sign-in'}>
                <Nav.Link className="mx-2">Sign-in</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/sign-up'}>
                <Nav.Link className="mx-2">Sign-Up</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
