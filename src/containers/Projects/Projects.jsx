import React from "react";

import "./Projects.scss";

import Navigation from "../../components/Navigation/Navigation";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
    return (
        <div>
            <Navigation />
            <ProjectSection />
            <Footer />
        </div>
    );
};

export default Projects;
