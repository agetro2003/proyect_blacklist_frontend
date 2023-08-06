import React, { useEffect } from "react";
import './home.css'

import Navbar from "../Navbar/navbar";
const Home = () => {
    return(
        <div>
            <Navbar></Navbar>
            <section id="inicio">
                test
            </section>
            <section id="planes">
                planes
            </section>
            <section id="opiniones">
                opiniones
            </section>
            <section id="contacto">
                contactos
            </section>
        </div>
    );
};

export default Home;