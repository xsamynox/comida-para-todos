import React, { Fragment } from 'react';
import Comunidades from '../images/AboutUs/comvul.png';
import Restaurant from '../images/AboutUs/restaurantes.png';
import Productores from '../images/AboutUs/productores.png';
import Transportistas from '../images/AboutUs/furgon-escolar.png';

const Benef = () => {
    return(
        <Fragment>
          <div className='divBenef'>
          <h2 className='benTitle'>Beneficiarios</h2>
          </div>
        <div className='container-benef'>
          <div className="benef-ph">
            <img src={Comunidades} className="benefimg" alt="Beneficiarios" />
            <div className="container-imgb">
              <p className='descriptions'>Comunidades Vulnerables</p>
            </div>
            </div>
            <div className="benef-ph">
            <img src={Restaurant} className="benefimg" alt="Beneficiarios" />
            <div className="container-imgb">
              <p className='descriptions'>Restaurantes</p>
            </div>
            </div>
            <div className="benef-ph">
            <img src={Productores} className="benefimg" alt="Beneficiarios" />
            <div className="container-imgb">
              <p className='descriptions'>Pequeños Productores</p>
            </div>
            </div>
            <div className="benef-ph">
            <img src={Transportistas} className="benefimg" alt="Beneficiarios" />
            <div className="container-imgb">
              <p className='descriptions'>Transportistas pasajeros</p>
            </div>
            </div>
        </div>
        <div className='div-goTeam'>
          <p className='titleGo'>Conoce a nuestro Equipo</p>
          <button className='volBtn'>Ir a Nuestro Equipo</button>
        </div>
        </Fragment>
    )
};
export default Benef;