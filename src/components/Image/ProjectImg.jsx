import React from 'react';
import './ProjectImg.css';

const ProjectImg = (props) => {

    return (
        <img className={ props.isDesktop ? "projectImg" : "projectImg-sm"}
        alt={props.alt} src={props.filename} />
    );
}

export default ProjectImg;