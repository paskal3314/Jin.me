import React from 'react';
import './AboutImg.css';

const AboutImg = (props) => {

    return (
        <img className="aboutImg" alt={props.alt} src={props.filename} />
    );
}

export default AboutImg;