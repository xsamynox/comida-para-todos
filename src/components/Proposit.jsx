import React, { Fragment } from 'react';
import PlatoGif from '../images/AboutUs/plato.gif';
import CarrouselUs from './CarrouselUs.jsx'

const Proposit = () => {

  return (
    <Fragment>
      <div className='prop-bg'>
          <div className='prop-cnt'>
          <p className='prop-title'>
              Propósito</p>
          <p className='text-prop'>“Nuestro próposito es <span className='span-txt1'>salvaguardar la Seguridad
          <br/>
          Alimentaria</span>, a través de:</p>
          <CarrouselUs />
          </div>
      <div className='gif-cnt'>
              <img className='foodDish' src={PlatoGif} alt="plato"/>
          </div> 
        </div>
    </Fragment>
  )
}
export default Proposit;