import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div className="home-container">
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;