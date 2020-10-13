import React from 'react';
import web from '../images/Transparency/internet.png';
import donate from '../images/Transparency/dona.png';
import restaurant from '../images/Transparency/restaurants.png';
import transport from '../images/Transparency/transporte.png';
import sectores from '../images/Transparency/sectores.png';
import apadrina from '../images/Transparency/apadrinar.png';
import arrow from '../images/Transparency/arrow.png';

const WorkModel = () => {
  return (
    <div className='section-transparency'>
      <h2>Modelo de Trabajo</h2>
      <div className='ctn-transparency'>
        <div>
          <img className='icon-trn' src={web} alt='Donaciones web' />
          <p><strong>Las donanciones</strong> se realizan por medio de página web</p>
        </div>
        <div className='ctn-arrow'>
          <img className='arrow-work' src={arrow} alt='flecha' />
        </div>
        <div>
          <img className='icon-trn' src={donate} alt='Donaciones' />
          <p>Empresas socias <strong>multiplicarán</strong> la donación realizada</p>
        </div>
        <div className='ctn-arrow'>
          <img className='arrow-work' src={arrow} alt='flecha' />
        </div>
        <div>
          <img className='icon-trn' src={restaurant} alt='Gorro chef' />
          <p>Las donaciones se <strong>transfieren</strong>a los restaurantes</p>
        </div>
        <div className='ctn-arrow'>
          <img className='arrow-work' src={arrow} alt='flecha' />
        </div>
        <div>
          <img className='icon-trn' src={transport} alt='Transportes' />
          <p><strong>Transportistas escolares</strong> llevan los almuerzos solidarios</p>
        </div>
        <div className='ctn-arrow'>
          <img className='arrow-work' src={arrow} alt='flecha' />
        </div>
        <div>
          <img className='icon-trn' src={sectores} alt='Familia' />
          <p>El Alimento llega a los <strong>sectores vulnerables</strong></p>
        </div>
        <div className='ctn-arrow'>
          <img className='arrow-work' src={arrow} alt='flecha' />
        </div>
        <div>
          <img className='icon-trn' src={apadrina} alt='Conversaciones' />
          <p>El restaurante <strong>apadrina</strong> una comunidad</p>
        </div>
      </div>
    </div>
  );
}
export default WorkModel;