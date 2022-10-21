import React from "react";

import "./ProjectSection.scss";

import ProjectCard from "../ProjectCard/ProjectCard";

import projectsArray from "../../assets/data/projects";

const ProjectSection = () => {
    const ProjectJSX = projectsArray.map((project, index) => {
        return (
            <ProjectCard
                key={index + 1}
                name={project.name}
                tech={project.tech}
                image={project.image}
                description={project.description}
                githubLink={project.githubLink}
                deployedLink={project.deployedLink}
            />
        );
    });

    return (
        <div className="projectSection">
            <h1 className="projectSection__heading">My Projects:</h1>
            <div className="projectSection__intro">
                <p>
                    Below are some of the projects which I have built. The code
                    can be found on my GitHub and they are all deployed as a
                    live website.
                </p>
            </div>
            <div className="projectSection__tiles">{ProjectJSX}</div>
        </div>
    );
};

export default ProjectSection;
