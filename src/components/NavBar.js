/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import {Navbar, Brand, Container} from 'react-bootstrap';

import logo from './../asset/img/logo.svg';
import logo2 from './../asset/img/LogoCruz.png';



function Barra () {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logo2}
                width="30"
                height="30"
                className="d-inline-block align-center"
                />{' '}
                EL ENCUENTRO
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Barra;