import React from 'react';
import transparency from '../images/Transparency/transparencia.png';
import CarouselTransparency from './CarouselTransparency';

const CapabilitiesSection = () => {
  return (
    <div className='section-work' >
      <img className='transparency' src={transparency} alt='transparencia' />
      <div className='textWork'>
        <h4>Capacidades entregadas al</h4>
        <h2>Territorio</h2>
        <CarouselTransparency />
      </div>
    </div >
  );
}
export default CapabilitiesSection;