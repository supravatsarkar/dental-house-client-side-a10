import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import { HashLink } from 'react-router-hash-link';


const ServiceDetails = () => {
    const [services] = useServices();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    // if (services) {
    //     const findService = services.find(service => service.id === serviceId);
    //     // setService(findService);
    //     console.log('from service details-', findService);
    // }
    useEffect(() => {
        const findService = services.find(service => service.id === serviceId);
        // console.log('from service details-', findService);
        setService(findService);
    }, [services])

    // const { name, img, shortDescription } = service;
    console.log('from service details-', service);
    return (
        <div className="custom-min-height" id="service-details-container">
            <Container className="bg-light my-5">
                {/* <h2>THis is Service Details of {serviceId}</h2> */}
                <Row xs={1} md={2} className="g-5 align-items-center">
                    <Col>
                        <img className="img-fluid rounded-3" src={service?.img} alt="" />
                    </Col>
                    <Col>
                        <h1>{service?.name}</h1>
                        <p className="fs-6">{service?.shortDescription}</p>
                        <h2>What is {service?.name}?</h2>
                        <p className="fs-6">{service?.extraDescription}</p>
                        <Badge className="d-block w-25 mx-auto my-3 fs-5 p-1" pill bg="info">Price:${service?.price}</Badge>
                        <HashLink to="/home#services">
                            <Button variant="warning" >Go Back</Button>
                        </HashLink >
                        <HashLink to="/appointment">
                            <Button className="ms-3" variant="success">Appointment Now</Button>
                        </HashLink >
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;