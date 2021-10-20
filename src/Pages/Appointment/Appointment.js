import React from 'react';
import { Container, Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import { Controller, Select, Input } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices';

const Appointment = () => {
    const [services] = useServices();
    const { user } = useAuth();
    console.log(user);
    return (
        <div className="custom-min-height">
            <Container>
                <h1 className="fw-bolder text-start p-3 bg-success text-white">Appointment</h1>
                <div className="my-2">
                    <h1>Make an Appointment</h1>
                    {/* <p>Here you can get doctors available time & you can get your perfect visiting time to hospital.</p> */}
                    <Form cla>
                        <Row className="mb-3 fs-5">
                            <Form.Group xs={12} md={4} as={Col} controlId="formGridState">
                                <Form.Label>Service</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose Service</option>
                                    {services.map(service => <option
                                        key={service.id}
                                    >{service.name} </option>)}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group xs={12} md={4} as={Col} controlId="formGridZip">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group xs={12} md={4} as={Col} controlId="formGridZip">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="time" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group xs={12} md={6} as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Patent Name" value={user.displayName} />
                            </Form.Group>

                            <Form.Group xs={12} md={6} as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={user.email} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group xs={12} md={6} as={Col} controlId="formGridZip">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter Phone Number" value={user.phoneNumber} />
                            </Form.Group>
                            <Form.Group xs={12} md={6} as={Col} controlId="formGridZip">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter Age" />
                            </Form.Group>

                        </Row>

                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Type description here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <Form.Group className="mb-3 text-start" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I agree to Dental House Terms Of Use and Privacy Policy" />
                        </Form.Group>

                        <Button variant="success" >
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Appointment;