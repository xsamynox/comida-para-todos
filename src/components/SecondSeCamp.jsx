import React from 'react';
/* import { BrowserRouter as Router, Link } from "react-router-dom"; */
import An18ForAll from '../images/Campañas/Campaña18.jpg';
import BtnDonate from './BtnDonate';
import BtnVolunteer from './BtnVolunteer';



const SecondSection = () => {
    return (
      <section className="CollaborationSection ctn-collaboration color">
        <div className="containerGarden">
          <img src={An18ForAll} className="garden" alt="Huertos Comunitarios" />
        </div>
        <div className="textContainer">
          <p>Campaña Anterior</p>
          <h2>#Un18paraTodos</h2>
          <p className="paragraph">
          ¡Celebremos juntos estas fiestas! Ayudemos a nuestra comunidad a tener un 18 digno y con
          comida de calidad, dona para un almuerzo asadero o súmate como voluntario en estas fiestas.
          </p>
          <div className="containerBtn">
          <BtnDonate />
          <BtnVolunteer />
          </div>
          </div>
      </section>
  );
};

export default SecondSection;