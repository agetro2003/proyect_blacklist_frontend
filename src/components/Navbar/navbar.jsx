import styles from './navbar.module.css'
const Navbar = () => {
    return(
        <nav className={styles.navbar}> 
            <ul className={styles.ul}>
                <li className={styles.li}>
                <a className={styles.a} href="#inicio">Inicio</a>
                </li>
                <li className={styles.li}>
                <a className={styles.a} href="#planes"> Nuestros planes</a>
                </li>
                <li className={styles.li}>
                <a className={styles.a} href="#opiniones">Comentarios</a>
                </li>
                <li className={styles.li}>
                <a className={styles.a} href="#contacto">Contactanos</a>
                </li>
            </ul> 
       </nav>
    )
}

export default Navbar;