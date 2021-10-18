import { faTeeth, faToot, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, shortDescription, img } = props.service;
    const handleClickDetails = () => {

    }
    return (
        <Col >
            <Card className="shadow service-card" >
                <Card.Img className="border-0 rounded-circle w-100 d-block mx-auto px-5 py-1 card-img" variant="top" src={img} />

                <div >
                    <Card.Body className="service-bottom-sec">
                        <Card.Title className="text-success ">{name}</Card.Title>
                        <Card.Text>
                            {shortDescription}
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/service/${id}`}>
                        <Button className="w-100" variant="success">More Details <FontAwesomeIcon className="" icon={faAngleDoubleRight} /></Button>
                    </Link>
                </div>
            </Card>
        </Col>
    );
};

export default Service;
