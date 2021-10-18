import React from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import './Contact.css';

const ContactUs = () => {
    return (
        <div className=" contact-section text-white" id="contact">
            <div className="contact-container py-5">
                <Container>

                    <div className="fw-bolder">
                        <h1 >Send Your Message Us</h1>
                        <h5>Dont be shy, Send your message or quiries through below form, our expert team will help you ASAP.</h5>
                    </div>
                    <Form>
                        <Row xs={1} md={2} className="g-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name*</Form.Label>
                                <Form.Control type="text" placeholder="Name*" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Message</Form.Label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                        </Form.Group>
                        <Button variant="success" >
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </div >
    );
};

export default ContactUs;