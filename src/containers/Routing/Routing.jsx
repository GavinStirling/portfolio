import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../About/About";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default Routing;
