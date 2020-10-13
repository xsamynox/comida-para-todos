import React, { Fragment } from 'react';
import '../styles/AboutUs2.css';

const AboutHeader = () =>{
    return(
        <Fragment>
        <div className='us-Img'>
          <div className='firstDiv'>
            <hr className='firstLine' />
            <p>Sobre Nosotros</p>
            <h1>¿Quiénes Somos?</h1>
            <p className='text-initial'>
            Comida para Todos nace en período de Pandemia debido al COVID-19, lo que causo que un probema que venía arrastrandose hace año culminará este 2020: La <span className='span1'>Inseguridad Alimentaria</span>. Y es por esto que como fundación buscamos comabatirla entre todos como comunidad, generando redes y llevando alimento de calidad a las personas.
            </p>
          </div>
          <div>
          <video src="../images/Video/MEJOR-PAIS.mp4"></video>
          </div>
        </div>
      </Fragment>
    )
}
export default AboutHeader;