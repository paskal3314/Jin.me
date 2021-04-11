import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer navbar-static-bottom">
            <Container>
                <span className="back-to-top">
                    <Link to="hero" smooth duration={1000}>
                        <FontAwesomeIcon icon={faAngleUp} size="2x"/>
                    </Link>
                </span>
                <div className="social-links">
                    <a
                        href="https://www.linkedin.com/in/jinseok-lee-aims-high/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://github.com/paskal3314"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <hr />
                <p className="footer__text">
                    © {new Date().getFullYear()} - Developed by{' '}
                    <a 
                        href="https://github.com/paskal3314" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        Jinseok Lee
                    </a>
                </p>
            </Container>
        </footer>
    );
}

export default Footer;