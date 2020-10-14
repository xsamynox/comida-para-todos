import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import arrowRight from '../images/iconos/arrow-right.png'
import arrowLeft from '../images/iconos/arrow-left.png'
import ChocolatEggs from '../images/Campañas/SemanaSanta.png';
import Mother from '../images/Campañas/DiaMadre.png';
import Father from '../images/Campañas/DiaPadre.png';
import '../styles/campaigns.css'


const  CarrouselCamp = () => {
  return (
  <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
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
                  <a href="/donate/beVolunteer">
                    <p className='carousel-caption3'>Campaña Anterior</p>
                    <h2 className='carousel-caption4'>#SemanaSantaParaTodos</h2>
                    <img className="card-img-top" src={ChocolatEggs} alt="chocolatEggs" />
                    <div className="carousel-caption5">
                      <p className="">Nos incorporamos a la iniciativa de llevar actividades a los niños y
                                    niñas de nuestra comunidad duraante Semana Santa...</p>
                                    <Router>
                                    <Link to='/donate'>
                                    <strong><p className='read-more'>Leer Más</p></strong>
                                    </Link>
                                    </Router>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <a href="/donate/foods">
                    <p className='carousel-caption3'>Campaña Anterior</p>
                    <h2 className='carousel-caption4' style={{bottom:"70%"}}>#FelízDíaMamá</h2>
                    <img className="card-img-top" src={Mother} alt="Mother" />
                    <div className="carousel-caption5">
                      <p className="">¡Porqué las mamás se lo merecen! Queremos llevarles un almuerzo completo en su día especial.
                    Ayúdanos y forma parte...</p>
                    <Router>
                                    <Link to='/donate'>
                                    <strong><p className='read-more'>Leer Más</p></strong>
                                    </Link>
                                    </Router>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <a href="/donate/urbanGarden">
                    <p className='carousel-caption3'>Campaña Anterior</p>
                    <h2 className='carousel-caption4'style={{bottom:"70%"}}>#FelízDíaPapá</h2>
                    <img className="card-img-top" src={Father} alt="Huertos Urbanos" />
                    <div className="carousel-caption5">
                      <p className="">Ayudanos a llevar un plato digno para los padres de nuestra activdad, súmate y forma parte de esta iniciativa... </p>
                      <Router>
                                    <Link to='/donate'>
                                    <strong><p className='read-more'>Leer Más</p></strong>
                                    </Link>
                                    </Router>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
         

            

      </div>


    </div >

  );
}
export default CarrouselCamp;