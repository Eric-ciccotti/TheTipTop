import React from 'react'
import logo from '../../assets/logo.png'
import logoInstagram from '../../assets/logo instagram.png'
import logoLinkedin from '../../assets/logo linkedin.png'
import { Button, Col, Container, Row, Nav } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import '../../css/footer.css'


const Footer = () => {
    return (
        <>
            <footer className="pb-4 pb-lg-5 px-5 bg-light">
                <Row className="show-grid">
                    <Col className="d-flex justify-content-center">
                        <Button variant="dark" className='mb-4 mt-5'>Boutique</Button>
                    </Col>
                </Row>

                <Container>
                    <Row className="show-grid">
                        <Col sm={6} md={3}>
                            <Image fluid="true" src={logo} alt="logo" />
                        </Col>
                        <Col sm={6} md={3} className="d-flex flex-column justify-content-md-around justify-content-sm-center align-items-center" >

                            <p className="row" href="https://bit.ly/3TWewJc" target="_blank" rel="noreferrer">18 rue Léon Frot, 75 011 Paris</p>
                            <p className="row" href="tel:01.65.38.94.23">01.65.38.94.23</p>
                            <br />
                            <a className="row" href="mailto:contact@thetiptop.com" target="_blank" rel="noreferrer">contact@thetiptop.com</a>

                        </Col>
                        <Col sm={6} md={3} className="d-md-flex flex-md-column justify-content-around align-items-center mt-1">
                            <Image fluid="true" src={logoInstagram} alt="lien instagram" width="40"
                                height="40" />
                            <Image fluid="true" src={logoLinkedin} alt="lien linkedin" width="40"
                                height="40" />
                        </Col>

                        <Col sm={6} md={3} className="d-flex flex-column justify-content-md-around mt-1">

                            <Nav defaultActiveKey="/home" className="flex-column ">
                                <Nav.Link href="/home">CGU</Nav.Link>
                                <Nav.Link >CGV</Nav.Link>
                                <Nav.Link >Mentions légales</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>

            </footer>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Thé Tip Top © 2022
            </div>
        </>




    )
}

export default Footer