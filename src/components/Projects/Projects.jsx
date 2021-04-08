import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import './Projects.css';

const Projects = ({ isDesktop, bgCountry }) => {

    return (
        <section id="projects">
            <Container>
                <div className="projects-wrapper">
                    <Title title={"Projects in " + bgCountry} color="blue"/>

                    <Row>
                        
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Projects;