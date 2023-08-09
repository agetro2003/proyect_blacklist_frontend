import React, { useEffect } from "react";
// import "./home.css"

// const Home = () => {
//     return (
//         <div className="navigation">
//             <ul className="Nav-bar">
//                 <li id="name">NavBar</li>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/work">Work</a></li>
//                 <li><a href="/services">Services</a></li>
//                 <li><a href="/contact">Contact</a></li>
//             </ul>

import styles from './home.module.css'
import Pricing from "../Pricing/pricing";
import Navbar from "../Navbar/navbar";
import MainHome from "../MainHome/mainHome";
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className={styles.section} id="inicio">
                <h1>Proyect Blacklist</h1>
            <div>
                <h2>test</h2>
            </div>
            </section>
            <section className={styles.section} id="planes">
                planes
            </section>
            <section className={styles.section} id="opiniones">
                opiniones
            </section>
            <section className={styles.section} id="contacto">
                contactos
            </section>

        </div>
    );
};

export default Home;