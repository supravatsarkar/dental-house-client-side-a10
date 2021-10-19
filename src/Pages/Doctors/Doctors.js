import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./fakeDoctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (

        <div className="custom-min-height">
            <Container>
                <h1 className="fw-bolder text-start p-3 bg-success text-white">Doctors</h1>
                <div>
                    {doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >{doctor.name}</Doctor>)}
                </div>
            </Container>
        </div>

    );
};

export default Doctors;