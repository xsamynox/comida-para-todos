import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Hands from '../images/imagen4.png';
import CafeSanJuan from '../images/cafe-san-juan 1.png';
import Foodies from '../images/foodies 1.png';
import Cultiva from '../images/logo-fundacion-cultiva 1.png';
import Ñam from '../images/logo-niam 1.png';


const CollabSection = () => {
  return (
    <section className="ctn-collaboration">
      <div className="CollaborationSection">
        <div className="containerHands">
          <img src={Hands} className="hands" alt="hands" />
        </div>
        <div className="textContainer">
          <h2 className="collabTitle">Colaboradores</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            A maxime labore deleniti rerum ipsum aut tempore perspiciatis
            corrupti mollitia, adipisci placeat. Consequuntur, officiis labore
            sed dicta dolor unde ullam sunt.
          <Router>
              <Link to='/donate'>
                <p className='read-more'>Leer Más</p>
              </Link>
            </Router>
          </p>
        </div>
      </div>
      <div className="companies">
        {/* <img src={CafeSanJuan} className="cafeSanJuan" style={{ width: "20%" }} alt="cafeSanJuan" />
        <img src={Foodies} className="foodies" style={{ width: "30%" }} alt="foodies" />
        <img src={Cultiva} className="cultiva" style={{ width: "35%" }} alt="cultiva" />
        <img src={Ñam} className="ñam" style={{ width: "25%" }} alt="ñam" /> */}
        <img src={CafeSanJuan} style={{ width: "20%" }} className="img-clb" alt="cafeSanJuan" />
        <img src={Foodies} className="img-clb" alt="foodies" />
        <img src={Cultiva} className="img-clb" alt="cultiva" />
        <img src={Ñam} className="img-clb" alt="ñam" />
      </div>
      <div>
      </div>
    </section>
  );
};

export default CollabSection;