import React from 'react';

const Doctor = (props) => {
    const { name, img, des, qualification, specialist } = props.doctor;
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h6 className="text-start text-success">{specialist}</h6>
                            <h4 className="card-title text-danger text-start">{name}</h4>
                            <p className="card-text text-start">{des}</p>
                            <p className="card-text fw-bolder text-start">Qualification: <small className="text-muted text-start">{qualification}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;