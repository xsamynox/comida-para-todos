import React, { Fragment } from 'react';
import '../styles/SchoolProject.css';
import BtnDonate from './BtnDonate';

const SPHeader = () =>{
    return(
        <Fragment>
        <div className='sp-Img'>
          <div className='firstDiv'>
            <hr className='firstLine' />
            <p>Proyectos</p>
            <h1>Escuela</h1>
            <p className='text-initial'>
            Como proyecto con proyección hacia el 2030, tenemos planeado instaurar programas que incluyen Huertos comunitarios, Cocina y Centros de Emprendimiento.
            <br/>
            <br/>
            Si quieres impartir una clase como donación, haz click en el botón donar.
            </p>
            <div className='bdonate'>
            <BtnDonate />
            </div>
          </div>
        </div>
      </Fragment>
    )
}
export default SPHeader;