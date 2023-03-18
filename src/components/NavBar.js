/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo2 from './../asset/img/LogoCruz.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";



function Barra() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
      <Container>
                <Navbar.Brand href="#home">
                    <img
                    src={logo2}
                    width="45"
                    height="55"
                    className="d-inline-block align-top"
                    alt="Iglesia El Encuentro logo"
                    />
                </Navbar.Brand>
                 {/* <Navbar.Brand href="#home">El Encuentro</Navbar.Brand> */}
                <NavbarToggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#features">Nosotros</Nav.Link>
                    <Nav.Link href="#pricing">Actividades</Nav.Link>
                    <Nav.Link href="#features">Testimonios</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                    <NavDropdown title="Ministerios" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Alabanza</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Accion Social
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Enseñanza</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Informes
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                </Nav> */}
                </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;
