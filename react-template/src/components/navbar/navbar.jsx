import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navbar/navbar.css';
import logo_color from '../../assets/Img/logo_color.png';
export default function NavScroll(){

    return (
        <div>
            <Navbar className="nav" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo_color} className="nav__logo"alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className="nav__link" href="#action1">Inicio</Nav.Link>
                            <Nav.Link className="nav__link" href="#action2">Nosotros</Nav.Link>
                            <Nav.Link className="nav__link" href="#action3">Novedades</Nav.Link>
                            <NavDropdown className="nav__link" title="Donar" id="navbarScrollingDropdown">
                                <NavDropdown.Item className="nav__link__item" href="#action4">Dinero</NavDropdown.Item>
                                <NavDropdown.Item className="nav__link__item" href="#action5">Comida</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="nav__link__item" href="#action6">Otro</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="nav__link" title="Voluntariado" id="navbarScrollingDropdown">
                                <NavDropdown.Item className="nav__link__item" href="#action4">Anotate</NavDropdown.Item>
                                <NavDropdown.Item className="nav__link__item" href="#action5">Colaborar</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="nav__link__item" href="#action6">Otro</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Búsqueda" className="me-2" aria-label="Search"/>
                            <Button className="search__btn">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="separator"></div>
        </div>     
          );
        }