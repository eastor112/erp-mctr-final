import React from 'react'
//third
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__logo">
            <h1>MECATRÓNICA-UNT</h1>
            <figure>
              <img src="./assets/logo_unt.png" alt="" width="50" />
            </figure>
          </div>
          <div className="navbar__login">
            <Link to="/login">
              Iniciar sesión
              <i className="fas fa-sign-in-alt"></i>
            </Link>
          </div>
        </nav>
      </header>

      <main className="landing__main">

        <figure className="landing__main__portada">
          <img src="./assets/portada.jpg" alt="" />
        </figure>

        <article className="landing__main__historia">
          <h2>
            Historia del programa de Ingeniería Mecatrónica
          </h2>
          <div className="landing__parrafo__imagen">
            <figure>
              <img src="./assets/logo_mecatronica.png" alt="" />
            </figure>
            <p>
              La Escuela de Ingeniería Mecatrónica de la Universidad Nacional de Trujillo fue creada en el año 2006, con
              Resolución de Asamblea Universitaria Nº009-2006/UNT., de fecha 20 de Octubre del 2006; iniciándose los
              estudios regulares a partir de Abril del año 2007, con la asesoría de la Universidad Johannes Kepler de Linz
              de Austria (Convenio de Cooperación específico en el área de Ingeniería Mecatrónica R.R. N°1745-97/UNT y
              R.C.U. N°0297-2005/UNT).
            </p>
          </div>
          <p>
            El programa de Ingeniería Mecatrónica ha implementado procesos de mejora de la calidad educativa, lo que
            permite que sus estudiantes obtengan continuos logros tanto nacionales como internacionales. Actualmente
            el programa esta acreditado bajo los estandares del Instituto de Calidad y Acreditación de Programas de
            Computación, Ingeniería y Tecnología – ICACIT y bajo los estándares del Sistema Nacional de Evaluación,
            Acreditación y Certificación de la Calidad Educativa - SINEACE.
          </p>
          <div className="landing__galeria">
            <figure className="landing__galeria__derecha">
              <img src="./assets/salaDocentes.png" alt="" />
            </figure>
            <div className="landing__galeria__izquierda">
              <figure>
                <img src="./assets/internacionales.png" alt="" />
              </figure>
              <div>
                <figure className="medallas">
                  <img src="./assets/premiosRumania.png" alt="" />
                </figure>
                <figure className="laboratorio">
                  <img src="./assets/laboratorio.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </article>

      </main>

      <footer>
        <div className="footer__info">
          <div className="contactanos">
            <h3>Contáctanos</h3>
            <hr />
            <p><i className="fas fa-phone-alt"></i> (044)241359</p>
            <p><i className="far fa-envelope"></i> <a href="mailto:mecatronica@unitru.edu.pe">mecatronica@unitru.edu.pe</a></p>
          </div>

          <div className="comites">
            <h3>Comites de escuela</h3>
            <hr />
            <p><i className="far fa-envelope"></i> <a
              href="mailto:mecatronica_cma@unitru.edu.pe">mecatronica_cma@unitru.edu.pe</a> - Mejora Académica</p>
            <p><i className="far fa-envelope"></i> <a
              href="mailto:mecatronica_ciaa@unitru.edu.pe">mecatronica_ciaa@unitru.edu.pe</a> - Calidad y Acreditación
            </p>
          </div>

          <div className="medios">
            <h3>Medios digitales</h3>
            <hr />
            <p><i className="fas fa-globe"></i> <a href="http://mecatronica.unitru.edu.pe/"
              target="_blank" rel='noreferrer'>http://mecatronica.unitru.edu.pe </a> - Página web
            </p>
            <p><i className="fab fa-facebook" aria-hidden="true"></i> <a href="https://www.facebook.com/mecatronica.unt.oficial"
              target="_blank" rel='noreferrer'>mecatronica.unt.oficial</a> - Facebook</p>
          </div>
        </div>
        <small>
          Diseñado y elaborado por eastor112 - Copyright 2021 <i className="fa fa-copyright" aria-hidden="true"></i>
        </small>
      </footer>

    </>
  );
}
