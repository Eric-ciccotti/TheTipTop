import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './../../css/form.css'

export const Register = () => {
    return (
        <Container>
            <Row className="justify-content-center login-size">
                <Col md="4" xs="12">
                    <Form className="login">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNom">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPrenom">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text"
                                />
                            </Form.Group>

                        </Row>

                        <Form.Group as={Col} controlId="fromGridAdresseMail" placeholder="dupont@gmail.com...">
                            <Form.Label>Adresse Mail</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit" className="justify-content-center">
                                S'enregistrer
                            </Button>
                        </Form.Group>


                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
