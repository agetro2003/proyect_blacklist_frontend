import React, { useEffect } from "react";
import styles from './home.module.css'

import Navbar from "../Navbar/navbar";
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