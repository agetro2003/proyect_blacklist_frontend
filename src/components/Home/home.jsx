import React, { useEffect } from "react";
import "./home.css"

const Home = () => {
    return (
        <div className="navigation">
            <ul className="Nav-bar">
                <li id="name">NavBar</li>
                <li><a href="/">Home</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Home;