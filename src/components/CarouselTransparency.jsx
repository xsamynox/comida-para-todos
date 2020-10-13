import React from 'react';
import services from '../images/transparency/servicios.png';
import apadrinar from '../images/transparency/apadrinar.png';
import sembrar from '../images/transparency/sembrar.png';

const CarouselTransparency = () => {
  return (
    <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">

      <ol class="carousel-indicators">
        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-2" data-slide-to="1"></li>
        <li data-target="#carousel-example-2" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">

        <div class="carousel-item active">
          <div class="view">
            <img className='icon-carousel' src={services}
              alt="cubiertos" />
            <p className='font-trp-crs'>Restaurantes y productores de la alianza ponen a disposición sus conocimientos.</p>
          </div>
        </div>

        <div class="carousel-item">
          <div class="view2">
            <img className='icon-carousel2' src={apadrinar}
              alt="conversación" />
            <p className='font-trp-crs'>Comunidad, comedores sociales y cocinerías de las comunas vulnerables beneficiarias reciben capacitación.</p>
          </div>
        </div>

        <div class="carousel-item">
          <div class="view">
            <img className='icon-carousel' src={sembrar}
              alt="sembrar" />
            <p className='font-trp-crs'>Restaurantes capacitando en 4 temáticas: Alimentación Saludable, Emprendimiento, Permacultura y Buenas prácticas</p>
          </div>
        </div>

      </div>

    </div>

  );
}
export default CarouselTransparency;