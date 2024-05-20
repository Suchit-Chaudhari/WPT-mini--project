import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavigationBar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleDeleteAcc = async () => {
        const isConfirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:6800/customer/delete/${user[0].id}`);
                alert("Your account has been successfully deleted.");
                logout();
                navigate('/'); // Redirect to the home page after logout
            } catch (error) {
                console.error("There was an error deleting the account:", error);
                alert("There was an error deleting your account. Please try again.");
            }
        }
    }

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
                            <LinkContainer to={'/properties'}>
                                <Nav.Link className="mx-2">Properties</Nav.Link>
                            </LinkContainer>
                            {user ? (
                                <>  
                                    <NavDropdown title="Account" id="basic-nav-dropdown">
                                        <LinkContainer to={'/editUser'}>
                                            <NavDropdown.Item>
                                                Edit Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleDeleteAcc}>Delete My Account</NavDropdown.Item>
                                    </NavDropdown>
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
