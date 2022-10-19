import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__left">
                <img src="" alt="" />
                <span>Gavin Stirling</span>
            </div>
            <div className="navigation__right">
                <div navigation__links>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
