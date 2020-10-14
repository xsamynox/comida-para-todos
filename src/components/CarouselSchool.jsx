import React from 'react';
import Sust1 from '../images/ProyEscuela/Sustentable1.png';
import Sust2 from '../images/ProyEscuela/Sustentable2.png';
import Sust3 from '../images/ProyEscuela/Sustentable3.png';
import Sust4 from '../images/ProyEscuela/Sustentable4.png';
import Sust5 from '../images/ProyEscuela/Sustentable5.png';
import Sust6 from '../images/ProyEscuela/Sustentable8.png';
import Sust7 from '../images/ProyEscuela/Sustentable10.png';
import Sust8 from '../images/ProyEscuela/Sustentable11.png';
import Sust9 from '../images/ProyEscuela/sustentable12.png';
import Sust10 from '../images/ProyEscuela/sustentable_13.png';
import Sust11 from '../images/ProyEscuela/sustentable_17.png';


const CarrouselSchool = () => {
  return (
    <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">

      <ol class="carousel-indicators">
        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-2" data-slide-to="1"></li>
        <li data-target="#carousel-example-2" data-slide-to="2"></li>
        <li data-target="#carousel-example-2" data-slide-to="3"></li>
        <li data-target="#carousel-example-2" data-slide-to="4"></li>
        <li data-target="#carousel-example-2" data-slide-to="5"></li>
        <li data-target="#carousel-example-2" data-slide-to="6"></li>
        <li data-target="#carousel-example-2" data-slide-to="7"></li>
        <li data-target="#carousel-example-2" data-slide-to="8"></li>
        <li data-target="#carousel-example-2" data-slide-to="9"></li>
        <li data-target="#carousel-example-2" data-slide-to="10"></li>
      </ol>
      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust1}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust2}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust3}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust4}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust5}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust6}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust7}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust8}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust9}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust10}
              alt="Objetivo Sustentable" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-carObj">
            <img className='img-carouselO' src={Sust11}
              alt="Objetivo Sustentable" />
          </div>
        </div>

      </div>

    </div>

  );
}
export default CarrouselSchool;