import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div className="custom-min-height" id="home">
            <Banner></Banner>
            <Services></Services>
            <ContactUs></ContactUs>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;