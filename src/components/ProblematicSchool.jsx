import React, { Fragment } from 'react';
import Porcentaje12 from '../images/ProyEscuela/Porcentaje12.png';
import Porcentaje15 from '../images/ProyEscuela/Porcentaje15.png';
import Porcentaje27 from '../images/ProyEscuela/Porcentaje27.png';
import Ods from '../images/ProyEscuela/logo-ods-blanco.png'
import CarrouselSchool from './CarouselSchool';

const ProblSchool = () =>{
    return(
        <Fragment>
            <div className='cnt-probl'>
            <p className='probtitle'>Problemática</p>
            <p className='probtxt'>Impulsamos medidas sistemáticas sobre el aprendizaje de cómo debemos Alimentarnos, tomando en cuenta qué:</p>
            </div>
            <div className='cnt-imgp'>
                <img className='circlesPercent' src={Porcentaje15} alt="15%"/>
                <img className='circlesPercent' src={Porcentaje27} alt="27%"/>
                <img className='circlesPercent' src={Porcentaje12} alt="12%"/>
            </div>
            <div className="objdesSost">
                <img className='LogoOds' src={Ods} alt="Logo ODS"/>
                <CarrouselSchool />
            </div>
       
      </Fragment>
    )
}
export default ProblSchool;