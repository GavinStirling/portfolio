import React from "react";
import { NavLink } from "react-router-dom";

import "./Intro.scss";

import waveEmoji from "../../assets/images/home/Emoji.png";
import profilePhoto from "../../assets/images/home/STIRLING-80.jpg";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__left">
                <p className="intro__subtitle">
                    Hi there! I'm Gavin Stirling{" "}
                    <img
                        className="intro__emoji"
                        src={waveEmoji}
                        alt="Wave Emoji"
                    />
                </p>
                <p className="intro__title">
                    A Junior Software Developer based in London.
                </p>
                <NavLink className="intro__link" to="/projects">
                    Take a look at some of my work
                </NavLink>
            </div>
            <img
                className="intro__image"
                src={profilePhoto}
                alt="Profile Photo of Gavin Stirling"
            />
        </div>
    );
};

export default Intro;
