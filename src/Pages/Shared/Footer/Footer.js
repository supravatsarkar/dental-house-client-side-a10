import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook, faGooglePlusG, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="py-2 d-flex flex-column flex-md-row justify-content-between align-items-center align-self-center bg-dark text-white">
            <p className="p-2 m-0">&copy;Copyright 2021 All rights reserved.
            </p>
            <div className="p-2 social-container">
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <FontAwesomeIcon icon={faFacebook} className="social-icon" size="lg" />
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" size="lg" />
                <FontAwesomeIcon icon={faTwitter} className="social-icon" size="lg" />
                <FontAwesomeIcon icon={faGooglePlusG} className="social-icon" size="lg" />
            </div>
            <p className="p-2 m-0"><small>Developed By: Supravat Sarkar</small></p>

        </div>
    );
};

export default Footer;