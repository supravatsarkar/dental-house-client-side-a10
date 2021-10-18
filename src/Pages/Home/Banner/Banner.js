import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.png'
import banner2 from '../../../images/banner/banner-2.png'
import banner3 from '../../../images/banner/banner-3.png'

const Banner = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item className="bg-dark">

                    <img
                        className="d-block w-100 opacity-75"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="fw-bolder">
                        <h2 className="">The health smile through science and artistry</h2>
                        <p className="fs-6">Maintain a highly trained, qualified and experienced dentist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-dark">
                    <img
                        className="d-block w-100 opacity-75"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="fw-bolder">
                        <h2>An attractive smile makes a lasting impression!</h2>
                        <p>Over 200 Dentists join us in giving you the best of  modern  dentalcare, stay with healthy smile.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-dark">
                    <img
                        className="d-block w-100 opacity-75"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="fw-bolder">
                        <h2>Modern dentistry in a calm & relaxed feeling.</h2>
                        <p>Maintains a highly trained, qualified and experienced Dentists.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;