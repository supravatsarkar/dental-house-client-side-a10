import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div className="home-container">
            <Banner></Banner>
            <Services></Services>
            <ContactUs></ContactUs>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;