import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import PortfolioContext from '../../context/context';
import './Projects.css';

const Projects = ({ isDesktop, bgCountry }) => {
    const { projects } = useContext(PortfolioContext);

    const [isShown, setIsShown] = useState(false);
    
    if(bgCountry.length === 0){
        return (
            <section id="projects" />       //For scrolling down from worldmap
        );
    }

    return (
        <section id="projects">
            <Container>
                <div className={ isDesktop ? "projects-wrapper" : "projects-wrapper-sm"}>
                    <Title title={"Projects in " + bgCountry} color="blue"/>

                    {projects.map( (project) => {
                        const {title, info, info2, url, repo, img, country, id, credential} = project;
                        
                        if(bgCountry !== "the world" && country !== bgCountry){
                            return null;
                        }

                        return(
                            <Row className="project-wrapper__row" key={id}>
                                <Col lg={4} sm={12}>
                                    <Fade left={isDesktop} bottom={!isDesktop} duration={1000} delay={500} distance="30px">
                                        <div className="project-wrapper__text">
                                            <h3 className="project-wrapper__text-title">{title || "Project Title"}</h3>
                                            <p>
                                                {info || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                                            </p>
                                            <label className="project-wrapper__label"><b>Used Tech:</b></label>
                                            <p className="mb-4">{info2 || 'Second information block'}</p>
                                        </div>
                                        <div>
                                            {credential ? 
                                                (<a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn cta-btn--project"
                                                    href={url || '#!'}
                                                    onMouseEnter={() => setIsShown(true)}
                                                    // onMouseLeave={() => setIsShown(false)}t
                                                >{country !== 'korea' ? "See Live" : "Product Link"}<br/>
                                                </a>)
                                                :
                                                (<a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn cta-btn--project"
                                                    href={url || '#!'}
                                                >{country !== 'korea' ? "See Live" : "Product Link"}<br/>
                                                </a>)
                                            }                                         
                                                

                                            {repo && (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn text-color-main"
                                                    href={repo || '#!'}
                                                >
                                                    Source Code
                                                </a>
                                            )}

                                            {credential && isShown && (
                                                <Fade left={isDesktop} bottom={!isDesktop} duration={500} delay={200} distance="30px">
                                                <div className="project-wrapper__text credential-info">
                                                    <label className="project-wrapper__label"><b>Use this account to take a look!</b></label>
                                                    <p>
                                                        Username: {credential.username}<br/>
                                                        Password: {credential.password}<br/>
                                                    </p>
                                                </div>
                                                </Fade>
                                            )}
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={8} sm={12}>
                                    <Fade right={isDesktop} bottom={!isDesktop} duration={1000} delay={1000} distance="30px">
                                        <div className="project-wrapper__image">
                                            <a 
                                                href={url || '#!'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ProjectImg alt={title} isDesktop={isDesktop} filename={img || "images/project.jpg"} />
                                            </a>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                        );
                    })}

                </div>
            </Container>
        </section>
    );
}

export default Projects;