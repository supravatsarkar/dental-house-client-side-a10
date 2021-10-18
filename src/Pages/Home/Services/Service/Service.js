import { faTeeth, faTooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, shortDescription, img } = props.service;
    return (
        <Col >
            <Card className="shadow service-card" >
                <Card.Img className="border-0 rounded-circle w-100 d-block mx-auto px-5 py-1 card-img" variant="top" src={img} />
                {/* <FontAwesomeIcon className="service-fa-icon" icon={faTooth} /> */}
                <div >
                    <Card.Body className="service-bottom-sec">
                        <Card.Title className="text-success ">{name}</Card.Title>
                        <Card.Text>
                            {shortDescription}
                        </Card.Text>
                    </Card.Body>
                    <Button className="w-100" variant="success">More Details</Button>
                </div>
            </Card>
        </Col>
    );
};

export default Service;
