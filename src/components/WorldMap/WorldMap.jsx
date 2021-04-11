import React from 'react';
import { Row } from 'react-bootstrap';
import Title from '../Title/Title';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import './WorldMap.css';


const WorldMap = ({isDesktop, onSelect}) => {

    return (
        <section id="worldmap">
            <div className={isDesktop ? "worldmap-wrapper" : "worldmap-wrapper-sm"}>
                <Title title="Choose interesting background" />
                <Fade bottom duration={1000} delay={1000} distance="0px">
                    <Row className={isDesktop ? "worldmap-container" : "worldmap-container-sm"}>
                            <Link to="projects" smooth duration={1000} className="country-container" onClick={() => onSelect("canada")}>
                                    <img alt="korea map" src="images/canada.png"/>
                                    <span className="country-name">CANADA</span>
                            </Link>
                            <Link to="projects" smooth duration={1000} className="country-container" onClick={() => onSelect("korea")}>
                                    <img alt="korea map" src="images/korea.png"/>
                                    <span className="country-name">KOREA</span>
                            </Link>
                    </Row>
                </Fade>
            </div>
        </section>
    );
}

export default WorldMap;