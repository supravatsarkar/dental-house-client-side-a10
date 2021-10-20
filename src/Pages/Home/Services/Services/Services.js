import React from 'react';
import Service from '../Service/Service';
import { Container, Row, } from 'react-bootstrap';
import useServices from '../../../../hooks/useServices';

const Services = () => {
    const [services] = useServices();
    // if (!services) {
    //     return <div><Spinner animation="grow" variant="success" /></div>
    // }
    console.log(services);
    // useEffect(() => {
    //     fetch('./fakeServices.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])
    return (
        <Container className="my-5 " id="services">
            <h1 className="fw-bolder">Dental Care Services</h1>
            <h6 className="mb-3 fw-bolder text-success">Specialities</h6>
            <Row xs={1} md={2} lg={3} className="g-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;