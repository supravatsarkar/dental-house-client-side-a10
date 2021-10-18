import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../../images/about.jpg';
const AboutUs = () => {
    return (
        <div className="my-5 py-5 bg-light">
            <Container className="">
                <h1 className="mb-3 fw-bolder">You are always safe with us , we are ready to help any time.</h1>
                <Row xs={1} md={2} className="g-5 align-items-center">
                    <Col>
                        <img className="img-fluid rounded" src={about} alt="" />
                    </Col>
                    <Col>
                        <h5 className="text-start text-success">Welcome to Dental Home</h5>
                        <p className="text-start text-muted">
                            Dental Home was started in the year 2020 as a small private dental clinic in India, West Bengal. Looking for affordable dental care?
                        </p>
                        <p className="text-start text-muted">
                            To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, pain resultant pleasure praising teachings of the great explorer
                        </p>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default AboutUs;