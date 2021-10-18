import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, shortDescription, img } = props.service;
    return (
        <Col >
            <Card className="shadow service-card" >
                <Card.Img className="border-0 rounded-circle w-100 d-block mx-auto px-5 py-1 card-img" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-success">{name}</Card.Title>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                </Card.Body>
                <Button variant="success">Details</Button>
            </Card>
        </Col>
    );
};

export default Service;

{/* <div>
                <h3></h3>
                <img  src= alt="" />
                <p>{}</p>
            </div> */}