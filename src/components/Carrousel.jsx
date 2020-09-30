import React from 'react';
import HuertosUrbanos from '../images/Huertos-urbanos.jpg';
import Alimentos from '../images/Alimentos.jpg'
import Voluntariado from '../images/Voluntariado.jpg'

const Carrousel = () => {
  return(
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={HuertosUrbanos} className="d-block w-100" alt="Huertos urbanos"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Huertos Urbanos</h5>
              <p>Texto por definir.</p>
            </div>
        </div>
          <div className="carousel-item">
            <img src="" className="d-block w-100" alt="Haz una clase"></img>
              <div className="carousel-caption d-none d-md-block">
              <h5>Haz una clase</h5>
                <p>Texto por definir.</p>
              </div>
          </div>
            <div className="carousel-item">
              <img src={Alimentos} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Alimentos</h5>
                  <p>Texto por definir.</p>
                </div>
            </div>
          <div className="carousel-item">
            <img src={Voluntariado} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Voluntariado</h5>
              <p>Texto por definir.</p>
            </div>
          </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </div>
  );
  }
export default Carrousel;
