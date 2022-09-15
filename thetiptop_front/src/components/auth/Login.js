import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './../../css/form.css'

export const Login = () => {
    return (
        <Container>
            <Row className="justify-content-center login-size">
                <Col md="12" lg="4">
                    <Form className="login">
                        <Form.Group className="mb-3" controlId="AdresseMail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="justify-content-center">
                                Se connecter
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
