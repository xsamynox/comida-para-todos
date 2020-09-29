import React from 'react';
import Logo from '../images/logo2.png';
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
              <Link to='/aboutUs'><li>Sobre Nosotros</li></Link>
              <Link to='/projects'><li>Proyectos</li></Link>
              <Link to='/campaings'><li>Campaña</li></Link>
              <Link to='/collaborators'><li>Colaboradores</li></Link>
              <Link to='/transparency'><li>Transparencia</li></Link>
              <Link to='/contact'><li>Contacto</li></Link>
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