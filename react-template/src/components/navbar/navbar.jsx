import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navbar/navbar.css';
import logo_color from '../../assets/Img/logo_color.png';
export default function NavScroll(){

    return (
        <>
            <Navbar className="nav" expand="lg">
                    <Navbar.Brand href="#"><img src={logo_color} className="nav__logo"alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className="nav__link" href="/">Inicio</Nav.Link>
                            <Nav.Link className="nav__link" href="#about_section">Nosotros</Nav.Link>
                            <Nav.Link className="nav__link" href="#news_section">Novedades</Nav.Link>
                            <NavDropdown className="nav__link" href="/dontation" title="Donar" id="navbarScrollingDropdown">
                                <NavDropdown.Item className="nav__link__item" href="/donation">Dinero</NavDropdown.Item>
                                <NavDropdown.Item className="nav__link__item" href="/donation">Comida</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="nav__link__item" href="/donation">Otro</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="nav__link" title="Voluntariado" href='/volunteer' id="navbarScrollingDropdown">
                                <NavDropdown.Item className="nav__link__item" href="/volunteer">Anotate</NavDropdown.Item>
                                <NavDropdown.Item className="nav__link__item" href="/volunteer">Colaborar</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="nav__link__item" href="/volunteer">Otro</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Búsqueda" className="me-2" aria-label="Search"/>
                            <Button className="search__btn" href="/login">Login</Button>
                        </Form>
                    </Navbar.Collapse>
            </Navbar>
            <div className="separator"></div>
        </>
    );
}