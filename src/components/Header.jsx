import React from 'react';
import Logo from '../iconos/logo2.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import BtnDonate from './Btn-donate';
import UpperBar from './UpperBar';


const Header = () => {

  return (
    <header >
      <UpperBar />
      <div className='container-header'>
        <div>
          <img src={Logo} className='logo' alt='logo' />
        </div>
        <nav className='menu'>
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
        </nav>
        <div>
          <BtnDonate />
        </div>
      </div>
    </header >
  );
}
export default Header;