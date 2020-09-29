import React from "react";
import Logo from "../images/logo1.png"
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <img src={Logo} className="" alt="logo" />
      <nav class="menu">
        <ul>
          <Link to="/aboutUs"><button>Sobre Nosotros</button></Link>
          <Link to="/projects"><button>Proyectos</button></Link>
          <Link to="/campaings"><button>Campaña</button></Link>
          <Link to="/collaborators"><button>Colaboradores</button></Link>
          <Link to="/transparency"><button>Transparencia</button></Link>
          <Link to="/contact"><button>Contacto</button></Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;