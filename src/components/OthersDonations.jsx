import React from 'react';
import HuertosUrbanos from '../images/Huertos-urbanos.jpg';
import Alimentos from '../images/Alimentos.jpg'
import Voluntariado from '../images/Voluntariado.jpg'
import Clase from '../images/Clase.jpg'
import Habilidad from '../images/Habilidad.jpg'
import arrowRight from '../images/iconos/arrow-right.png'
import arrowLeft from '../images/iconos/arrow-left.png'


const OthersDonations = () => {
  return (
    <div className='container-header'>
      <h2>Otras Formas de Ayudar</h2>
      <p className='p-others'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis posuere sit sapien, ut suspendisse cursus. Congue phasellus tincidunt posuere sit fringilla. Aliquam arcu id sollicitudin amet.</p>
      <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
        {/* <div class="controls-top">
          <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
          <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
        </div> */}
        <a className="carousel-control-prev" href="#multi-item-example" role="button" data-slide="prev">
          <img src={arrowRight} className="arrow-carrousel" alt="flecha"></img>
        </a>
        <a className="carousel-control-next" href="#multi-item-example" role="button" data-slide="next">
          <img src={arrowLeft} className="arrow-carrousel" alt="flecha"></img>
        </a>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">

            <div className="row">

              <div className="col-md-4">
                <div className="card mb-2">
                  <p className='carousel-caption3'>Hazte</p>
                  <h2 className='carousel-caption4'>Voluntario</h2>
                  <img className="card-img-top" src={Voluntariado} alt="Voluntariado" />
                  <div className="carousel-caption5">
                    <p className="">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <p className='carousel-caption3'>Dona</p>
                  <h2 className='carousel-caption4'>Alimentos</h2>
                  <img className="card-img-top" src={Alimentos} alt="Alimentos" />
                  <div className="carousel-caption5">
                    <p className="">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <p className='carousel-caption3'>Dona</p>
                  <h2 className='carousel-caption4 huertos'>Huertos Urbanos</h2>
                  <img className="card-img-top" src={HuertosUrbanos} alt="Huertos Urbanos" />
                  <div className="carousel-caption5">
                    <p className="">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="carousel-item">

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <p className='carousel-caption3'>Dona</p>
                  <h2 className='carousel-caption4'>Tu Habilidad</h2>
                  <img className="card-img-top" src={Habilidad} alt="Dona tu Habilidad" />
                  <div className="carousel-caption5">
                    <p className="">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <p className='carousel-caption3'>Dona</p>
                  <h2 className='carousel-caption4'>Una Clase</h2>
                  <img className="card-img-top" src={Clase} alt="Dona una Clase" />
                  <div className="carousel-caption5">
                    <p className="">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div>

  );
}
export default OthersDonations;