import React from 'react';
import Fade from 'react-reveal/Fade';
import './Title.css';

const Title = ({title, color}) => (
    <Fade bottom duration={1000} delay={300} distance="0px">
        <h2 className={`section-title ${color && 'section-title-'+color}`}>{title}</h2>
    </Fade>
);

export default Title;