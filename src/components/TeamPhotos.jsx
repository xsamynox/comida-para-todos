import React, { Fragment } from 'react';
import '../styles/TeamPhotos.css';
import Rafael from '../images/Equipo/equipo-3.jpg';
import Enrique from '../images/Equipo/ENRIQUE.JPG';
import Sebastian from '../images/Equipo/SEBASTIAN.png';
import Camila from '../images/Equipo/Camila.jpeg';

const TeamPhotos = () => {
    return(
        <Fragment>
          <div className="team">
            <img src={Rafael} className="teamimg" alt="Voluntariado" />
            <div className="container-img">
              <h4 className='descriptions'>Rafael Rincón</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Director Ejecutivo.</p>
            </div>
            </div>
          </Fragment>
    )
};
export default TeamPhotos;