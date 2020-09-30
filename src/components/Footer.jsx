import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import twitter from '../images/iconos/twitter.png';
import facebook from '../images/iconos/facebook.png';
import instagram from '../images/iconos/instagram.png';

const Footer = () => {

  return (
    <footer className="footer">
      <section className="container-footer">
        <div>
          <h3>Comida Para Todos</h3>
        </div>
        <nav>
          <Router>
            <ul className="list-footer">
              <li>
                <Link to="/aboutUs">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/privacyPolicy">Politica Privacidad</Link>
              </li>
              <li>
                <Link to="/frequentQuestions">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </Router>
        </nav>
      </section>
      <hr className='footerLine'/>
      <section className="container-footer2">
        <p>© 2020 Comida para Todos, todos los derechos reservados.</p>
        <div>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} className="instagram" alt="instagram" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} className="facebook" alt="logo-facebook" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} className="twitter" alt="logo-twitter" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
