import React from 'react';
import restaurant from '../images/transparency/tarjeta-restaurant.png';
import comunidad from '../images/transparency/tarjeta-comunidad.png';
import capacitación from '../images/transparency/tarjeta-capacitación.png';

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
          <div>
            <img className='icon-carousel' src={restaurant}
              alt="cubiertos" />
          </div>
        </div>

        <div class="carousel-item">
          <div>
            <img className='icon-carousel' src={comunidad}
              alt="conversación" />
          </div>
        </div>

        <div class="carousel-item">
          <div>
            <img className='icon-carousel' src={capacitación}
              alt="capacitación" />
          </div>
        </div>

      </div>

    </div>

  );
}
export default CarouselTransparency;