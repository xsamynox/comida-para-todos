import React, { useState, useRef } from "react";
import Logo from '../images/iconos/logo2.png';
import Search from '../images/iconos/search.png'
import { BrowserRouter as Router } from 'react-router-dom';
import BtnDonate from './BtnDonate';
import UpperBar from './UpperBar';

const Header = () => {

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const onClick1 = () => setIsActive1(!isActive1);

  return (
    <header className='header'>
      <UpperBar />
      <nav className='container-header'>
        <Router>
          <ul className='list'>
            <li><a href='/'><img src={Logo} className='logo' alt='logo' /></a></li>
            <hr className='vertLine' />
            <li className='submenu'><a onClick={onClick}>Sobre Nosotros</a>
              <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                  <li><a href="/aboutus/aboutus">Sobre Nosotros</a></li>
                  <li><a href="/aboutus/team">Equipo</a></li>
                </ul>
              </nav>
            </li>
            <li><a onClick={onClick1}>Proyectos</a>
              <nav ref={dropdownRef} className={`menu1 ${isActive1 ? 'active' : 'inactive'}`}>
                <ul>
                  <li><a href="/projects/foodbank">Banco de Alimentos</a></li>
                  <li><a href="/projects/schoolproj">Escuela</a></li>
                </ul>
              </nav>
            </li>
            <li><a href='/campaings'>Campaña</a></li>
            <li><a href='/collaborators'>Colaboradores</a></li>
            <li><a href='/transparency'>Transparencia</a></li>
            <li><a href='/contact'>Contacto</a></li>
            <img src={Search} className='facebook' alt="Buscador" />
            <BtnDonate />
          </ul>
        </Router>
      </nav>
    </header >
  );
}
export default Header;
