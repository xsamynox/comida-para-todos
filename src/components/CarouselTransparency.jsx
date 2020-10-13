import React from 'react';
import restaurant from '../images/Transparency/tarjeta-restaurant.png';
import comunidad from '../images/Transparency/tarjeta-comunidad.png';
import capacitación from '../images/Transparency/tarjeta-capacitación.png';

const CarouselTransparency = () => {
  return (
    <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-2" data-slide-to="1"></li>
        <li data-target="#carousel-example-2" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active">
          <div>
            <img className='icon-carousel' src={restaurant}
              alt="cubiertos" />
          </div>
        </div>

        <div className="carousel-item">
          <div>
            <img className='icon-carousel' src={comunidad}
              alt="conversación" />
          </div>
        </div>

        <div className="carousel-item">
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