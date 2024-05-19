import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../Context/AuthContext';

const NavigationBar = () => {
    const { user, logout } = useAuth();

    return (
        <div className='sticky-top'>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className='sticky-top'>
                <Container>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand>Star Real Estate Services</Navbar.Brand>
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
                            {user ? (
                                <>  
                                    <NavDropdown title="Account" id="basic-nav-dropdown">
                                        
                                        
                                        <LinkContainer to={'/editUser'}>
                                          <NavDropdown.Item href="#action/3.2">
                                            Edit Profile
                                          </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        
                                      </NavDropdown>
                                    {/* <Nav.Link className="mx-2" onClick={logout}>Logout</Nav.Link> */}
                                    
                                </>
                            ) : (
                                <>
                                    <LinkContainer to={'/sign-in'}>
                                        <Nav.Link className="mx-2">Sign-in</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to={'/sign-up'}>
                                        <Nav.Link className="mx-2">Sign-Up</Nav.Link>
                                    </LinkContainer>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
