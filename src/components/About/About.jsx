import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import './About.css';

const About = ({isDesktop}) => {

    return (
        <section id="about">
            <Container>
                <Title title="About Me" color="blue" />
                <Row className={isDesktop ? "about-wrapper" : "about-wrapper-sm"}>
                <Col md={6} sm={12}>
                    <Fade bottom duration={1000} delay={600} distance="30px">
                    <div className="about-wrapper__image">
                        <AboutImg alt="profile picture" filename="images/profile.jpg" />
                    </div>
                    </Fade>
                </Col>
                <Col md={6} sm={12}>
                    <Fade left={isDesktop} bottom={!isDesktop} duration={1000} delay={1000} distance="30px">
                    <div className="about-wrapper__info">
                        <p className={isDesktop ? "about-wrapper__info-text" : "about-wrapper__info-text-sm"}>
                        {`I was just a common student, liked playing video games and small interest in Computer when I was 18.`}
                        </p>
                        <p className={isDesktop ? "about-wrapper__info-text" : "about-wrapper__info-text-sm"}>
                        {'Since I started studying IT technologies especially programming, my goal of what I will be has totally changed.'}
                        </p>
                        <p className={isDesktop ? "about-wrapper__info-text" : "about-wrapper__info-text-sm"}>
                        {'Experienced 2-years professional development job as a firmware developer in my origin country, then I made an important but bold decision to study more at SAIT, Canada.'}
                        </p>
                        <p className={isDesktop ? "about-wrapper__info-text" : "about-wrapper__info-text-sm"}>
                        {`Now, I'm at the most important crossroads for the start of Canada life as an international student, looking for an employer to be with.`}
                        </p>
                        
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`cta-btn ${isDesktop ? "cta-btn--resume" : "cta-btn--resume-sm"}`}
                        href={"https://mysait-my.sharepoint.com/:w:/g/personal/jinseok_lee_edu_sait_ca/Ed7gW-KKqnxNgdZgtkBc0P8BIazM6NUZrm25LbDYx9kCcA?e=ewUCBm"}
                        >
                        Resume
                        </a>
                    </div>
                    </Fade>
                </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;