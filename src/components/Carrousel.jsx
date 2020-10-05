import React from 'react';
import HuertosUrbanos from '../images/Huertos-urbanos.jpg';
import Alimentos from '../images/Alimentos.jpg'
import Voluntariado from '../images/Voluntariado.jpg'
import Clase from '../images/Clase.jpg'
import Habilidad from '../images/Habilidad.jpg'
import arrowRight from '../images/iconos/arrow-right.png'
import arrowLeft from '../images/iconos/arrow-left.png'
import '../styles/boostrap.css';

const Carrousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel carousel-fade" data-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <h5 className="carousel-caption2">Hazte Voluntario</h5>
            <img src={Voluntariado} className="d-block w-100" alt="Voluntariado" />
            <div className="carousel-caption d-none d-md-block">
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis posuere sit sapien, ut suspendisse cursus. Congue phasellus tincidunt posuere sit fringilla.</p>
            </div>
          </div>

          <div className="carousel-item">
            <h5 className="carousel-caption2">Alimentos</h5>
            <img src={Alimentos} className="d-block w-100" alt="Alimentos"></img>
            <div className="carousel-caption d-none d-md-block">
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis posuere sit sapien, ut suspendisse cursus. Congue phasellus tincidunt posuere sit fringilla.</p>
            </div>
          </div>

          <div className="carousel-item">
            <h5 className="carousel-caption2">Huertos Urbanos</h5>
            <img src={HuertosUrbanos} className="d-block w-100" alt="Huertos urbanos" />
            <div className="carousel-caption d-none d-md-block">
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis posuere sit sapien, ut suspendisse cursus. Congue phasellus tincidunt posuere sit fringilla.</p>
            </div>
          </div>

          <div className="carousel-item">
            <h5 className="carousel-caption2">Dona tu Habilidad</h5>
            <img src={Habilidad} className="d-block w-100" alt="Dona tu habilidad"></img>
            <div className="carousel-caption d-none d-md-block">
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis posuere sit sapien, ut suspendisse cursus. Congue phasellus tincidunt posuere sit fringilla.</p>
            </div>
          </div>

          <div className="carousel-item">
            <h5 className="carousel-caption2">Dona una Clase</h5>
            <img src={Clase} className="d-block w-100" alt="Haz una clase"></img>
            <div className="carousel-caption d-none d-md-block">
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis posuere sit sapien, ut suspendisse cursus. Congue phasellus tincidunt posuere sit fringilla.</p>
            </div>
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <img src={arrowRight} className="arrow-carrousel" alt="flecha"></img>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <img src={arrowLeft} className="arrow-carrousel" alt="flecha"></img>
        </a>
      </div>
    </div>
  );
}
export default Carrousel;
