import React from 'react';
import Alimento from '../images/AboutUs/Alimento.png';
import Empleo from '../images/AboutUs/Empleo.png';
import Educacion from '../images/AboutUs/Educacion.png';
import Comunidad from '../images/AboutUs/Comunidad.png';

const CarrouselUs = () => {
  return (
    <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-2" data-slide-to="1"></li>
        <li data-target="#carousel-example-2" data-slide-to="2"></li>
        <li data-target="#carousel-example-2" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active">
          <div className="img-car">
            <img className='img-carousel' src={Alimento}
              alt="Alimento" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-car">
            <img className='img-carousel' src={Empleo}
              alt="Empleo" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-car">
            <img className='img-carousel' src={Educacion}
              alt="Educación" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-car">
            <img className='img-carousel' src={Comunidad}
              alt="Comunidad" />
          </div>
        </div>

      </div>

    </div>

  );
}
export default CarrouselUs;