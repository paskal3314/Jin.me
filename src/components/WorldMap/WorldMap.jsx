import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import './WorldMap.css';


const WorldMap = ({isDesktop}) => {

    return (
        <section id="worldmap">
            <div className={isDesktop ? "worldmap-wrapper" : "worldmap-wrapper-sm"}>
                <Title title="Choose interesting background" />
                <Fade bottom duration={1000} delay={1000} distance="0px">
                    <Row className={isDesktop ? "worldmap-container" : "worldmap-container-sm"}>
                            <Link to="korea" smooth duration={1000} className="country-container">
                                    <img alt="korea map" src="images/korea.png"/>
                                    <span className="country-name">KOREA</span>
                            </Link>
                            <Link to="canada" smooth duration={1000} className="country-container">
                                    <img alt="korea map" src="images/canada.png"/>
                                    <span className="country-name">CANADA</span>
                            </Link>
                    </Row>
                </Fade>
            </div>
        </section>
    );
}

export default WorldMap;