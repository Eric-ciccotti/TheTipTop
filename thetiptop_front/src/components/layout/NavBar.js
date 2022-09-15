import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import { Router, Switch, Route } from 'react-router-dom'
import Accueil from '../pages/Accueil'
import Contact from '../pages/Contact'
import '../../css/navBar.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container className="my-3">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand
          href="/home"
          bsPrefix="d-xs-block d-sm-block d-md-block d-xl-none d-lg-none brand-link h4"
        >
          ThéTipTop
        </Navbar.Brand>
        <Navbar.Brand
          href="/home"
          className="d-xs-block d-sm-block d-md-block d-xl-none d-lg-none"
          bsPrefix="navbar-logo-small-device"
        >
          <img
            src={logo}
            width="40"
            height="40"
            className="align-top"
            alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/home">Accueil</Nav.Link>
            <Nav.Link href="/home">Boutique</Nav.Link>
            <Navbar.Brand
              href="/home"
              className="d-none d-md-block"
              bsPrefix="navbar-logo-no-margin"
            >
              <img
                src={logo}
                width="40"
                height="40"
                className="align-top"
                alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/login">Mon compte</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

