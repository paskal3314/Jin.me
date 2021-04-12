import React from 'react';
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
                    <Col lg={6} sm={12}>
                        <Fade bottom duration={1000} delay={600} distance="30px">
                        <div className="about-wrapper__image">
                            <AboutImg alt="profile picture" filename="images/profile.jpg" />
                        </div>
                        </Fade>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Fade left={isDesktop} bottom={!isDesktop} duration={1000} delay={1000} distance="30px">
                        <div className="about-wrapper__info">
                            <p className={isDesktop ? "about-wrapper__info-text" : "about-wrapper__info-text-sm"}>
                            {`I was just a common high school student, I liked playing video games and had a general interest in Computer Science.`}
                            </p>
                            <p className={isDesktop ? "about-wrapper__info-text" : "about-wrapper__info-text-sm"}>
                            {'Since I started studying IT in the University, I was especially into programming. Then my goal of what I want to be has completely changed.'}
                            </p>
                            <p className={isDesktop ? "about-wrapper__info-text" : "about-wrapper__info-text-sm"}>
                            {'After graduation, I experienced two years’ development job as a firmware developer in my home country of South Korea. Then in 2018 I made an important but bold decision to fully immerse myself into the study of programming at SAIT in Calgary, Canada.'}
                            </p>
                            <p className={isDesktop ? "about-wrapper__info-text" : "about-wrapper__info-text-sm"}>
                            {`Now, I'm at an important crossroads in my life. My time as an international student is coming to an end and I’m actively searching for a company that will fit my newly enhanced skills.`}
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