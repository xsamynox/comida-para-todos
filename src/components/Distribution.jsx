import React from 'react';
import charts from '../images/transparency/charts.png';
import descargar from '../images/transparency/descargar.png'

const Distribution = () => {
  return (
    <section>
      <div className='section-distribution'>
        <div className='ctn-distribution'>
          <h4>Distribución</h4>
          <h2>Costos de la donación</h2>
          <p><strong>El 65% de los recursos de la Fundación</strong> se destinan a los Restaurantes, los que se encargan de realizar las comidas, apadrinar  comunidades vunerables entregándoles capacitaciones, además de compartir buenas prácticas sobre alimentación saludable.</p>
          <div className='list-distribution'>
            <ul>
              <li><p>Restaurantes</p></li>
              <li><p>Operaciones</p></li>
              <li><p>Comunicaciones</p></li>
              <li><p>Administración</p></li>
              <li><p>Transporte</p></li>
            </ul>
          </div>
        </div>
        <div>
          <img src={charts} alt='grafica' />
        </div>
      </div>
      <div className='ctn-documents'>
        <h2>Descarga el documento completo</h2>
        <button className='volBtn'>Descarga aqui<img src={descargar} alt='' /></button>
      </div>
    </section>
  );
}
export default Distribution;