import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../css/header.css';

const Header = ({ children }) => {
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <div className="bloc-content position-relative top-50 start-50 translate-middle">
                            {children}
                            <h1 className="fw-light">Saisir votre code</h1>
                            <Form>
                                <Form.Group
                                    className="mx-auto my-3 w-100"
                                    controlId="formSaisirCode"
                                >
                                    <Form.Control type="text" placeholder="Votre code" />
                                    <Form.Text className="text-muted">
                                        Code à usage unique
                                    </Form.Text>
                                </Form.Group>
                                <Button className="w-100" variant="dark">Découvrir votre cadeau</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
