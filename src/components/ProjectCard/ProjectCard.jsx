import React from "react";

import "./ProjectCard.scss";

import codeBtnImg from "../../assets/images/projects/button-code.png";
import previewBtnImg from "../../assets/images/projects/button-preview.png";

const ProjectCard = ({
    name,
    tech,
    image,
    description,
    githubLink,
    deployedLink,
}) => {
    return (
        <div className="project" id={name}>
            <img className="project__image" src={image} alt={name} />
            <p className="project__tech">{tech}</p>
            <p className="project__title">{name}</p>
            <p className="project__description">{description}</p>
            <div className="project__buttons">
                <a href={githubLink}>
                    Code <img src={codeBtnImg} alt="Code Button" />
                </a>
                <a href={deployedLink}>
                    Preview <img src={previewBtnImg} alt="Preview Button" />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
