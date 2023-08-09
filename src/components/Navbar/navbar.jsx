// import styles from './navbar.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return(
    //     <nav className={styles.navbar}> 
    //         <ul className={styles.ul}>
    //             <li className={styles.li}>
    //             <a className={styles.a} href="#inicio">Inicio</a>
    //             </li>
    //             <li className={styles.li}>
    //             <a className={styles.a} href="#planes"> Nuestros planes</a>
    //             </li>
    //             <li className={styles.li}>
    //             <a className={styles.a} href="#opiniones">Comentarios</a>
    //             </li>
    //             <li className={styles.li}>
    //             <a className={styles.a} href="#contacto">Contactanos</a>
    //             </li>
    //         </ul> 
    //    </nav>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar w/ text</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span className="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </div>
  </nav>

    )
}

export default Navbar;