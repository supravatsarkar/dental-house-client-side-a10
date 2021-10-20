import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faFileInvoiceDollar, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';


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
            <Container >
                <h1 className="fw-bolder text-start p-3 bg-success text-white">Service Details</h1>
                <div className=" p-2 my-3">
                    <Row xs={1} md={2} className="g-5 align-items-center">
                        <Col>
                            <img className="img-fluid rounded-3" src={service?.img} alt="" />
                        </Col>
                        <Col>
                            <h1>{service?.name}</h1>
                            <p className="fs-6">{service?.shortDescription}</p>
                            <h2>What is {service?.name}?</h2>
                            <p className="fs-6">{service?.extraDescription}</p>
                            <p className="mx-auto w-50 my-3 fw-bolder fs-5 p-2 bg-info rounded-pill text-white" > <FontAwesomeIcon className="me-2 text-white" icon={faFileInvoiceDollar} /> ${service?.price}</p>
                            <HashLink to="/home#services">
                                <Button variant="warning" >Go Back</Button>
                            </HashLink >
                            <HashLink to="/appointment">
                                <Button className="ms-3" variant="success">Appointment Now</Button>
                            </HashLink >
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ServiceDetails;