import React from "react";

import "./Home.scss";

import Navigation from "../../components/Navigation/Navigation";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <Intro />
            <Skills />
            <Footer />
        </div>
    );
};

export default Home;
