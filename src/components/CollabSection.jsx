import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Hands from '../images/imagen4.png';

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
        {/* <img src={CafeSanJuan} style={{ width: "20%" }} className="img-clb" alt="cafeSanJuan" />
        <img src={Foodies} style={{ width: "20%" }} className="img-clb" alt="foodies" />
        <img src={Cultiva} style={{ width: "20%" }} className="img-clb" alt="cultiva" />
        <img src={Ñam} style={{ width: "20%", height: '20%' }} className="img-clb" alt="ñam" /> */}
      </div>
      <div>
      </div>
    </section>
  );
};

export default CollabSection;