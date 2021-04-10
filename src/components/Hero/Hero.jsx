import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import './Hero.css';


const Header = ({isDesktop}) => {

    return (
        <section id="hero" className="jumbotron">
            <Container>
                <Fade left={isDesktop} bottom={!isDesktop} duration={1000} delay={500} distance="50px">
                    <h1 className={isDesktop ? "hero-title" : "hero-title-sm"}>
                        Hi, my name is{' '}
                        <span className="text-color-main">Jinseok Lee</span>
                        <br/>
                        I'm looking for Jr. Full-stack developer job.
                    </h1>
                </Fade>
                <Fade left={isDesktop} bottom={!isDesktop} duration={1000} delay={1000} distance="50px">
                    <p className="hero-cta">
                        <span className={`cta-btn ${isDesktop ? "cta-btn--hero" : "cta-btn--hero-sm"}`}>
                            <Link to="about" smooth duration={1000}>
                                Know more
                            </Link>
                        </span>
                    </p>
                </Fade>
            </Container>
        </section>
    );

}

export default Header;