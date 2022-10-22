import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

import navLogo from "../../assets/images/nav/nav-logo.png";
import navMenu from "../../assets/images/nav/nav-menu.png";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/" className="navigation__left">
                <img
                    className="navigation__logo"
                    src={navLogo}
                    alt="Navigation Logo"
                />
                <span className="navigation__title">Gavin Stirling</span>
                <span className="navigation__title-tablet1">Gavin</span>
                <span className="navigation__title-tablet2">Stirling</span>
            </NavLink>

            <div className="navigation__right">
                <img
                    className="navigation__menu"
                    src={navMenu}
                    alt="Navigation Menu"
                />
                <div className="navigation__links">
                    <NavLink className="link" to="/">Home</NavLink>
                    <NavLink className="link" to="/projects">Projects</NavLink>
                    <NavLink className="link" to="/about">About</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
