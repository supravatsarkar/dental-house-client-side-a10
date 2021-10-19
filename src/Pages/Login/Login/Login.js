
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirabase';

const Login = () => {
    const { signInUsingGoogle, user } = useFirebase();
    console.log('from login component-', user);
    return (
        <Container>
            <Row className="g-5 mb-3">
                <Col></Col>
                <Col xs={9} sm={7} lg={4}>
                    <div>
                        <h4>Please Login</h4>
                        <Button onClick={signInUsingGoogle} className="fw-bolder" variant="danger"> <FontAwesomeIcon className="me-2" icon={faGoogle} />Google</Button>
                        <h5>__________ or __________</h5>
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="text-start">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="fw-bolder" variant="danger" type="submit">
                                Login
                            </Button>
                            <br />

                            <Link to="/register" className="me-3">
                                <span >New User?</span>
                            </Link>
                            <span >Reset Password</span>
                            <p> <small className="text-muted">
                                By signing in, you agree to our Terms Of Use and Privacy Policy In addition, you also agree to receive email messages from us about your experience with our service, and features you can use.
                            </small>
                            </p>
                        </Form>
                    </div>
                </Col>
                <Col></Col>
            </Row>

        </Container>
    );
};

export default Login;