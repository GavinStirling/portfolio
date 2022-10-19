import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default Routing;
