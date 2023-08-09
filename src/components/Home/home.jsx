import React, { useEffect } from "react";
import styles from './home.module.css'
import Pricing from "../Pricing/pricing";
import Navbar from "../Navbar/navbar";
import MainHome from "../MainHome/mainHome";
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className={styles.section} id="inicio">
                <MainHome></MainHome>
            </section>
            <section className={styles.section} id="planes">
                <Pricing></Pricing>
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