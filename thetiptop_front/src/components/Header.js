import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <div class="bloc-content position-absolute top-50 start-50 translate-middle">
              <h1 class="fw-light">Saisir votre code</h1>

              <Form>
                <Form.Group
                  className="mx-auto my-3 w-75"
                  controlId="formSaisirCode"
                >
                  <Form.Control type="text" placeholder="Votre code" />
                  <Form.Text className="text-muted">
                    Code à usage unique
                  </Form.Text>
                </Form.Group>

                <Button variant="dark">Découvrir votre cadeau</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
