import React, { Fragment } from 'react';
import PlatoVacio from '../images/AboutUs/PlatoVacio.png';

const FoodSecurity = () => {

  return (
    <Fragment>
      <div className='white-bg'>
          <p className='ft-title'>
              La seguridad Alimentaria:</p>
          <p className='text-black'>“A nivel de individuo, nación y global, se consigue cuando todas las personas en todo momento, tienen acceso social, físico y económico a suficiente alimento, seguro y nutritivo, con el objeto de llevar una vida activa y sana”</p>
          <p className='text-onu'>Organización de las Naciones Unidas para la Alimentación y la Agricultura</p>
          </div>
      <div className='problematic-cnt'>
          <div className='divImgDish'>
              <img className='emptyDish' src={PlatoVacio} alt="plato Vacío"/>
          </div>
          <div className='ProblematicTxt'>
              <p className='ProblematicTxt1'>Problemática</p>
              <p className='ProblematicTxt2'>El Programa Mundial de Alimentos de las Naciones Unidas (PMA) advirtio recientemente que estamos al borde de una pandemia mundial.</p>
              <p className='ProblematicTxt3'>Más de 2 millones de personas</p>
              <p className='ProblematicTxt4'>en Chile son amenzadas por la inseguridad alimentaria 
              <br/>
              (Cepal, 2020) </p>
              <hr className='ProblematicLine'/>
              <p className='ProblematicTxt5'>¿Cómo podemos llenar
                  <br/>
                   este plato?</p>
          </div>
        </div>
    </Fragment>
  )
}
export default FoodSecurity;