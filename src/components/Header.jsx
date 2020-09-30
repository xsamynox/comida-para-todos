import React from 'react';
import Logo from '../images/iconos/logo2.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import BtnDonate from './BtnDonate';
import UpperBar from './UpperBar';


const Header = () => {

  return (
    <header className='header'>
      <UpperBar />
      <div className='container-header'>
        <nav className='menu'>
          <img src={Logo} className='logo' alt='logo' />
          <Router>
            <ul className='list'>
              <li><Link to='/aboutUs'>Sobre Nosotros</Link></li>
              <li><Link to='/projects'>Proyectos</Link></li>
              <li><Link to='/campaings'>Campaña</Link></li>
              <li><Link to='/collaborators'>Colaboradores</Link></li>
              <li><Link to='/transparency'>Transparencia</Link></li>
              <li><Link to='/contact'>Contacto</Link></li>
            </ul>
          </Router>
          <BtnDonate />
        </nav>
      </div>
    </header >
  );
}
export default Header;