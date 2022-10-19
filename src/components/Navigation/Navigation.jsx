import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

import navLogo from "../../assets/images/nav/nav-logo.png";
import navMenu from "../../assets/images/nav/nav-menu.png";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__left">
                <img
                    className="navigation__logo"
                    src={navLogo}
                    alt="Navigation Logo"
                />
                <span className="navigation__title">Gavin Stirling</span>
                <span className="navigation__title-tablet1">Gavin</span>
                <span className="navigation__title-tablet2">Stirling</span>
            </div>
            <div className="navigation__right">
                <img
                    className="navigation__menu"
                    src={navMenu}
                    alt="Navigation Menu"
                />
                <div className="navigation__links">
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
